import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaBriefcase, FaSignOutAlt, FaUsers, FaBuilding, FaTrophy, FaUserShield } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

export default function AdminLayout() {
    const { isDark } = useTheme();

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-screen w-64 shadow-lg p-6 flex flex-col justify-between transition-colors ${
                isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"
            }`}>
                <div>
                    <h1 className="text-3xl font-bold">
                        Reviewer<span className="text-blue-600">.</span>
                    </h1>
                    <p className={`mt-1 text-sm ${isDark ? "text-gray-300" : "text-gray-400"}`}>Admin Dashboard</p>

                    {/* Navigation Links */}
                    <nav className="mt-6 flex flex-col space-y-2">
                        <NavLink
                            to="dashboard"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaHome />
                            <span>Dashboard</span>
                        </NavLink>

                        <NavLink
                            to="business"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaBriefcase />
                            <span>Business</span>
                        </NavLink>

                        <NavLink
                            to="users"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaUsers />
                            <span>Users</span>
                        </NavLink>

                        <NavLink
                            to="leaderboard"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaTrophy />
                            <span>LeaderBoard</span>
                        </NavLink>

                        <NavLink
                            to="manage-roles"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                                isActive 
                                    ? "bg-blue-100 text-blue-600 font-semibold" 
                                    : isDark 
                                        ? "text-gray-300 hover:bg-gray-700" 
                                        : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            <FaUserShield />
                            <span>Manage Roles</span>
                        </NavLink>
                    </nav>
                </div>

                {/* Logout Button */}
                <NavLink
                    to="logout"
                    className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${
                        isActive 
                            ? "bg-blue-100 text-blue-600 font-semibold" 
                            : isDark 
                                ? "text-gray-300 hover:bg-gray-700" 
                                : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </NavLink>
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 p-6 min-h-screen w-full ml-64 transition-colors ${
                isDark ? "bg-[#1B2431] text-white" : "bg-white text-black"
            }`}>
                <Outlet />
            </div>
        </div>
    );
}
