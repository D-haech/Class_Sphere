import AdminDashboard from "@/components/adminDashboard";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:"School Dashboard"
}

const AdminControl = () => {
  return (
    <AdminDashboard />

  )
}

export default AdminControl;