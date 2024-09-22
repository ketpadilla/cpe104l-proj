#ifndef LOGIN_H
#define LOGIN_H

#include <string>

void handleLogin(const std::string& email, const std::string& password,
    int& status, std::string& message, std::string& nickname, bool& isAdmin);

#endif // LOGIN_H