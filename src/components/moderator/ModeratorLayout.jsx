import { Outlet, NavLink } from "react-router-dom";
import { FaHome, FaBriefcase, FaSignOutAlt } from "react-icons/fa";

export default function ModeratorLayout() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Reviewer<span className="text-blue-600">.</span>
                    </h1>
                    <p className="text-gray-400 mt-1 text-sm">Moderator Dashboard</p>

                    {/* Navigation Links */}
                    <nav className="mt-6 flex flex-col space-y-2">
                        <NavLink
                            to="dashboard"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            <FaHome />
                            <span>Dashboard</span>
                        </NavLink>

                        <NavLink
                            to="business"
                            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            <FaBriefcase />
                            <span>Business</span>
                        </NavLink>
                    </nav>
                </div>

                {/* Logout Button */}
                <NavLink
                    to="logout"
                    className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </NavLink>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6  min-h-screen w-full ml-64">
                <Outlet />
            </div>
        </div>
    );
}
