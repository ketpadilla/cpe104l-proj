#include "register.h"
#include <iostream>
#include <fstream>
#include <algorithm>

using json = nlohmann::json;

bool userExists(const std::string& username, const std::string& email) {
    std::ifstream file("users.json");
    if (!file.is_open()) {
        std::cerr << "Error opening file for reading" << std::endl;
        return false;
    }

    json users;
    file >> users;

    auto it = std::find_if(users.begin(), users.end(),
        [&username, &email](const json& user) {
            return user["username"].get<std::string>() == username || user["email"].get<std::string>() == email;
        });

    return it != users.end();
}

void appendUser(const std::string& username, const std::string& email, const std::string& password) {
    std::ifstream inFile("users.json");
    if (!inFile.is_open()) {
        std::cerr << "Error opening file for reading" << std::endl;
        return;
    }

    json users;
    inFile >> users;
    inFile.close();

    json newUser = {
        {"username", username},
        {"email", email},
        {"is_admin", false},
        {"password", password}
    };

    users.push_back(newUser);

    std::ofstream outFile("users.json");
    if (outFile.is_open()) {
        outFile << users.dump(4);
        outFile.close();
        std::cout << "New user appended successfully!" << std::endl;
    }
    else {
        std::cerr << "Error opening file for writing" << std::endl;
    }
}

void handleRegistration(const std::string& username, const std::string& email, 
                        const std::string& password, const std::string& confirmPassword, 
                        int& status, std::string& message) {
    if (password != confirmPassword) {
        std::cout << "Registration failed: Passwords do not match for user " << username << std::endl;
        status = 400;
        message = "Passwords do not match";
        return;
    }

    if (userExists(username, email)) {
        std::cout << "Registration failed: User already exists - " << username << " (" << email << ")" << std::endl;
        status = 400;
        message = "User already exists";
        return;
    }

    appendUser(username, email, password);
    std::cout << "User registered successfully: " << username << " (" << email << ")" << std::endl;
    status = 201;
    message = "User registered successfully";
}