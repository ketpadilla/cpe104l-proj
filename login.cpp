#include "login.h"
#include <iostream>
#include <fstream>
#include "nlohmann/json.hpp"

using json = nlohmann::json;

void handleLogin(const std::string& email, const std::string& password, 
                 int& status, std::string& message, std::string& nickname, bool& isAdmin) {
    std::ifstream file("users.json");
    if (!file.is_open()) {
        std::cerr << "Error opening file for reading" << std::endl;
        status = 500;
        message = "Internal server error";
        return;
    }

    json users;
    file >> users;

    auto it = std::find_if(users.begin(), users.end(),
        [&email, &password](const json& user) {
            return user["email"].get<std::string>() == email &&
                   user["password"].get<std::string>() == password;
        });

    if (it != users.end()) {
        status = 200;
        message = "Login successful";
        nickname = (*it)["username"].get<std::string>();
        isAdmin = (*it)["is_admin"].get<bool>();
        std::cout << "User logged in successfully: " << email << " (Admin: " << (isAdmin ? "Yes" : "No") << ")" << std::endl;
    } else {
        status = 401;
        message = "Invalid email or password";
        isAdmin = false;
        std::cout << "Login failed for email: " << email << std::endl;
    }
}