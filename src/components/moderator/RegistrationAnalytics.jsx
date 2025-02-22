import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";
import { useState, useEffect } from "react";

export default function RegistrationAnalytics() {
  const [data, setData] = useState([
    { month: "January", value: 100 },
    { month: "February", value: 1500 },
    { month: "March", value: 2300 },
    { month: "April", value: 2100 },
    { month: "May", value: 1800 },
    { month: "June", value: 1000 },
    { month: "July", value: 700 },
    { month: "August", value: 600 },
    { month: "September", value: 650 },
    { month: "October", value: 800 },
    { month: "November", value: 2000 },
    { month: "December", value: 4000 },
  ]);

  useEffect(() => {
    // fetch("API_URL")
    //   .then(response => response.json())
    //   .then(data => setData(data));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-lg font-semibold mb-4">Registration Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* Light border only, removed inner grid lines */}
          <CartesianGrid strokeDasharray="0" strokeOpacity={0.2} />
          
          {/* Axis Styling */}
          <XAxis dataKey="month" tick={{ fill: "#666" }} stroke="#ddd" />
          <YAxis tick={{ fill: "#666" }} stroke="#ddd" />

          {/* Tooltip */}
          <Tooltip contentStyle={{ backgroundColor: "white", border: "1px solid #ddd", borderRadius: "5px" }} />

          {/* Smooth Line with Shadow */}
          <defs>
            <linearGradient id="lineShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Shadow Fill */}
          <Area type="monotone" dataKey="value" stroke="none" fill="url(#lineShadow)" />
          
          {/* Main Line */}
          <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
