import { useData } from "../../context/DataContext";

export default function Overview() {
  const { guests, rooms,roomRates } = useData();

  const now = new Date();

  // Helper function للتحقق إذا تاريخ معين هو اليوم
  function isToday(dateStr) {
    const date = new Date(dateStr);
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  }

  // Check Ins اليومي
  const todayCheckIns = guests.filter(
    (guest) => isToday(guest.checkIn) && guest.status === "Checked-In"
  ).length;

  // Check Outs اليومي
  const todayCheckOuts = guests.filter(
    (guest) => isToday(guest.checkOut) && guest.status === "Checked-Out"
  ).length;

  // الضيوف الموجودين الآن (الذين status = Checked-In)
  const totalInHotel = guests.filter((guest) => guest.status === "Checked-In")
    .length;

  // الغرف المتاحة والمشغولة من الحالة داخل الغرف
  const availableRooms = rooms.filter((room) => room.status === "Available")
    .length;
  const occupiedRooms = rooms.filter((room) => room.status === "Occupied").length;

  // ربح اليوم - نتركه الآن ثابت 0 لأنه سيتم حسابه لاحقًا بناءً على سعر الغرف
// حساب الربح اليومي من الضيوف الذين سجلوا دخول اليوم
const todayCheckInGuests = guests.filter(
  (guest) => isToday(guest.checkIn) && guest.status === "Checked-In"
);

// نحصل على نوع الغرفة لكل ضيف عن طريق رقم غرفته، ثم نحسب السعر
const totalProfit = todayCheckInGuests.reduce((sum, guest) => {
  const room = rooms.find((r) => r.number === guest.room);
  if (!room) return sum;
  const rate = roomRates[room.type] || 0;
  return sum + rate;
}, 0);
  const stats = [
    { intro: "Today's", label: "Check In", value: todayCheckIns, color: "text-blue-500" },
    { intro: "Today's", label: "Check Out", value: todayCheckOuts, color: "text-red-500" },
    {
      intro: "Total",
      label: "Total In Hotel",
      value: totalInHotel,
      color: "text-green-500",
    },
    {
      intro: "Total",
      label: "Available Rooms",
      value: availableRooms,
      color: "text-yellow-500",
    },
    {
      intro: "Total",
      label: "Occupied Rooms",
      value: occupiedRooms,
      color: "text-purple-500",
    },
    {
      intro: "Total",
      label: "Profit",
      value: `$${totalProfit}`,
      color: "text-green-700",
    },
  ];

  return (
    <div className="bg-white dark:bg-darkCard rounded-lg shadow p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 text-primary dark:text-white">
        Overview
      </h2>
      <div className="flex justify-between flex-wrap gap-4">
        {stats.map(({ intro, label, value, color }) => (
          <div
            key={label}
            className="flex items-center justify-between flex-1 min-w-[220px] bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
          >
            {/* النص */}
            <div className="text-gray-700 dark:text-gray-300  text-start font-bold">
              {intro && <div>{intro}</div>}
              <div>{label}</div>
            </div>

            {/* الرقم */}
            <div
              className={`${color} w-14 h-14 flex items-center justify-center rounded-full font-bold text-3xl pr-2`}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
