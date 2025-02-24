// src/pages/supportStaff/Users.jsx
import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace with an actual API call if needed
    const mockUsers = [
      {
        id: 1,
        avatar: 'src/assets/Features.png',
        fullname: 'Kamran Shah',
        number: '+92 305 5533 089',
        location: 'Islamabad',
        profession: 'Self Employed',
        givenReview: 5,
        dateJoined: '17/10/2024',
      },
      {
        id: 2,
        avatar: 'src/assets/Features.png',
        fullname: 'Kamran Shah',
        number: '+92 305 5533 089',
        location: 'Islamabad',
        profession: 'Developer',
        givenReview: 10,
        dateJoined: '17/10/2024',
      },
      {
        id: 3,
        avatar: 'src/assets/Features.png',
        fullname: 'Kamran Shah',
        number: '+92 305 5533 089',
        location: 'Islamabad',
        profession: 'Developer',
        givenReview: 10,
        dateJoined: '17/10/2024',
      },
    ];

    setUsers(mockUsers);
  }, []);

  return (
    <div className="bg-white rounded-lg mt-14 shadow p-6">
      {/* Top Section: e.g., "Year 2024" */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Year 2024</h2>
        {/* If you have a dropdown or filter, you can place it here */}
        {/* <select className="border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>2024</option>
          <option>2023</option>
        </select> */}
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-600 uppercase text-sm">
              <th className="py-3 px-4 font-medium">S. No</th>
              <th className="py-3 px-4 font-medium">Fullname</th>
              <th className="py-3 px-4 font-medium">Number</th>
              <th className="py-3 px-4 font-medium">Location</th>
              <th className="py-3 px-4 font-medium">Profession</th>
              <th className="py-3 px-4 font-medium">Given Review</th>
              <th className="py-3 px-4 font-medium">Date Joined</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className=""
              >
                {/* S. No */}
                <td className="py-3 px-4">{index + 1}</td>

                {/* Fullname + Avatar */}
                <td className="py-3 px-4 flex items-center space-x-2">
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{user.fullname}</span>
                </td>

                {/* Number */}
                <td className="py-3 px-4">{user.number}</td>

                {/* Location */}
                <td className="py-3 px-4">{user.location}</td>

                {/* Profession */}
                <td className="py-3 px-4">{user.profession}</td>

                {/* Given Review */}
                <td className="py-3 px-4">{user.givenReview}</td>

                {/* Date Joined */}
                <td className="py-3 px-4">{user.dateJoined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
