    #include <iostream>
    #include <fstream>
    #include <regex>
    #include "nlohmann/json.hpp"
    #include <limits>
    #include "httplib.h"
    #include "register.h"
    #include "login.h"
    #include "booking.h"
    using namespace std;
    using json = nlohmann::json;

    // Function to create, output, and save a JSON array
    void createAndSaveJsonArray() {
        json users = json::array({
            {
                {"username", "John Doe"},
                {"email", "john.doe@example.com"},
                {"is_admin", false},
                {"password", "Imadogimadog1!"}
            },
            {
                {"username", "Jane Smith"},
                {"email", "jane.smith@example.com"},
                {"is_admin", true},
                {"password", "Pa$$w0rd123"}
            },
            {
                {"username", "Alice Johnson"},
                {"email", "alice.johnson@example.com"},
                {"is_admin", false},
                {"password", "Qwerty!23"}
            }
            });

        cout << "Created JSON array:" << endl << users.dump(4) << endl;

        ofstream file("users.json");
        if (file.is_open()) {
            file << users.dump(4);
            file.close();
            cout << "JSON file saved successfully!" << endl;
        }
        else {
            cerr << "Error opening file for writing" << endl;
        }
    }

    // Function to check if a user is admin
    bool isUserAdmin(const string& username) {
        ifstream file("users.json");
        if (!file.is_open()) {
            cerr << "Error opening file for reading" << endl;
            return false;
        }

        json users;
        file >> users;

        auto it = find_if(users.begin(), users.end(),
            [&username](const json& user) { 
                return user["username"].get<string>() == username; 
            });

        if (it != users.end()) {
            return (*it)["is_admin"].get<bool>();
        }
        return false;
    }

    // Function to count users in the JSON file
    int countUsers() {
        ifstream file("users.json");
        if (!file.is_open()) {
            cerr << "Error opening file for reading" << endl;
            return 0;
        }

        json users;
        file >> users;

        return users.size();
    }

    // Function to delete a user from the JSON file
    void deleteUser(const string& username, const string& password) {
        ifstream inFile("users.json");
        if (!inFile.is_open()) {
            cerr << "Error opening file for reading" << endl;
            return;
        }

        json users;
        inFile >> users;
        inFile.close();

        auto it = find_if(users.begin(), users.end(),
            [&username](const json& user) {
                return user["username"].get<string>() == username;
            });

        if (it != users.end()) {
            if ((*it)["password"].get<string>() == password) {
                users.erase(it);
                ofstream outFile("users.json");
                if (outFile.is_open()) {
                    outFile << users.dump(4);
                    outFile.close();
                    cout << "User " << username << " deleted successfully!" << endl;
                } else {
                    cerr << "Error opening file for writing" << endl;
                }
            } else {
                cout << "Incorrect password. User not deleted." << endl;
            }
        } else {
            cout << "User " << username << " not found." << endl;
        }
    }

    int main() {
        httplib::Server svr;

        // Add a pre-flight OPTIONS handler for CORS (register)
        svr.Options("/register", [](const httplib::Request&, httplib::Response& res) {
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "POST, OPTIONS");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");
            res.status = 204; // No content
        });

        // Registration route
        svr.Post("/register", [](const httplib::Request& req, httplib::Response& res) {
            // Set CORS headers
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "POST");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");

            auto username = req.get_param_value("username");
            auto email = req.get_param_value("email");
            auto password = req.get_param_value("password");
            auto confirmPassword = req.get_param_value("confirmPassword");

            int status;
            std::string message;

            handleRegistration(username, email, password, confirmPassword, status, message);

            res.status = status;
            res.set_content(message, "text/plain");
        });

        // Add a pre-flight OPTIONS handler for login
        svr.Options("/login", [](const httplib::Request&, httplib::Response& res) {
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "POST, OPTIONS");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");
            res.status = 204; // No content
        });

        // Login route
        svr.Post("/login", [](const httplib::Request& req, httplib::Response& res) {
            // Set CORS headers
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "POST");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");

            auto email = req.get_param_value("email");
            auto password = req.get_param_value("password");

            int status;
            std::string message;
            std::string nickname;
            bool isAdmin;

            handleLogin(email, password, status, message, nickname, isAdmin);

            res.status = status;
            if (status == 200) {
                json response = {
                    {"message", message},
                    {"nickname", nickname},
                    {"is_admin", isAdmin}
                };
                res.set_content(response.dump(), "application/json");
            } else {
                res.set_content(message, "text/plain");
            }
        });

        // Add a pre-flight OPTIONS handler for CORS (booking)
        svr.Options("/book", [](const httplib::Request&, httplib::Response& res) {
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "POST, OPTIONS");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");
            res.status = 204; // No content
        });

        // Get max guests route
        svr.Get("/get-max-guests", [](const httplib::Request& req, httplib::Response& res) {
            res.set_header("Access-Control-Allow-Origin", "*");
            
            std::string roomId = req.get_param_value("roomId");
            
            // Debug output
            std::cout << "\n--- Debug: /get-max-guests ---" << std::endl;
            std::cout << "Received request with roomId: " << roomId << std::endl;

            int maxGuests = getMaxGuests(roomId);
            json response = {{"maxGuests", maxGuests}};

            // Debug output
            std::cout << "Sending response: " << response.dump(2) << std::endl;
            std::cout << "--- End Debug: /get-max-guests ---\n" << std::endl;

            res.set_content(response.dump(), "application/json");
        });

        // Calculate total route
        svr.Options("/calculate-total", [](const httplib::Request& req, httplib::Response& res) {
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "POST, OPTIONS");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");
            res.status = 204; // No content
        });

        svr.Post("/calculate-total", [](const httplib::Request& req, httplib::Response& res) {
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "POST");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");

            std::cout << "Received request body for calculate-total: " << req.body << std::endl;

            json j;
            try {
                j = json::parse(req.body);
            } catch (json::parse_error& e) {
                res.status = 400;
                res.set_content("Invalid JSON: " + std::string(e.what()), "text/plain");
                return;
            }

            // Validate required fields
            if (!j.contains("roomId") || !j.contains("checkInDate") || !j.contains("checkOutDate") || 
                !j.contains("guestCount") || !j.contains("addons")) {
                res.status = 400;
                res.set_content("Missing required fields", "text/plain");
                return;
            }

            // Read rooms from JSON file
            std::ifstream roomsFile("rooms.json");
            json rooms;
            roomsFile >> rooms;

            // Find the room
            auto room = std::find_if(rooms.begin(), rooms.end(), [&](const json& r) {
                return r["id"] == j["roomId"];
            });

            if (room != rooms.end()) {
                // Calculate number of nights
                int numberOfNights = calculateNights(j["checkInDate"], j["checkOutDate"]);

                // Calculate the total
                PriceDetails details = calculateActualTotal(*room, j["addons"], numberOfNights, j["couponCode"]);

                // Extract coupon code if present
                std::string couponCode = j.value("couponCode", "");

                // Generate a temporary booking ID for coupon validation
                std::string tempBookingId = "TEMP-" + std::to_string(std::chrono::system_clock::to_time_t(std::chrono::system_clock::now()));

                // Apply coupon if provided
                double discountFactor = 1.0;
                if (!couponCode.empty()) {
                    discountFactor = useCoupon(couponCode, tempBookingId, j["roomId"], j["checkInDate"], j["checkOutDate"], 
                                               j["guestCount"], details.total, "N/A", numberOfNights);
                }

                int discountedTotal = static_cast<int>(details.total * discountFactor);

                json result = {
                    {"subtotal", details.subtotal},
                    {"addonTotal", details.addonTotal},
                    {"total", details.total},
                    {"discountedTotal", details.discountedTotal},
                    {"basePricePerNight", details.basePricePerNight},
                    {"numberOfNights", details.numberOfNights}
                };

                std::cout << "Calculate total result: " << result.dump(2) << std::endl;

                res.set_content(result.dump(), "application/json");
            } else {
                res.status = 404;
                res.set_content("Room not found", "text/plain");
            }
        });

        // Booking route
        svr.Post("/book", [](const httplib::Request& req, httplib::Response& res) {
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "POST");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");

            std::cout << "Received request body: " << req.body << std::endl;

            json j;
            try {
                j = json::parse(req.body);
            } catch (json::parse_error& e) {
                res.status = 400;
                res.set_content("Invalid JSON: " + std::string(e.what()), "text/plain");
                return;
            }

            // Validate required fields
            if (!j.contains("roomId") || !j.contains("checkInDate") || !j.contains("checkOutDate") || 
                !j.contains("guestCount") || !j.contains("addons") || !j.contains("userInfo")) {
                res.status = 400;
                res.set_content("Missing required fields", "text/plain");
                return;
            }

            // Extract coupon code if present
            std::string couponCode = j.value("couponCode", "");

            json result = bookRoom(j["roomId"], j["addons"], j["checkInDate"], j["checkOutDate"], 
                                   j["guestCount"], j["userInfo"], couponCode);

            std::cout << "Booking result: " << result.dump(2) << std::endl;

            res.set_content(result.dump(), "application/json");
        });

        // Available Rooms route
        svr.Get("/available-rooms", [](const httplib::Request& req, httplib::Response& res) {
            res.set_header("Access-Control-Allow-Origin", "*");
            res.set_header("Access-Control-Allow-Methods", "GET");
            res.set_header("Access-Control-Allow-Headers", "Content-Type");

            // Read rooms from JSON file
            std::ifstream roomsFile("rooms.json");
            if (!roomsFile.is_open()) {
                res.status = 500;
                res.set_content("Unable to open rooms.json", "text/plain");
                return;
            }

            json rooms;
            roomsFile >> rooms;

            // Filter available rooms and format room names
            json availableRooms = json::array();
            for (const auto& room : rooms) {
                if (!room["isBooked"]) {
                    std::string id = room["id"];
                    std::string type = room["type"];
                    
                    // Extract room number from id
                    std::string number = id.substr(id.find_last_of('-') + 1);
                    
                    // Format room name
                    std::string roomName = type + " " + number;

                    // Convert base price to pesos
                    int basePriceUSD = room["basePrice"].get<int>();
                    int basePricePHP = basePriceUSD * 50;

                    json formattedRoom = {
                        {"id", id},
                        {"name", roomName},
                        {"basePrice", basePricePHP}
                    };
                    availableRooms.push_back(formattedRoom);
                }
            }

            // Send the response
            res.set_content(availableRooms.dump(), "application/json");
        });

        std::cout << "Server started on http://localhost:8080" << std::endl;
        svr.listen("localhost", 8080);

        return 0;
    }