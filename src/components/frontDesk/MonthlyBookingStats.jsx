import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { DataContext } from "../../context/DataContext";

export default function MonthlyBookingChart() {
  const { monthlyBookings, totalRoomsCount } = useContext(DataContext);

  const data = monthlyBookings.map((count, index) => ({
    day: index + 1,
    bookedRooms: count,
    percent: Math.round((count / totalRoomsCount) * 100),
  }));

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow h-full">
      <h2 className="text-lg font-bold mb-6 text-gray-800 dark:text-white">
        Monthly Room Booking Statistics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="day"
            tick={{ fill: "#4b5563", fontSize: 12 }}
            label={{ value: "Day", position: "insideBottom", offset: -5, fill: "#6b7280" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#4b5563", fontSize: 12 }}
            label={{ value: "Booked Rooms", angle: -90, position: "insideLeft", fill: "#6b7280" }}
            domain={[0, totalRoomsCount]}
            tickCount={6}
            allowDecimals={false}
          />
          <Tooltip
            formatter={(value) => [`${value} rooms`, "Booked"]}
            contentStyle={{ backgroundColor: "#1f2937", borderRadius: "6px", border: "none" }}
            labelStyle={{ color: "#f9fafb" }}
            itemStyle={{ color: "#f9fafb" }}
          />
          <Bar dataKey="bookedRooms" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
