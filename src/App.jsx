import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Otp from './pages/Otp';
import Landing from './pages/Landing';
import Onboarding from './pages/business/Onboarding';
import BusinessRegistration from './pages/business/BusinessRegistration';
import BusinessDashboard from './pages/business/BusinessDashboard';
import ModeratorLogin from './pages/moderator/Login';
import ModeratorLayout from './components/moderator/ModeratorLayout';
import Dashboard from './components/moderator/Dashboard';
import Business from './components/moderator/Business';
import Logout from './components/moderator/Logout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLayout from './components/admin/AdminLayout';
import AdminBusinessPage from './pages/admin/AdminBusinessPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminLeaderBoardPage from './pages/admin/AdminLeaderBoardPage';
import AdminManageRoles from './pages/admin/AdminManageRoles';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/otp' element={<Otp />} />

        {/* Business Routes */}
        <Route path='/business-onboarding' element={<Onboarding />} />
        <Route path='/register-business' element={<BusinessRegistration />} />
        <Route path='/business-dashboard' element={<BusinessDashboard />} />

        {/* Moderator Authentication */}
        <Route path='/moderator-login' element={<ModeratorLogin />} />
        
        {/* Moderator Dashboard with Sidebar */}
        <Route path='/moderator-dashboard' element={<ModeratorLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='business' element={<Business />} />
          <Route path='logout' element={<Logout />} />
        </Route>



        {/* Admin Auth */}
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-dashboard' element={<AdminLayout />} >
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='business' element={<AdminBusinessPage />} />
            <Route path='users' element={<AdminUsersPage />} />
            <Route path='leaderboard' element={<AdminLeaderBoardPage />} />
            <Route path='manage-roles' element={<AdminManageRoles />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
