import React from "react";
import { Notifications } from "./aded";



const Card = ({ title, value, icon }: CardProps) => (
  <div className="bg-white rounded-2xl shadow p-6 flex items-center space-x-4">
    <div className="text-blue-600 text-3xl">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-700">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm">Manage your school operations efficiently</p>
        </div>
          <button className="text-blue-700 mr-3 ">Logout</button>    
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition">
          Settings 
        </button>
      </header>

      {/* Overview Cards */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card title="Total Students" value="523" icon="🎓" />
        <Card title="Total Teachers" value="34" icon="👩‍🏫" />
        <Card title="Attendance Today" value="91%" icon="📊" />
        <Card title="Unread Messages" value="3" icon="📨" />
      </section>

      {/* Tabs Section */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Quick Actions</h2>

        <div className="grid md:grid-cols-4 gap-6">
          <button className="bg-blue-100 text-blue-700 p-4 rounded-xl hover:bg-blue-200 transition">
            📁 Create Class
          </button>
          <button className="bg-blue-100 text-blue-700 p-4 rounded-xl hover:bg-blue-200 transition">
            👨‍🏫 Add Staff
          </button>
          <button className="bg-blue-100 text-blue-700 p-4 rounded-xl hover:bg-blue-200 transition">
            📑 View Reports
          </button>
          <button className="bg-blue-100 text-blue-700 p-4 rounded-xl hover:bg-blue-200 transition">
            📑 View Fees
          </button>
        </div>
          </section>
          <br />
          <Notifications/>
      </div>
      
  );
};

export default AdminDashboard;
