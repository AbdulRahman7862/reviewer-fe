// src/pages/supportStaff/Issues.jsx
import React, { useEffect, useState } from 'react';

export default function Issues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Replace this with real API fetch if needed
    const mockData = [
      {
        id: 1,
        name: 'Ali',
        facingIssue:
          "When I enter my email and password, it shows an error saying 'Invalid credentials' even though I'm sure the details are correct. I also tried resetting my password, but I still can't log in.",
        submissionDate: '11/03/2023',
      },
      {
        id: 2,
        name: 'Rehman',
        facingIssue:
          "When I enter my email and password, it shows an error saying 'Invalid credentials' even though I'm sure the details are correct. I also tried resetting my password, but I still can't log in.",
        submissionDate: '11/03/2023',
      },
    ];
    setIssues(mockData);
  }, []);

  return (
    <div className="bg-white rounded-lg mt-14 shadow p-6">
      {/* Top Section (matches "All" dropdown in your screenshot) */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">All</h2>
        {/* If you have other filters or a dropdown, put them here */}
        {/* Example:
        <select className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All</option>
          <option>Open</option>
          <option>Closed</option>
        </select>
        */}
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-600 uppercase text-sm">
              <th className="py-3 px-3 font-medium">S.No</th>
              <th className="py-3 px-6 font-medium">Name</th>
              <th className="py-3 px-26 font-medium">Facing Issue</th>
              <th className="py-3 px-4 font-medium">Submission Date</th>
              <th className="py-3 px-4 font-medium">Action Perform</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {issues.map((issue, index) => (
              <tr
                key={issue.id}
                className="border-b last:border-0 hover:bg-gray-50"
              >
                {/* S. No */}
                <td className="py-3 px-4">{index + 1}</td>

                {/* Name */}
                <td className="py-3 px-4">{issue.name}</td>

                {/* Facing Issue (red text, as in your screenshot) */}
                <td className="py-4 px-10 text-red-500">
                  {issue.facingIssue}
                </td>

                {/* Submission Date */}
                <td className="py-3 px-4">{issue.submissionDate}</td>

                {/* Action Perform (Reply button) */}
                <td className="py-3 px-2">
                  <button className="bg-blue-500 text-white rounded px-6 py-2 hover:bg-blue-600 transition-colors">
                    Reply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
