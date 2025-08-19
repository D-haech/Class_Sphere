"use client"
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const StudentDashboard = () => {
  const [name, setName] = useState<user>({
    id: "",
    username: "",
    email:"",
    school: "",
    role: "",
})
  useEffect(() => {
    const URL = `http://127.0.0.1:8000/api/student_info`
    function getStudent() {
      Axios.get(URL).then((res) => {
        setName(res.data)
      }).catch((err)=>{throw err})
    }
    getStudent();
  }, [])
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">{name.username} Dashboard</h1>

      {/* Timetable */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Today's Classes</h2>
        <p className="text-gray-600">English (8am), ICT (10am), Civic Education (1pm)</p>
      </div>

      {/* Report Card */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">View Report Card</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Open Report Card
        </button>
      </div>

      {/* Assignments */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Assignments Due</h2>
        <p className="text-gray-600">Basic Tech Assignment - Due Friday</p>
      </div>

      {/* Messages */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Messages / Announcements</h2>
        <p className="text-gray-600">No new announcements.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
