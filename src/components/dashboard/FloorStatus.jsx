import { useData } from "../../context/DataContext";

export default function FloorStatus() {
  const { rooms } = useData();

  // حساب إجمالي الغرف وعدد الغرف المكتملة (مثلاً: التي حالتها Available)
  const totalRooms = rooms.length;
  const completedRooms = rooms.filter((room) => room.status === "Available").length;

  // حساب النسبة المئوية للغرف المكتملة
  const completedPercentage = totalRooms > 0 ? Math.round((completedRooms / totalRooms) * 100) : 0;

  return (
    <div className="bg-slate-200 dark:bg-darkCard p-4 rounded-lg shadow flex-1 flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Floor status</h2>

      <div className="flex flex-col items-center justify-center gap-4">
        {/* شبة دائرة باستخدام SVG */}
        <svg viewBox="0 0 36 18" className="w-32 h-20">
          <path
            d="M2 16 A16 16 0 0 1 34 16"
            fill="none"
            stroke="#aeb8ad"
            strokeWidth="4"
          />
          <path
            d="M2 16 A16 16 0 0 1 34 16"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray={`${(completedPercentage / 100) * 50}, 50`}
          />
        </svg>
        <p className="text-xl font-bold text-blue-600">{completedPercentage}%</p>
      </div>

      <div className="mt-4 flex justify-center gap-4 text-sm">
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
          <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span> Completed
        </div>
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
          <span className="w-2 h-2 rounded-full bg-slate-500 inline-block"></span> Yet to Complete
        </div>
      </div>
    </div>
  );
}
