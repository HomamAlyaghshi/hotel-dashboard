import React from "react";
import { useData } from "../context/DataContext";

export default function Deal() {
  const { deals } = useData(); 

  return (
    <div className="p-6 bg-white dark:bg-darkCard rounded-lg shadow w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Current Deals</h2>

      {deals.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No deals available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {deal.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {deal.description}
              </p>
              <p className="text-sm font-medium text-primary mb-1">
                Price: ${deal.price}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Valid until:{" "}
                {new Date(deal.validUntil).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
