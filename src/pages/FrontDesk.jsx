import CheckInCheckOut from "../components/frontDesk/CheckInCheckOut";
import MonthlyBookingStats from "../components/frontDesk/MonthlyBookingStats";
import RecentGuestActivity from "../components/frontDesk/RecentGuestActivity";
import RoomOccupancyOverview from "../components/frontDesk/RoomOccupancyOverview";
import RoomQuickSearch from "../components/frontDesk/RoomQuickSearch";
import UpcomingCheckins from "../components/frontDesk/UpcomingCheckins";


export default function FrontDesk() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-primary dark:text-white">Front Desk</h1>

      {/* الجزء العلوي: البحث + الإشغال + إجراءات سريعة */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RoomQuickSearch/>
        <RoomOccupancyOverview/>
        <UpcomingCheckins/>
      
      </div>

      {/* الجزء الأوسط: الوصول اليوم + ضيف مباشر */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CheckInCheckOut/>
        <MonthlyBookingStats/>

    
      </div>

      {/* الجزء السفلي: نشاطات الزبائن */}
            <RecentGuestActivity/>

    </div>
  );
}
