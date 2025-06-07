import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Teacher Dashboard</h1>

      {/* Schedule */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Today's Schedule</h2>
        <p className="text-gray-600">Math (9am), Basic Science (11am)</p>
      </div>

      {/* Lesson Notes */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Lesson Notes to Submit</h2>
        <p className="text-gray-600">1 note pending for JSS2 Basic Tech</p>
      </div>

      {/* Attendance */}
      <button className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700 mb-6">
        Mark Student Attendance
      </button>

      {/* Messages */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Messages</h2>
        <p className="text-gray-600">No new messages.</p>
      </div>
    </div>
  );
};

export default TeacherDashboard;
