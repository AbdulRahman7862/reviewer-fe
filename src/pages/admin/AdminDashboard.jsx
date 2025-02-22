import React from 'react'
import BusinessStatsCard from '../../components/common/BusinessStatsCard'
import RegistrationAnalytics from '../../components/common/RegistrationAnalytics'

const AdminDashboard = () => {
  return (
    <div>
       <div className=' h-screen'>
                  <h1 className='font-bold text-2xl'>Dashboard</h1>
                  <p className='text-[#A3A3A3] pt-2'>Hi, admin! Welcome back to the moderator dashboard</p>
      
                  <div className='mt-5'>
                    <BusinessStatsCard />
                  </div>
      
                  <div className='mt-5'>
                     <RegistrationAnalytics />
                  </div>
              </div>
    </div>
  )
}

export default AdminDashboard