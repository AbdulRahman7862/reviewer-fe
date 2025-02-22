import { useState } from "react";
import { Bell, Settings, LogOut, BarChart, Briefcase, Users } from "lucide-react";

export default function BusinessDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-4 shadow-md md:min-h-screen">
        <h1 className="text-2xl font-bold text-black">
          Reviewer<span className="text-blue-500">.</span>
        </h1>
        <nav className="mt-6 space-y-4">
          <button className="flex items-center space-x-2 text-blue-500 font-semibold">
            <span className="w-5 h-5">🏠</span> <span>Dashboard</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <Briefcase size={20} /> <span>Business</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <Users size={20} /> <span>Reviews</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <BarChart size={20} /> <span>Leader Board</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <LogOut size={20} /> <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search here"
            className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          />
          <div className="flex items-center space-x-4">
            <Bell size={24} />
            <Settings size={24} />
            <div className="bg-gray-200 px-3 py-1 rounded-lg">English ▼</div>
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                className="w-10 h-10 rounded-full"
                alt="User"
              />
              <span>Rehmaan</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              View as Reviewer
            </button>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="mt-6 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">
            Hi <span className="text-blue-500">Rehmaan,</span>
          </h2>
          <p className="text-gray-600">Have a good day!</p>
        </div>

        {/* Profile Setup Card */}
        <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-md rounded-lg">
          <p className="text-gray-700">
            Setup your business profile so clients can review
          </p>
          <button className="bg-gray-300 text-black rounded-full px-4 py-2">→</button>
        </div>
      </main>
    </div>
  );
}
