import Link from "next/link";
import React from "react";


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Class Sphere</h1>
        <nav className="space-x-4">
          <Link href="/login" className="text-blue-600 hover:underline">Log In</Link>
          <Link href="/create-school" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Create Your School
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
        <div className="max-w-xl mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Seamless School Management at Your Fingertips</h2>
          <p className="text-gray-600 mb-6">Track attendance, monitor performance, manage communication—all in one place.</p>
          <div className="space-x-4">
            <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Log In
            </Link>
            <Link href="/learn-more" className="text-blue-600 hover:underline">Learn More</Link>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/400x250"
          alt="School illustration"
          className="rounded-md shadow"
        />
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-10 px-6 md:px-20">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Core Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📊 Attendance</h4>
            <p className="text-gray-600">Track daily attendance of students and teachers in real time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">📚 Performance</h4>
            <p className="text-gray-600">Manage report cards, results, and progress tracking easily.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-semibold text-blue-600 mb-2">💬 Communication</h4>
            <p className="text-gray-600">Stay connected with parents, students, and staff instantly.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 md:px-20 text-center bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Trusted by 120+ Nigerian Schools</h3>
        <p className="text-gray-600 italic">“Class Sphere has simplified our school’s administration. We’re more organized than ever!”</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 bg-gray-100">
        &copy; {new Date().getFullYear()} Class Sphere. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
