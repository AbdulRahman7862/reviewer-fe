import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";
import { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";

export default function RegistrationAnalytics() {
  const { isDark } = useTheme();
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
    <div className={`p-6 rounded-lg shadow-lg w-full transition-colors ${
      isDark ? "bg-[#1B2431] border border-gray-700" : "bg-white border border-gray-200"
    }`}>
      <h2 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>
        Registration Analytics
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          {/* Light border only, removed inner grid lines */}
          <CartesianGrid 
            strokeDasharray="0" 
            strokeOpacity={isDark ? 0.1 : 0.2} 
            stroke={isDark ? "#4B5563" : "#ddd"} 
          />
          
          {/* Axis Styling */}
          <XAxis 
            dataKey="month" 
            tick={{ fill: isDark ? "#9CA3AF" : "#666" }} 
            stroke={isDark ? "#4B5563" : "#ddd"} 
          />
          <YAxis 
            tick={{ fill: isDark ? "#9CA3AF" : "#666" }} 
            stroke={isDark ? "#4B5563" : "#ddd"} 
          />

          {/* Tooltip */}
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDark ? "#323D4E" : "white",
              border: isDark ? "1px solid #4B5563" : "1px solid #ddd",
              borderRadius: "5px",
              color: isDark ? "white" : "black"
            }} 
          />

          {/* Smooth Line with Shadow */}
          <defs>
            <linearGradient id="lineShadow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity={isDark ? 0.2 : 0.3} />
              <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Shadow Fill */}
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="none" 
            fill="url(#lineShadow)" 
          />
          
          {/* Main Line */}
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#6366F1" 
            strokeWidth={3} 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
