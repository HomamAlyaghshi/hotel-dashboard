import React, { createContext, useState, useContext } from "react";

// إنشاء الكونتكس
export const DataContext = createContext();

export function DataProvider({ children }) {
  // عدد الغرف المحجوزة والمتاحة 
  const [roomStats, setRoomStats] = useState({
    totalRooms: 100,
    occupiedRooms: 54,
  });

  // بيانات الغرف
  const [rooms, setRooms] = useState([
  { number: 101, type: "Single", status: "Available", floorNumber: 1 },
  { number: 102, type: "Double", status: "Occupied", floorNumber: 1 },
  { number: 103, type: "Suite", status: "Available", floorNumber: 1 },
  { number: 104, type: "Single", status: "Occupied", floorNumber: 1 },
  { number: 105, type: "Double", status: "Available", floorNumber: 1 },
  { number: 106, type: "Suite", status: "Occupied", floorNumber: 1 },

  { number: 107, type: "Single", status: "Available", floorNumber: 2 },
  { number: 108, type: "Double", status: "Occupied", floorNumber: 2 },
  { number: 109, type: "Suite", status: "Available", floorNumber: 2 },
  { number: 110, type: "Single", status: "Occupied", floorNumber: 2 },
  { number: 111, type: "Double", status: "Available", floorNumber: 2 },
  { number: 112, type: "Suite", status: "Occupied", floorNumber: 2 },

  { number: 113, type: "Single", status: "Available", floorNumber: 3 },
  { number: 114, type: "Double", status: "Available", floorNumber: 3 },
  { number: 115, type: "Suite", status: "Available", floorNumber: 3 },
  { number: 116, type: "Single", status: "Occupied", floorNumber: 3 },
  { number: 117, type: "Triple", status: "Occupied", floorNumber: 3 },
  { number: 118, type: "Triple", status: "Available", floorNumber: 3 },

  { number: 119, type: "Triple", status: "Available", floorNumber: 4 },
  { number: 120, type: "Double", status: "Occupied", floorNumber: 4 },
  { number: 121, type: "Suite", status: "Available", floorNumber: 4 },
  { number: 122, type: "Single", status: "Occupied", floorNumber: 4 },
  { number: 123, type: "Double", status: "Available", floorNumber: 4 },
  { number: 124, type: "Suite", status: "Occupied", floorNumber: 4 },
  { number: 125, type: "Triple", status: "Available", floorNumber: 4 },

  ]);

  // بيانات الضيوف
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      room: 101,
      checkIn: "2025-06-03T08:30:00",
      checkOut: "2025-06-05T12:00:00",
      status: "Checked-In",
    },
    {
      id: 2,
      name: "Sara Mohamed",
      room: 102,
      checkIn: "2025-06-03T14:00:00",
      checkOut: "2025-06-03T11:00:00",
      status: "Checked-Out",
    },
    {
      id: 3,
      name: "Homam Alyaghshi",
      room: 109,
      checkIn: "2025-06-03T09:30:00",
      checkOut: "2025-06-05T12:00:00",
      status: "Checked-In",
    },
    {
      id: 6,
      name: "Alaa Mousa",
      room: 117,
      checkIn: "2025-06-01T15:00:00",
      checkOut: "2025-06-03T11:00:00",
      status: "Checked-Out",
    },
  ]);

  const [activities, setActivities] = useState([
    {
      id: 1,
      guestName: "Ahmed Ali",
      action: "Check-In",
      room: 107,
      time: "08:30 AM",
      status: "success",
    },
    {
      id: 2,
      guestName: "Sara Mohamed",
      action: "Check-Out",
      room: 102,
      time: "11:00 AM",
      status: "success",
    },
    {
      id: 3,
      guestName: "Omar Mohamed",
      action: "Check-In",
      room: 122,
      time: "1:00 AM",
      status: "cancelled",
    },
    {
      id: 4,
      guestName: "Issa Omran",
      action: "Check-In",
      room: 113,
      time: "5:00 AM",
      status: "success",
    },
    {
      id: 5,
      guestName: "Sami Ahmad",
      action: "Check-In",
      room: 119,
      time: "5:00 AM",
      status: "success",
    },
  ]);

  const [monthlyBookings, setMonthlyBookings] = useState([
    10, 12, 15, 18, 20, 17, 14, 16, 19, 21,
    22, 20, 18, 17, 15, 14, 16, 18, 20, 22,
    23, 25, 24, 22, 20, 19, 17, 15, 14, 13,
  ]);

  const totalRoomsCount = 25;

  const [roomRates, setRoomRates] = useState({
    Single: 50,
    Double: 80,
    Suite: 120,
    Triple: 100,
  });

  const [dailyProfit, setDailyProfit] = useState(0);

  const [roomTypeStats, setRoomTypeStats] = useState([
    {
      type: "Single",
      occupied: 5,
      total: 8,
      pricePerRoom: 50,
      image: "/images/single.jpg",
    },
    {
      type: "Double",
      occupied: 4,
      total: 7,
      pricePerRoom: 80,
      image: "/images/double.jpg",
    },
    {
      type: "Suite",
      occupied: 3,
      total: 6,
      pricePerRoom: 120,
      image: "/images/vip.jpg",
    },
    {
      type: "Triple",
      occupied: 2,
      total: 4,
      pricePerRoom: 100,
      image: "/images/triple.jpg",
    },
  ]);

  const deals = [
  {
    id: 1,
    title: "Summer Special",
    description: "Stay 3 nights and get 1 free breakfast!",
    price: 199,
    validUntil: "2025-08-01",
  },
  {
    id: 2,
    title: "Family Weekend",
    description: "Free stay for kids under 10 + late checkout.",
    price: 299,
    validUntil: "2025-07-15",
  },
];
  return (
    <DataContext.Provider
      value={{
        rooms,
        setRooms,
        guests,
        setGuests,
        activities,
        setActivities,
        monthlyBookings,
        setMonthlyBookings,
        totalRoomsCount,
        roomStats,
        setRoomStats,
        roomRates,
        setRoomRates,
        dailyProfit,
        setDailyProfit,
        roomTypeStats,
        setRoomTypeStats,
        deals
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
