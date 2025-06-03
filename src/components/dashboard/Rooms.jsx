import { useData } from "../../context/DataContext";

export default function Rooms() {
  const { roomTypeStats } = useData();

  return (
    <div className="rounded-lg shadow p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 text-primary dark:text-white">
        Room Types Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {roomTypeStats.map(({ type, occupied, total, pricePerRoom, image }) => {
          const revenuePerDay = occupied * pricePerRoom;

          return (
            <div
              key={type}
              className="relative rounded-lg overflow-hidden h-40 shadow"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-brightness-50"></div>
              <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
                <h3 className="text-lg font-semibold">{type}</h3>
                <p>{occupied} / {total} rooms occupied</p>
                <p className="text-green-300 font-bold">
                  ${revenuePerDay} / day
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
