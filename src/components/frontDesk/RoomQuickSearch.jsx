import { useState } from "react";
import { Search } from "lucide-react";
import { useData } from "../../context/DataContext";

export default function RoomQuickSearch() {
  const { rooms } = useData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRooms = rooms.filter(
    (room) =>
      room.number.toString().includes(searchTerm.trim()) ||
      room.type.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow h-full">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
        Room Quick Search
      </h2>

      <div className="flex items-center border rounded-md overflow-hidden bg-secondary dark:bg-gray-700 px-2 mb-3">
        <Search className="text-gray-500 dark:text-gray-300" size={18} />
        <input
          type="text"
          placeholder="Search by room number or type"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ml-2 w-full bg-transparent focus:outline-none text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 py-1"
        />
      </div>

      <div className="space-y-2 max-h-40 overflow-y-auto">
        {filteredRooms.map((room) => (
          <div
            key={room.number}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2"
          >
            <div>
              <p className="font-semibold text-sm text-gray-800 dark:text-white">
                Room {room.number}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">{room.type}</p>
            </div>
            <span
              className={`text-xs font-bold px-2 py-1 rounded ${
                room.status === "Available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {room.status}
            </span>
          </div>
        ))}
        {filteredRooms.length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400">No rooms found.</p>
        )}
      </div>
    </div>
  );
}
