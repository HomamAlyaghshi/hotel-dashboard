export default function GuestDetails({ guest }) {
  return (
    <div className="grid gap-10">
      <h2 className="text-2xl  font-bold mb-4">{guest.name}</h2>
      <p>
        <strong>Room Number:</strong> {guest.room}
      </p>
      <p>
        <strong>Check-In Date:</strong>{" "}
        {new Date(guest.checkIn).toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </p>
      <p>
        <strong>Check-Out Date:</strong>{" "}
        {new Date(guest.checkOut).toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </p>
      <p>
        <strong>Status:</strong> {guest.status}
      </p>
    </div>
  );
}
