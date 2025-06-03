import React, { useState } from "react";
import { useData } from "../context/DataContext";

export default function Rooms() {
  const { rooms, setRooms, roomTypeStats, guests } = useData();

  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredRooms = rooms.filter(room => {
    return (
      (filterType === "All" || room.type === filterType) &&
      (filterStatus === "All" || room.status === filterStatus)
    );
  });

  const toggleRoomStatus = (roomNumber) => {
    setRooms(prevRooms =>
      prevRooms.map(room =>
        room.number === roomNumber
          ? {
              ...room,
              status: room.status === "Available" ? "Occupied" : "Available"
            }
          : room
      )
    );
  };

  const roomTypes = ["All", ...roomTypeStats.map(rt => rt.type)];
  const statuses = ["All", "Available", "Occupied"];

  return (
    <div className="p-6 bg-white dark:bg-darkCard rounded-lg shadow w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Rooms</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
            Filter by Type:
          </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {roomTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
            Filter by Status:
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 rounded border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-auto">
        {filteredRooms.map(({ number, type, status, floorNumber }) => {
          const roomInfo = roomTypeStats.find(rt => rt.type === type);

          // البحث عن الضيف الحالي في الغرفة، شرط أن يكون Checked-In
          const currentGuest = guests.find(
            guest => guest.room === number && guest.status === "Checked-In"
          );

          return (
            <div
              key={number}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex flex-col"
            >
              {roomInfo && (
                <img
                  src={roomInfo.image}
                  alt={type}
                  className="w-full h-32 object-cover rounded mb-3"
                />
              )}

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Room {number}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300">Type: {type}</p>

              <p
                className={`text-sm font-medium mt-1 ${
                  status === "Available" ? "text-green-600" : "text-red-600"
                }`}
              >
                Status: {status}
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300">Floor: {floorNumber}</p>

              {currentGuest ? (
                <div className="my-4 p-2 bg-blue-100 dark:bg-blue-900 rounded text-sm">
                  <p ><strong>Guest:</strong> {currentGuest.name}</p>
                  <p>
                    <strong>Check-Out:</strong>{" "}
                    {new Date(currentGuest.checkOut).toLocaleString("ar-EG", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </p>
                </div>
              ) : (
                <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
                  No guest currently checked-in
                </p>
              )}

              <button
                onClick={() => toggleRoomStatus(number)}
                className="mt-auto self-start px-3 py-1 rounded bg-primary text-white hover:bg-primaryDark transition"
              >
                Toggle Status
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
