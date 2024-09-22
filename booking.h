#pragma once
#ifndef BOOKING_H
#define BOOKING_H

#include <string>
#include "nlohmann/json.hpp"

using json = nlohmann::json;

struct PriceDetails {
    int subtotal;
    int addonTotal;
    int total;
    int basePrice;
    int basePricePerNight;
    int numberOfNights;
    int discountedTotal;
};

int calculateNights(const std::string& checkInDate, const std::string& checkOutDate);

PriceDetails calculateActualTotal(const json& room, const json& addons, int numberOfNights, const std::string& couponCode);

double useCoupon(const std::string& couponCode, const std::string& bookingId, const std::string& roomId, 
                 const std::string& checkInDate, const std::string& checkOutDate, int guestCount, 
                 int total, const std::string& bookingTime, int numberOfNights);

json bookRoom(const std::string& roomId, const json& addons, const std::string& checkInDate, 
              const std::string& checkOutDate, int guestCount, const json& userInfo, const std::string& couponCode);

// ... any other function declarations
int getMaxGuests(const std::string& roomId);
#endif // BOOKING_H