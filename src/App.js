import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import FrontDesk from "./pages/FrontDesk";
import Guest from "./pages/Guest";
import Rooms from "./pages/Rooms";
import Deal from "./pages/Deal";
import Rate from "./pages/Rate";

// استيراد DataProvider
import { DataProvider } from "./context/DataContext";
import BookRoom from "./pages/BookRoom";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="front-desk" element={<FrontDesk />} />
          <Route path="guest" element={<Guest />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="deal" element={<Deal />} />
          <Route path="rate" element={<Rate />} />
          <Route path="book-a-room" element={<BookRoom />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
