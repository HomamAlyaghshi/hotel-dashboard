import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function RoomOccupancyOverview() {
  const { roomStats } = useContext(DataContext);
  const { totalRooms, occupiedRooms } = roomStats;
  const availableRooms = totalRooms - occupiedRooms;
  const occupancyRate = Math.round((occupiedRooms / totalRooms) * 100);

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow h-full grid ">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
        Room Occupancy Overview
      </h2>

      {/* النسبة المئوية */}
      <div className="mb-3">
        <p className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-1">
          Occupancy Rate: <span className="text-primary">{occupancyRate}%</span>
        </p>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: `${occupancyRate}%` }}
          ></div>
        </div>
      </div>

      {/* التفاصيل الرقمية */}
      <div className="flex justify-between text-sm font-medium mt-3 text-gray-700 dark:text-gray-300">
        <div>
          <p>Occupied Rooms</p>
          <p className="font-bold text-red-600 dark:text-red-400 text-lg">{occupiedRooms}</p>
        </div>
        <div>
          <p>Available Rooms</p>
          <p className="font-bold text-green-600 dark:text-green-400 text-lg">{availableRooms}</p>
        </div>
        <div>
          <p>Total Rooms</p>
          <p className="font-bold text-blue-600 dark:text-blue-400 text-lg">{totalRooms}</p>
        </div>
      </div>
    </div>
  );
}
