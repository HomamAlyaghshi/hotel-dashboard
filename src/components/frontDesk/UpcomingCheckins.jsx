import React from "react";
import { useData } from "../../context/DataContext";

export default function UpcomingCheckins() {
  const { guests, rooms } = useData();

  // فلترة الضيوف الذين موعد تسجيل دخولهم اليوم أو غداً (مثال بسيط)
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);

  // دالة للمقارنة بين تاريخ checkIn للضيف وتاريخ اليوم أو الغد
  function isTodayOrTomorrow(dateStr) {
    const date = new Date(dateStr);
    return (
      (date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()) ||
      (date.getDate() === tomorrow.getDate() &&
        date.getMonth() === tomorrow.getMonth() &&
        date.getFullYear() === tomorrow.getFullYear())
    );
  }

  // نفلتر الضيوف القادمين اليوم أو غداً والذين حالتهم Checked-In ليست "Checked-Out"
  const upcomingGuests = guests
    .filter(
      (guest) =>
        isTodayOrTomorrow(guest.checkIn) && guest.status !== "Checked-Out"
    )
    .map((guest) => {
      // إيجاد نوع الغرفة من قائمة الغرف
      const roomInfo = rooms.find((room) => room.number === guest.room);
      return {
        name: guest.name,
        room: guest.room,
        type: roomInfo ? roomInfo.type : "Unknown",
        checkinTime: new Date(guest.checkIn).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        checkinDay:
          new Date(guest.checkIn).toDateString() === now.toDateString()
            ? "Today"
            : "Tomorrow",
      };
    });

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow h-full">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
        Upcoming Check-ins
      </h2>

      <ul className="space-y-4">
        {upcomingGuests.length > 0 ? (
          upcomingGuests.map((guest, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-md"
            >
              <div>
                <p className="font-bold text-gray-800 dark:text-white">
                  {guest.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Room {guest.room} • {guest.type}
                </p>
              </div>
              <span className="text-sm font-semibold text-primary">
                {guest.checkinDay} - {guest.checkinTime}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No upcoming check-ins.</p>
        )}
      </ul>
    </div>
  );
}
