import { useState } from "react";
import { useData } from "../context/DataContext";
import GuestDetails from "../components/guest/GuestDetails";
import GuestList from "../components/guest/GuestList";

export default function Guest() {
  const { guests } = useData();
  const [selectedGuest, setSelectedGuest] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 h-full">
      {/* قائمة الضيوف */}
      <div className="w-full md:w-1/3 bg-white dark:bg-darkCard rounded shadow overflow-auto">
        <GuestList guests={guests} onSelectGuest={setSelectedGuest} />
      </div>

      {/* تفاصيل الضيف المختار */}
      <div className="w-full md:flex-1 bg-white dark:bg-darkCard rounded shadow p-4 md:p-6 overflow-auto">
        {selectedGuest ? (
          <GuestDetails guest={selectedGuest} />
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Select a guest to view details
          </p>
        )}
      </div>
    </div>
  );
}
