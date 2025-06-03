import { useContext } from "react";
import { DataContext } from "../../context/DataContext";


export default function CheckInCheckOut() {
  const { guests, setGuests, setActivities } = useContext(DataContext);

  function handleAction(id) {
    setGuests((prev) =>
      prev.map((guest) => {
        if (guest.id === id) {
          let newStatus;
          if (guest.status === "Booked") newStatus = "Checked-In";
          else if (guest.status === "Checked-In") newStatus = "Checked-Out";
          else newStatus = guest.status;

          // تسجيل النشاط الجديد
          setActivities((acts) => [
            ...acts,
            {
              id: acts.length + 1,
              guestName: guest.name,
              action: newStatus === "Checked-In" ? "Check-In" : "Check-Out",
              room: guest.room,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              status: "success",
            },
          ]);

          return { ...guest, status: newStatus };
        }
        return guest;
      })
    );
  }

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow h-full">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
        Check-In & Check-Out Today
      </h2>

      {guests.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No guests for today.</p>
      )}

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {guests.map(({ id, name, room, checkIn, checkOut, status }) => {
          const isBooked = status === "Booked";
          const isCheckedIn = status === "Checked-In";

          return (
            <div
              key={id}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded-md px-3 py-2"
            >
              <div>
                <p className="font-semibold text-sm text-gray-800 dark:text-white">{name}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Room {room} | Check-In: {new Date(checkIn).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} | Check-Out: {new Date(checkOut).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                </p>
                <p
                  className={`mt-1 text-xs font-bold px-2 py-1 rounded inline-block ${
                    isBooked
                      ? "bg-yellow-100 text-yellow-700"
                      : isCheckedIn
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {status}
                </p>
              </div>

              {(isBooked || isCheckedIn) && (
                <button
                  onClick={() => handleAction(id)}
                  className={`px-3 py-1 rounded font-semibold text-sm text-white transition-colors
                    ${
                      isBooked
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                >
                  {isBooked ? "Check-In" : "Check-Out"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
