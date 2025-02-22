import React from "react";


export default function BusinessStatsCard() {
    return (
      <div className="bg-white p-4 rounded-[14px] shadow-sm w-[262px] h-[161px] p-2 pt-7">
        <p className="text-gray-500 text-sm mb-2">Registered Businesses</p>
        <h2 className="text-2xl font-bold mb-2">2,800</h2>
        <div className="flex items-center text-green-600 text-sm mt-2">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
          <span className="font-medium">8.5% Up from yesterday</span>
        </div>
      </div>
    );
  }
  