'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Axios from 'axios';

export default function SelectSchoolPage() {
  const [schoolName, setSchoolName] = useState<schoolName[]>([]);
  const router = useRouter();

  const handleCreateSchool = () => {
    router.push('/create-school');
  };
  const URL = `http://127.0.0.1:8000/api/get_school/`

  useEffect(() => {
    //Axios.get(URL).then((res) => { setSchoolName(res.data) })
    const carry = async () => {
      const response = await Axios.get(URL);
      const data = await response.data;
      console.log(data);
      setSchoolName(data)
    }
    carry()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center px-10">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-5xl grid md:grid-cols-2 gap-10">

        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Welcome to Class Sphere</h1>
          <p className="text-gray-600 mb-6">
            Find your school or create a new one if you're an administrator.
          </p>

          <input
            type="text"
            // value={schoolName}
            //onChange={(e) => setSchoolName(e.target.value)}
            placeholder="Search for your school..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="text-center text-gray-400 my-2">— or —</div>
          <ul>{schoolName.map((e) => (
            <li key={e.id}> {e.name}</li>
          ))}</ul>
          <button
            onClick={handleCreateSchool}
            className="block w-full text-center bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Create New School (Admins Only)
          </button>

          <p className="text-xs text-gray-400 mt-4">
            Students and teachers should search for their school above.
          </p>
        </div>

        {/* Illustration */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2942/2942076.png"
            alt="School illustration"
            className="w-3/4 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
