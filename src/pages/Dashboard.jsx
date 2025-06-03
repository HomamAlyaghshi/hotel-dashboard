import React from "react";
import Overview from './../components/dashboard/Overview';
import Rooms from './../components/dashboard/Rooms';
import RoomsStatus from "../components/dashboard/RoomsStatus";
import FloorStatus from "../components/dashboard/FloorStatus";
import RecentGuestFeedback from "../components/dashboard/RecentGuestFeedback";
import Floors from "../components/dashboard/Floors";

const rooms = [
  {
    type: "Single Sharing",
    occupied: 10,
    total: 25,
    pricePerRoom: 120,
    image: "/images/single.jpg",
  },
  {
    type: "Double Sharing",
    occupied: 10,
    total: 40,
    pricePerRoom: 114,
    image: "/images/double.jpg",
  },
  {
    type: "Triple Sharing",
    occupied: 18,
    total: 30,
    pricePerRoom: 103,
    image: "/images/triple.jpg",
  },
  {
    type: "VIP Suite",
    occupied: 4,
    total: 5,
    pricePerRoom: 800,
    image: "/images/vip.jpg",
  },
];


export default function Dashboard() {
  const totalProfit = rooms.reduce(
    (sum, room) => sum + room.occupied * room.pricePerRoom,
    0
  );

  return (
    <div className="space-y-6">
      <Overview totalProfit={totalProfit} />
      <Rooms rooms={rooms} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <RoomsStatus />
      <FloorStatus />
      <RecentGuestFeedback/>
      <Floors/>

    </div>
    </div>
  );
}
