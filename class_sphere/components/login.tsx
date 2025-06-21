"use client"
import Axios from "axios";
import { headers } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AxiosIns from "./baseURL";

const LoginPage = () => {
  const router = useRouter();
  const BASE_URL = `/login/`

  const [school, setSchool] = useState<schoolName[]>([])
  const [response, setResponse] = useState<string | null>()
  const [credentials, SetCredentials] = useState<Credentials>({
    school: "",
    username: "",
    role: "",
    email: "",
    password: ""
  })


  function handleOnchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    SetCredentials((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    function get_school(): Promise<schoolName[]> {
      const URL = `/get_school/`
      return AxiosIns.get<schoolName[]>(URL)
        .then((res) => {
          setSchool(res.data)
          return res.data
        })

    }
    get_school()
  }
    , [])

  

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(credentials)
    AxiosIns.post(BASE_URL, credentials)
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        console.log(res.data);

        SetCredentials({
          school: "",
          username: "",
          role: "",
          email: "",
          password: "",


        });
          credentials.role == "school_admin" && router.push(`/adminDashboard/`),
          credentials.role == "teacher" && router.push(`/adminDashboard/`)

      })
      .catch((err) => {
        if (Axios.isAxiosError(err)) {
          setResponse(err.response?.data?.message || `An error occurred`);

        } else { setResponse(`Unknown error`) }
      })



  }


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          <Link href="/login">Log in to Class Sphere</Link></h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
            <select name="school_name" onChange={(e) => SetCredentials({ ...credentials, school: e.target.value })} value={credentials?.school} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-950">
              {school.map((sch: schoolName) => (<option key={sch.id} value={sch.id}>{sch.name}</option>))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Username</label>
            <input type="text" name="username" onChange={handleOnchange} value={credentials.username} placeholder="Select School" className="text-gray-900 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Role</label>
            <select name="role" value={credentials.role} onChange={(e) => SetCredentials({ ...credentials, role: e.target.value })} className="w-full border text-gray-900 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select your role</option>
              <option value="school_admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" name="email" onChange={handleOnchange} value={credentials.email} className="text-gray-900 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" name="password" onChange={handleOnchange} value={credentials.password} className="text-gray-900 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Log In
          </button>
          <br />
          <p>{response}</p>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account? <a href="/create-school" className="text-blue-600 hover:underline">Create your school</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
