import React from 'react';

const AdminDashboard2: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {["Total Students", "Teachers", "Attendance Today", "Unread Messages"].map((item) => (
          <div key={item} className="bg-white p-4 rounded shadow text-center">
            <p className="text-gray-500">{item}</p>
            <p className="text-2xl font-bold text-blue-700">--</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["Add Staff", "Create Class", "Upload Results", "View Fees"].map((link) => (
            <button
              key={link}
              className="bg-blue-600 text-white py-3 rounded shadow hover:bg-blue-700 transition"
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export const Notifications = () =>{
    return (
    
        <div className='text-black'>
             {/* Notifications */}
     <h2 className="text-xl font-semibold mb-4">Notifications</h2>
     <ul className="list-disc list-inside space-y-2">
       <li>Upcoming Event: PTA Meeting on Friday</li>
       <li>3 Payments Due This Week</li>
       <li>1 Disciplinary Case Flagged</li>
     </ul>
   </div>
 )   
}
export default AdminDashboard2;
