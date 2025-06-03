import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  BedDouble,
  PhoneCall,
  Tag,
  DollarSign,
  CalendarCheck,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: <Home size={20} /> },
  { name: "Front Desk", path: "/front-desk", icon: <PhoneCall size={20} /> },
  { name: "Guest", path: "/guest", icon: <Users size={20} /> },
  { name: "Rooms", path: "/rooms", icon: <BedDouble size={20} /> },
  { name: "Deal", path: "/deal", icon: <Tag size={20} /> },
  { name: "Rate", path: "/rate", icon: <DollarSign size={20} /> },
  {
    name: "Book a room",
    path: "/book-a-room",
    icon: <CalendarCheck size={20} />,
  },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-white dark:bg-darkCard shadow-md flex flex-col px-4 py-6">
      {/* لوغو في المنتصف */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/logo192.png"
          alt="Hotel Logo"
          className="h-32 w-auto object-contain"
        />
      </div>

      <h1 className="text-2xl font-bold text-primary dark:text-white mb-4 text-center">
        Hotel Dashboard
      </h1>

      <nav className="flex flex-col gap-2">
        {navItems.map(({ name, path, icon }) => {
          const isBookRoom = name === "Book a room";
          return (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors
        ${isBookRoom ? "mt-12 bg-accent text-white hover:bg-accent hover:opacity-85" : ""}
        ${isActive && !isBookRoom ? "bg-primary text-white" : ""}
        ${
          !isActive && !isBookRoom
            ? "text-gray-700 hover:bg-secondary hover:text-primary dark:text-darkText dark:hover:bg-gray-700"
            : ""
        }`
              }
            >
              {icon}
              {name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
