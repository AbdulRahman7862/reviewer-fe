import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaBriefcase, FaSignOutAlt, FaBars, FaTimes, FaUser } from 'react-icons/fa';

export default function SupportStaffLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* MOBILE TOP BAR (shown on smaller screens) */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow p-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold">
          Reviewer<span className="text-blue-600">.</span>
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-6 flex flex-col justify-between
          transform transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static
        `}
      >
        <div>
          <h1 className="text-3xl font-bold">
            Reviewer<span className="text-blue-600">.</span>
          </h1>
          <p className="text-gray-400 mt-1 text-sm">Support Staff Dashboard</p>

          {/* NAV LINKS */}
          <nav className="mt-6 flex flex-col space-y-2">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded transition ${
                  isActive
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <FaHome />
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="issues"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded transition ${
                  isActive
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <FaBriefcase />
              <span>Issues</span>
            </NavLink>

            <NavLink
              to="users"
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded transition ${
                  isActive
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <FaUser />
              <span>Users</span>
            </NavLink>
          </nav>
        </div>

        {/* LOGOUT */}
        <NavLink
          to="logout"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded transition ${
              isActive
                ? 'bg-blue-100 text-blue-600 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
          onClick={() => setIsOpen(false)}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>
      </div>

      {/* MAIN CONTENT */}
      {/*
        - `md:ml-64` ensures main content is NOT behind the 64px-wide sidebar on desktop.
        - `pt-16 md:pt-0` ensures content sits below the mobile top bar on small screens
          but is flush on desktop.
        - You can remove or adjust any padding/margin as needed.
      */}
      <div className="flex-1 ml-6 pt-16 md:pt-0">
        <Outlet />
      </div>
    </div>
  );
}
