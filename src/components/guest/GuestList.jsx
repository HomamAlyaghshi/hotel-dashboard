export default function GuestList({ guests, onSelectGuest }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 p-4 border-b border-gray-200 dark:border-gray-700">
        Guest List
      </h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[70vh] overflow-auto">
        {guests.map((guest) => (
          <li
            key={guest.id}
            className="cursor-pointer p-3 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => onSelectGuest(guest)}
          >
            <div className="font-medium">{guest.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Room: {guest.room}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
