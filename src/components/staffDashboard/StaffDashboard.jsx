// src/pages/supportStaff/StaffDashboard.jsx
import React, { useEffect, useState } from 'react';
import BusinessStatsCard from '../common/BusinessStatsCard';
import RegisteredUsers from '../common/RegisteredUsers';

export default function StaffDashboard() {
  // Example: dynamic issues array in state
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch issues from API
    // For now, let's use some mock data
    const mockData = [
      {
        id: 1,
        name: 'Kamran Shah',
        time: '7:35 pm',
        avatar: 'src/assets/Features.png',
        message:
          "When I enter my email and password, it shows an error saying 'Invalid credentials' even though I'm sure the details are correct. Could you look into it?",
      },
    ];
    setIssues(mockData);
  }, []);

  return (
    <div className="space-y-6 mt-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Hi, Fahim! Welcome back to the Staff dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 mr-46">
        <BusinessStatsCard />
        <RegisteredUsers />
        <RegisteredUsers />
      </div>

      {/* User Facing Issues */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">User Facing Issues</h2>
        {issues.map((issue, idx) => (
          <div
            key={issue.id}
            className={` w-198 pb-4 ${idx < issues.length - 1 ? 'border-b mb-2' : ''}`}
          >
            <div className="flex items-center space-x-3">
              <img
                src={issue.avatar}
                alt="User Avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold py-2">{issue.name}</p>
                <p className="text-sm text-gray-500">{issue.time}</p>
              </div>
            </div>
            <p className=" ml-18 mt-4 text-gray-700 ">{issue.message}</p>
            <button className=" ml-18 mt-6 px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
