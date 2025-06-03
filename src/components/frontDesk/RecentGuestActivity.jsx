import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { CheckCircle, XCircle } from "lucide-react";

export default function RecentGuestActivity() {
  const { activities } = useContext(DataContext);

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow h-full">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
        Recent Guest Activity
      </h2>

      <ul className="space-y-3 max-h-60 overflow-y-auto">
        {activities.map(({ id, guestName, action, room, time, status }) => (
          <li
            key={id}
            className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-md px-4 py-2"
          >
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                {guestName} - Room {room}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {action} at {time}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {status === "success" && (
                <CheckCircle className="text-green-600" size={18} />
              )}
              {status === "cancelled" && (
                <XCircle className="text-red-600" size={18} />
              )}
              <span
                className={`text-xs font-semibold ${
                  status === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {status === "success" ? "Completed" : "Cancelled"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
