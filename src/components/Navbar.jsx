import { useState, useEffect } from "react";
import { Moon, Sun, Search, Menu } from "lucide-react";

function formatDateTime(date) {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dateStr = date.toLocaleDateString(undefined, options);
  const timeStr = date.toLocaleTimeString(undefined, { hour12: false });
  return `${dateStr} - ${timeStr}`;
}

export default function Navbar({ onMenuClick }) {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  const [dateTime, setDateTime] = useState(formatDateTime(new Date()));
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(formatDateTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="w-full h-16 bg-white dark:bg-darkCard shadow flex items-center justify-between px-4 md:px-6">
      
      {/* زر القائمة للموبايل */}
      <button
        onClick={onMenuClick}
        className="md:hidden mr-2 text-gray-800 dark:text-gray-100"
        title="Open Menu"
      >
        <Menu size={24} />
      </button>

      {/* شريط البحث - يظهر فقط على الشاشات المتوسطة وما فوق */}
      <div className="hidden md:flex items-center bg-secondary dark:bg-gray-700 rounded-md px-3 py-1 w-64 border">
        <Search className="text-gray-500 dark:text-gray-300" size={18} />
        <input
          type="text"
          placeholder="Search rooms, deals..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="ml-2 bg-transparent focus:outline-none w-full text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* التاريخ والوقت - مخفي على الموبايل */}
      <div className="hidden md:block text-gray-700 dark:text-gray-200 font-medium text-center flex-1 text-sm md:text-base">
        {dateTime}
      </div>

      {/* زر الوضع الليلي */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 rounded-full bg-secondary dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:scale-105 transition"
        title="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}
