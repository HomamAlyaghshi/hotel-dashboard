import { useData } from "../../context/DataContext";

export default function RoomsStatus() {
  const { rooms } = useData();

  // تصنيف الغرف حسب الحالة والنوع
  const occupiedRooms = rooms.filter(room => room.status === "Occupied");
  const availableRooms = rooms.filter(room => room.status === "Available");

  // دالة لحساب عدد الغرف حسب النوع
  const countByType = (roomList) => {
    return roomList.reduce((acc, room) => {
      acc[room.type] = (acc[room.type] || 0) + 1;
      return acc;
    }, {});
  };

  const occupiedByType = countByType(occupiedRooms);
  const availableByType = countByType(availableRooms);

  return (
    <div className="bg-slate-200 dark:bg-darkCard p-4 rounded-lg shadow w-full h-full flex flex-col">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
        Room status
      </h2>

      <div className="flex gap-10 flex-grow">
        {/* Occupied Rooms */}
        <div className="w-1/2 flex flex-col gap-4">
          <p className="font-bold text-gray-700 dark:text-gray-200">
            Occupied rooms ({occupiedRooms.length})
          </p>
          {Object.entries(occupiedByType).map(([type, count]) => (
            <p key={type} className="text-sm font-bold text-gray-600 dark:text-gray-300">
              {type}: {count}
            </p>
          ))}
        </div>

        {/* Available Rooms */}
        <div className="w-1/2 flex flex-col gap-4">
          <p className="font-bold text-gray-700 dark:text-gray-200">
            Available rooms ({availableRooms.length})
          </p>
          {Object.entries(availableByType).map(([type, count]) => (
            <p key={type} className="text-sm font-bold text-gray-600 dark:text-gray-300">
              {type}: {count}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
