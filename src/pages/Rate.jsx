import React from "react";
import { useData } from "../context/DataContext";

export default function Rate() {
  const { roomTypeStats } = useData();

  return (
    <div className="p-6 bg-white dark:bg-darkCard rounded-lg shadow w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Room Rates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomTypeStats.map((room) => (
          <div
            key={room.type}
            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700 shadow-sm"
          >
            <img
              src={room.image}
              alt={room.type}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {room.type} Room
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              💰 Price: ${room.pricePerRoom} / night
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Occupied: {room.occupied} / {room.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
