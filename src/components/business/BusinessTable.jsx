import React, { useState } from "react";

const BusinessTable = () => {
  const [year, setYear] = useState("2024");
  const [period, setPeriod] = useState("Weekly");

  const data = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      name: "Nike",
      rank: 1,
      reviews: 1500,
      rating: 5,
      category: "Shopping and fashion",
      website: "https://www.nike.com",
      dateJoined: "17/10/2024",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      name: "Adidas",
      rank: 2,
      reviews: 1200,
      rating: 4.9,
      category: "Shopping and fashion",
      website: "https://www.adidas.com",
      dateJoined: "17/10/2024",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Puma_Logo.svg",
      name: "Puma",
      rank: 3,
      reviews: 500,
      rating: 4.8,
      category: "Shopping and fashion",
      website: "https://www.puma.com",
      dateJoined: "17/10/2024",
    },
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
      {/* Dropdown Filters */}
      <div className="flex justify-between items-center pb-4">
        {/* Year Dropdown */}
        <div className="relative">
          <span className="text-lg font-semibold mr-2">Year</span>
          <div className="relative">
            <select
              className="border px-4 py-2 pr-10 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
              ▼
            </span>
          </div>
        </div>

        {/* Period Dropdown */}
        <div className="relative">
          <select
            className="border px-4 py-2 pr-10 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
            ▼
          </span>
        </div>
      </div>

      {/* Business Table */}
      <div className="overflow-x-auto">
        <table className="w-full mt-4 text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3">S. No</th>
              <th className="p-3">Business Name</th>
              <th className="p-3">Rank</th>
              <th className="p-3">Reviews</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Category</th>
              <th className="p-3">Website</th>
              <th className="p-3">Date Joined</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, index) => (
              <tr key={item.id} >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 flex items-center gap-2">
                  <img src={item.logo} alt={item.name} className="w-6 h-6" />
                  {item.name}
                </td>
                <td className="p-3">{item.rank}</td>
                <td className="p-3">{item.reviews}</td>
                <td className="p-3">{item.rating}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3 text-blue-500 underline">
                  <a href={item.website} target="_blank" rel="noopener noreferrer">
                    {item.website.replace("https://www.", "")}
                  </a>
                </td>
                <td className="p-3">{item.dateJoined}</td>
                <td className="p-3 text-blue-500 underline cursor-pointer hover:text-blue-700">
                  View More Info.
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessTable;
