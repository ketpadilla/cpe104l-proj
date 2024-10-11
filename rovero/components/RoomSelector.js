import React, { useState, useEffect } from 'react';

const RoomSelector = ({ rooms = [], selectedRoom, onSelectRoom }) => {
  const roomTypes = [...new Set(rooms.map(room => room.name.split(' ')[0]))];

  if (rooms.length === 0) {
    return <div>Loading rooms...</div>;
  }

  const formatRoomName = (name) => {
    const parts = name.split(/[-\s]/);
    const type = parts[0];
    const number = parts[parts.length - 1];
    return { type, number: number.padStart(2, '0') };
  };

  return (
    <div className="room-selector">
      <select 
        className="room-type-selector"
        onChange={(e) => {
          const firstRoomOfType = rooms.find(room => room.name.startsWith(e.target.value));
          if (firstRoomOfType) onSelectRoom(firstRoomOfType.id);
        }}
      >
        <option value="">All Room Types</option>
        {roomTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <div className="hotel-floor">
        {rooms.map((room) => {
          const { type, number } = formatRoomName(room.name);
          return (
            <button
              key={room.id}
              className={`room ${selectedRoom === room.id ? 'selected' : ''} ${room.isAvailable !== false ? 'available' : 'unavailable'}`}
              onClick={() => room.isAvailable !== false && onSelectRoom(room.id)}
              disabled={room.isAvailable === false}
            >
              <div className="room-type">{type}</div>
              <div className="room-number">{number}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RoomSelector;