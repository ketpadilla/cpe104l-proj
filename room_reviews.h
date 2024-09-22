#pragma once
#ifndef ROOM_REVIEWS_H
#define ROOM_REVIEWS_H

#include <string>
#include "nlohmann/json.hpp"

using json = nlohmann::json;

void addRoomReview(int roomId, const std::string& username, const std::string& comment, int rating);
json getRoomReviews(int roomId);
void updateRoomRating(int roomId);

#endif // ROOM_REVIEWS_H