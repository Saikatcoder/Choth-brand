import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-purple-900 to-black px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white">
        
        {/* Left Panel */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-700 items-center justify-center p-10 text-white text-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-sm">Please login to access your admin dashboard.</p>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Login</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Username
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full outline-none bg-transparent text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none bg-transparent text-sm"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md shadow-md transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-6 text-center">
            © {new Date().getFullYear()} Admin Panel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
