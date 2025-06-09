import AdminDashboard from '@/components/adminDashboard'
import React from 'react'

function page({params}:PageProps) {
  return (
    <AdminDashboard name={params.admin} />
  )
}

export default page