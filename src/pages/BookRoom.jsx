import React, { useState } from "react";
import { useData } from "../context/DataContext";

export default function BookRoom() {
  const { rooms, guests, setGuests } = useData();

  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // الغرف المتاحة حسب النوع المختار
  const availableRooms = rooms.filter(
    (room) => room.status === "Available" && room.type === roomType
  );

  const handleBooking = () => {
    if (!name || !roomNumber || !checkIn || !checkOut) {
      alert("يرجى تعبئة جميع الحقول");
      return;
    }

    const newGuest = {
      id: guests.length + 1,
      name,
      room: parseInt(roomNumber),
      checkIn,
      checkOut,
      status: "Checked-In",
    };

    setGuests([...guests, newGuest]);
    alert("تم حجز الغرفة بنجاح ✅");

    // تصفير الحقول
    setName("");
    setRoomType("");
    setRoomNumber("");
    setCheckIn("");
    setCheckOut("");
  };

  return (
    <div className="p-6 bg-white dark:bg-darkCard rounded-lg shadow w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Book a Room
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Guest Name"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          value={roomType}
          onChange={(e) => {
            setRoomType(e.target.value);
            setRoomNumber(""); // reset room number
          }}
        >
          <option value="">Select Room Type</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
          <option value="Triple">Triple</option>
        </select>

        {roomType && (
          <select
            className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
          >
            <option value="">Select Room</option>
            {availableRooms.map((room) => (
              <option key={room.number} value={room.number}>
                Room {room.number} (Floor {room.floorNumber})
              </option>
            ))}
          </select>
        )}

        <input
          type="datetime-local"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />

        <input
          type="datetime-local"
          className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />

        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
