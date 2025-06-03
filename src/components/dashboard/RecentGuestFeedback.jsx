// components/RecentGuestFeedback.jsx
export default function RecentGuestFeedback() {
  const feedbacks = [
    {
      name: "Ahmad S.",
      date: "2025-05-30",
      comment: "The staff was friendly and the room was very clean!",
      rating: 5,
    },
    {
      name: "Sara T.",
      date: "2025-05-28",
      comment: "Great location but the room service could be faster.",
      rating: 4,
    },
    {
      name: "Mohammad A.",
      date: "2025-05-27",
      comment: "Amazing experience! Will definitely come back again.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white dark:bg-darkCard p-4 rounded-lg shadow w-full">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Recent Guest Feedback
      </h2>
      <div className="space-y-4">
        {feedbacks.map(({ name, date, comment, rating }, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-md p-3"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-gray-800 dark:text-white">
                {name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">{comment}</p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-400"}>
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
