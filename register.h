#pragma once
#ifndef REGISTER_H
#define REGISTER_H

#include <string>
#include "nlohmann/json.hpp"

bool userExists(const std::string& username, const std::string& email);
void appendUser(const std::string& username, const std::string& email, const std::string& password);
void handleRegistration(const std::string& username, const std::string& email, 
                        const std::string& password, const std::string& confirmPassword, 
                        int& status, std::string& message);

#endif // REGISTER_H