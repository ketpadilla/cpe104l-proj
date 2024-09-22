#include "booking.h"
#include <fstream>
#include <chrono>
#include <iomanip>
#include <sstream>
#include <algorithm>
#include <ctime>
#include <iostream>

#define _CRT_SECURE_NO_WARNINGS

using json = nlohmann::json;

// Helper function to parse date string
std::chrono::system_clock::time_point parseDate(const std::string& dateStr) {
    std::tm tm = {};
    std::istringstream ss(dateStr);
    ss >> std::get_time(&tm, "%Y-%m-%d");
    return std::chrono::system_clock::from_time_t(std::mktime(&tm));
}

// Helper function to calculate number of nights
int calculateNights(const std::string& checkInDate, const std::string& checkOutDate) {
    auto start = parseDate(checkInDate);
    auto end = parseDate(checkOutDate);
    return static_cast<int>(std::chrono::duration_cast<std::chrono::hours>(end - start).count() / 24);
}

int getMaxGuests(const std::string& roomId) {
    // Read rooms from JSON file
    std::ifstream roomsFile("rooms.json");
    json rooms;
    roomsFile >> rooms;

    // Find the room
    auto room = std::find_if(rooms.begin(), rooms.end(), [&roomId](const json& room) {
        return room["id"] == roomId;
    });

    if (room == rooms.end()) {
        return 0; // Room not found, return 0 or handle error as appropriate
    }

    std::string roomType = (*room)["type"];
    
    if (roomType == "Standard Room") {
        return 3;
    } else if (roomType == "Luxury Room") {
        return 5;
    } else if (roomType == "Penthouse") {
        return 7;
    } else {
        return 0; // Unknown room type, return 0 or handle error as appropriate
    }
}

PriceDetails calculateActualTotal(const json& room, const json& addons, int numberOfNights, const std::string& couponCode) {
    PriceDetails details;
    
    std::cout << "Calculating actual total for room: " << room.dump(2) << std::endl;
    std::cout << "Addons: " << addons.dump(2) << std::endl;
    std::cout << "Number of nights: " << numberOfNights << std::endl;
    std::cout << "Coupon code received: " << (couponCode.empty() ? "None" : couponCode) << std::endl;

    if (!room.contains("basePrice")) {
        std::cerr << "Error: Room does not contain basePrice" << std::endl;
        return PriceDetails{0, 0, 0, 0, 0, numberOfNights};
    }
    
    details.basePricePerNight = room["basePrice"].get<int>() * 50;  // Convert USD to PHP
    details.subtotal = details.basePricePerNight * numberOfNights;
    details.addonTotal = 0;
    details.numberOfNights = numberOfNights;

    std::cout << "Base price per night: " << details.basePricePerNight << " PHP" << std::endl;
    std::cout << "Initial subtotal: " << details.subtotal << " PHP" << std::endl;

    if (addons.contains("enableWifi") && addons["enableWifi"]) {
        details.addonTotal += 500;
        std::cout << "Added WiFi: +500 PHP" << std::endl;
    }
    if (addons.contains("smokingZone") && addons["smokingZone"]) {
        details.addonTotal += 750;
        std::cout << "Added Smoking Zone: +750 PHP" << std::endl;
    }
    if (addons.contains("view")) {
        std::string view = addons["view"];
        if (view == "City") {
            details.addonTotal += 1000;
            std::cout << "Added City View: +1000 PHP" << std::endl;
        }
        else if (view == "Ocean") {
            details.addonTotal += 1500;
            std::cout << "Added Ocean View: +1500 PHP" << std::endl;
        }
        else if (view == "Mountain") {
            details.addonTotal += 1250;
            std::cout << "Added Mountain View: +1250 PHP" << std::endl;
        }
    }
    if (addons.contains("serviceGuide") && addons["serviceGuide"]) {
        details.addonTotal += 250;
        std::cout << "Added Service Guide: +250 PHP" << std::endl;
    }
    if (addons.contains("dinner") && addons["dinner"]) {
        details.addonTotal += 1250;
        std::cout << "Added Dinner: +1250 PHP" << std::endl;
    }
    if (addons.contains("petAllowed") && addons["petAllowed"]) {
        details.addonTotal += 1000;
        std::cout << "Added Pet Allowance: +1000 PHP" << std::endl;
    }
    if (addons.contains("swimmingPool") && addons["swimmingPool"]) {
        details.addonTotal += 750;
        std::cout << "Added Swimming Pool Access: +750 PHP" << std::endl;
    }
    if (addons.contains("breakfastBuffet") && addons["breakfastBuffet"]) {
        details.addonTotal += 1000;
        std::cout << "Added Breakfast Buffet: +1000 PHP" << std::endl;
    }
    if (addons.contains("childCorner") && addons["childCorner"]) {
        details.addonTotal += 500;
        std::cout << "Added Child Corner: +500 PHP" << std::endl;
    }

    details.total = details.subtotal + details.addonTotal;
    details.discountedTotal = details.total;  // Initialize discounted total to full total

    std::cout << "Addon total: " << details.addonTotal << " PHP" << std::endl;
    std::cout << "Subtotal: " << details.subtotal << " PHP" << std::endl;
    std::cout << "Total before coupon: " << details.total << " PHP" << std::endl;

    // Apply coupon if provided
    if (!couponCode.empty()) {
        std::string tempBookingId = "TEMP-" + std::to_string(std::chrono::system_clock::to_time_t(std::chrono::system_clock::now()));
        double discountFactor = useCoupon(couponCode, tempBookingId, room["id"], 
                                          "2023-01-01", "2023-12-31", // Placeholder dates
                                          1, // Placeholder guest count
                                          details.total, "N/A", numberOfNights);
        
        if (discountFactor < 1.0) {
            details.discountedTotal = static_cast<int>(details.total * discountFactor);
            int couponDiscount = details.total - details.discountedTotal;
            std::cout << "Coupon " << couponCode << " applied. Discount: " 
                      << couponDiscount << " PHP" << std::endl;
        } else {
            std::cout << "Coupon " << couponCode << " was not valid or not applicable." << std::endl;
        }
    }

    std::cout << "Final discounted total: " << details.discountedTotal << " PHP" << std::endl;

    return details;
}

int calculateTotal(const json& room, const json& addons) {
    PriceDetails details;
    
    if (!room.contains("basePrice")) {
        std::cerr << "Error: Room does not contain basePrice" << std::endl;
        return 0;
    }
    
    details.basePricePerNight = room["basePrice"].get<int>();
    details.basePrice = details.basePricePerNight * 50;  // Convert base price to PHP
    details.addonTotal = 0;

    std::cout << "Base price per night: " << details.basePricePerNight << " USD" << std::endl;
    std::cout << "Base price: " << details.basePrice << " PHP" << std::endl;

    if (addons.contains("enableWifi") && addons["enableWifi"]) {
        details.addonTotal += 500;
        std::cout << "Added WiFi: +500 PHP" << std::endl;
    }
    if (addons.contains("smokingZone") && addons["smokingZone"]) {
        details.addonTotal += 750;
        std::cout << "Added Smoking Zone: +750 PHP" << std::endl;
    }
    // ... (other addons)

    details.subtotal = details.basePrice + details.addonTotal;
    details.total = details.subtotal;

    std::cout << "Addon total: " << details.addonTotal << " PHP" << std::endl;
    std::cout << "Subtotal: " << details.subtotal << " PHP" << std::endl;
    std::cout << "Total: " << details.total << " PHP" << std::endl;

    return details.total;  // Return only the total to maintain compatibility
}

double useCoupon(const std::string& couponCode, const std::string& bookingId, const std::string& roomId, 
                 const std::string& checkInDate, const std::string& checkOutDate, int guestCount, 
                 int total, const std::string& bookingTime, int numberOfNights) {
    std::ifstream couponFile("coupons.json");
    if (!couponFile.is_open()) {
        std::cerr << "Error: Unable to open coupons.json" << std::endl;
        return 1.0; // No discount
    }

    json coupons;
    couponFile >> coupons;

    std::cout << "Checking coupon: " << couponCode << std::endl;

    for (const auto& coupon : coupons) {
        if (coupon["name"] == couponCode) {
            bool isValid = true;
            const auto& minimum = coupon["minimum"];

            std::cout << "Coupon found. Checking requirements:" << std::endl;

            // Check all minimum requirements
            if (minimum.contains("numberOfNights")) {
                std::cout << "  Number of nights - Required: " << minimum["numberOfNights"] 
                          << ", Actual: " << numberOfNights << std::endl;
                if (numberOfNights < minimum["numberOfNights"]) isValid = false;
            }
            if (minimum.contains("guestCount")) {
                std::cout << "  Guest count - Required: " << minimum["guestCount"] 
                          << ", Actual: " << guestCount << std::endl;
                if (guestCount < minimum["guestCount"]) isValid = false;
            }
            if (minimum.contains("total")) {
                std::cout << "  Total - Required: " << minimum["total"] 
                          << ", Actual: " << total << std::endl;
                if (total < minimum["total"]) isValid = false;
            }
            if (minimum.contains("roomId")) {
                std::cout << "  Room ID - Required: " << minimum["roomId"] 
                          << ", Actual: " << roomId << std::endl;
                if (roomId != minimum["roomId"]) isValid = false;
            }

            // Check date range if specified
            if (minimum.contains("checkInDate") && minimum.contains("checkOutDate")) {
                auto bookingCheckIn = parseDate(checkInDate);
                auto bookingCheckOut = parseDate(checkOutDate);
                auto minCheckIn = parseDate(minimum["checkInDate"]);
                auto minCheckOut = parseDate(minimum["checkOutDate"]);

                std::cout << "  Check-in date - Required range: " << minimum["checkInDate"] 
                          << " to " << minimum["checkOutDate"] << ", Actual: " << checkInDate << std::endl;

                if (bookingCheckIn < minCheckIn || bookingCheckOut > minCheckOut) isValid = false;
            }

            if (isValid) {
                std::cout << "Coupon " << couponCode << " is valid and applied." << std::endl;
                if (coupon.contains("flatDiscount")) {
                    int flatDiscount = coupon["flatDiscount"].get<int>();
                    int totalDiscount = flatDiscount * numberOfNights;
                    double discountRate = 1.0 - (static_cast<double>(totalDiscount) / total);
                    std::cout << "Flat discount: " << flatDiscount << " PHP per night" << std::endl;
                    std::cout << "Total discount: " << totalDiscount << " PHP" << std::endl;
                    return std::max(0.0, discountRate); // Ensure discount doesn't exceed 100%
                } else if (coupon.contains("discountRate")) {
                    double discountRate = coupon["discountRate"].get<double>();
                    std::cout << "Discount rate: " << (discountRate * 100) << "%" << std::endl;
                    return 1.0 - discountRate;
                }
            } else {
                std::cout << "Coupon " << couponCode << " requirements not met." << std::endl;
            }
        }
    }

    std::cout << "Coupon " << couponCode << " not found in the coupon list." << std::endl;
    return 1.0; // No discount
}

json bookRoom(const std::string& roomId, const json& addons, const std::string& checkInDate, const std::string& checkOutDate, int guestCount, const json& userInfo, const std::string& couponCode) {
    std::cout << "Received roomId: " << roomId << std::endl;
    std::cout << "Received addons: " << addons.dump() << std::endl;
    std::cout << "Received checkInDate: " << checkInDate << std::endl;
    std::cout << "Received checkOutDate: " << checkOutDate << std::endl;
    std::cout << "Received guestCount: " << guestCount << std::endl;
    std::cout << "Received userInfo: " << userInfo.dump() << std::endl;
    std::cout << "Received couponCode: " << couponCode << std::endl;

    // Read rooms from JSON file
    std::ifstream roomsFile("rooms.json");
    if (!roomsFile.is_open()) {
        std::cerr << "Error: Unable to open rooms.json" << std::endl;
        return json({{"error", "Unable to open rooms.json"}});
    }
    json rooms;
    roomsFile >> rooms;

    // Find the room
    auto selectedRoom = std::find_if(rooms.begin(), rooms.end(),
        [&roomId](const json& room) { return room["id"] == roomId; });

    if (selectedRoom == rooms.end()) {
        std::cerr << "Error: Room not found" << std::endl;
        return json({{"error", "Room not found"}});
    }

    // Calculate number of nights
    int numberOfNights = calculateNights(checkInDate, checkOutDate);

    // Calculate the total
    PriceDetails priceDetails = calculateActualTotal(*selectedRoom, addons, numberOfNights, couponCode);

    // Get current time
    auto now = std::chrono::system_clock::now();
    std::time_t now_c = std::chrono::system_clock::to_time_t(now);
    
    // Convert to local time
    std::tm local_tm;
    localtime_s(&local_tm, &now_c);
    
    // Format the time string
    char buffer[26];
    strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", &local_tm);
    std::string bookingTime(buffer);

    // Create a unique booking ID
    std::string bookingId = "BOOK-" + std::to_string(std::chrono::system_clock::to_time_t(now));

    json booking = {
        {"bookingId", bookingId},
        {"roomId", (*selectedRoom)["id"]},
        {"checkInDate", checkInDate},
        {"checkOutDate", checkOutDate},
        {"guestCount", guestCount},
        {"numberOfNights", numberOfNights},
        {"basePricePerNight", priceDetails.basePricePerNight},
        {"subtotal", priceDetails.subtotal},
        {"addonTotal", priceDetails.addonTotal},
        {"total", priceDetails.total},
        {"discountedTotal", priceDetails.discountedTotal},
        {"bookingTime", bookingTime}
    };

    // Add optional fields only if they're not empty
    if (!addons.empty()) {
        booking["addons"] = addons;
    }
    if (!userInfo.empty()) {
        booking["userInfo"] = userInfo;
    }

    // Read existing bookings
    json bookings;
    std::ifstream bookingsFile("bookings.json");
    if (bookingsFile.is_open()) {
        std::string bookingsContent((std::istreambuf_iterator<char>(bookingsFile)), std::istreambuf_iterator<char>());
        std::cout << "bookings.json content: " << bookingsContent << std::endl;
        if (!bookingsContent.empty()) {
            bookings = json::parse(bookingsContent);
        } else {
            std::cout << "Note: bookings.json is empty, initializing as empty array" << std::endl;
            bookings = json::array();
        }
        bookingsFile.close();
    } else {
        std::cout << "Note: bookings.json does not exist, creating new file" << std::endl;
        bookings = json::array();
    }

    // Add new booking
    bookings.push_back(booking);

    // Write updated bookings back to JSON file
    std::ofstream bookingsOutFile("bookings.json");
    if (!bookingsOutFile.is_open()) {
        std::cerr << "Error: Unable to open bookings.json for writing" << std::endl;
        return json({{"error", "Unable to update bookings.json"}});
    }
    bookingsOutFile << bookings.dump(4);
    bookingsOutFile.close();

    // Only update rooms.json after successful booking
    (*selectedRoom)["isBooked"] = true;
    (*selectedRoom)["bookId"] = booking["bookingId"];

    // Write updated rooms back to JSON file
    std::ofstream outFile("rooms.json");
    if (!outFile.is_open()) {
        std::cerr << "Error: Unable to open rooms.json for writing" << std::endl;
        return json({{"error", "Unable to update rooms.json"}});
    }
    outFile << rooms.dump(4);
    outFile.close();

    std::cout << "Booking successfully added to bookings.json and rooms.json updated" << std::endl;

    return json({
        {"message", "Booking successful"},
        {"bookingId", bookingId},
        {"roomId", (*selectedRoom)["id"]},
        {"numberOfNights", numberOfNights},
        {"basePricePerNight", priceDetails.basePricePerNight},
        {"subtotal", priceDetails.subtotal},
        {"addonTotal", priceDetails.addonTotal},
        {"total", priceDetails.total},
        {"discountedTotal", priceDetails.discountedTotal},
        {"bookingTime", bookingTime}
    });
}
