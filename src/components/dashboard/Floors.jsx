import { useData } from "../../context/DataContext";

export default function Floors() {
  const { rooms } = useData();

  // جمع بيانات الطوابق ديناميكيًا
  const floorsMap = new Map();

  rooms.forEach((room) => {
    const floorRooms = floorsMap.get(room.floorNumber) || [];
    floorRooms.push(room);
    floorsMap.set(room.floorNumber, floorRooms);
  });

  // تحويل Map إلى مصفوفة منظمة
  const floors = Array.from(floorsMap.entries())
    .sort((a, b) => a[0] - b[0]) // ترتيب حسب رقم الطابق
    .map(([floorNumber, roomsOnFloor]) => {
      const typeMap = new Map();

      roomsOnFloor.forEach((room) => {
        const key = room.type;
        if (!typeMap.has(key)) {
          typeMap.set(key, { total: 0, occupied: 0 });
        }

        const current = typeMap.get(key);
        current.total += 1;
        if (room.status === "Occupied") {
          current.occupied += 1;
        }
        typeMap.set(key, current);
      });

      const roomTypes = Array.from(typeMap.entries()).map(([type, stats]) => ({
        type,
        total: stats.total,
        occupied: stats.occupied,
      }));

      return { floor: floorNumber, rooms: roomTypes };
    });

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow w-full">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Floors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {floors.map(({ floor, rooms }) => (
          <div
            key={floor}
            className="bg-gray-100 dark:bg-gray-800 rounded-md p-4"
          >
            <h3 className="text-base font-bold mb-3 text-gray-800 dark:text-white">
              Floor {floor}
            </h3>

            <div className="space-y-2">
              {rooms.map(({ type, total, occupied }, idx) => {
                const available = total - occupied;
                return (
                  <div key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">
                      {type} Room - Total: {total}
                    </p>
                    <p>
                      <span className="text-green-500 font-medium">Available:</span> {available} &nbsp;|&nbsp;
                      <span className="text-red-500 font-medium">Occupied:</span> {occupied}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
