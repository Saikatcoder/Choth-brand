import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaCalendarAlt, FaMapMarkerAlt, FaHashtag } from "react-icons/fa";

const Customer = () => {
  const [customers, setCustomers] = useState([
    {
      orderId: "#12354",
      customerName: "Saikat",
      email: "saikat2018dutta18@gmail.com",
      date: "12/02/2025 10:15 AM",
      number: 666666666,
      address: 'Kolkata, West Bengal, Bankura Bishnupur',
      pin: '722122'
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 md:p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">🧾 Customers Overview</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/40 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/src/assets/avatar.png"
                alt="avatar"
                className="w-14 h-14 rounded-full border-2 border-blue-500 shadow"
              />
              <div>
                <h2 className="text-lg font-semibold">{customer.customerName}</h2>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <FaHashtag /> {customer.orderId}
                </p>
              </div>
            </div>

            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2 text-gray-300">
                <FaEnvelope className="text-yellow-400" /> {customer.email}
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <FaPhoneAlt className="text-green-400" /> {customer.number}
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <FaCalendarAlt className="text-blue-400" /> {customer.date}
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <FaMapMarkerAlt className="text-red-400" /> {customer.address} - {customer.pin}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
