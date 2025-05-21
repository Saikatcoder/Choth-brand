import React, { useState } from "react";
import { FaRupeeSign, FaCalendarAlt, FaUser } from "react-icons/fa";

const Payments = () => {
  const [payments, setPayments] = useState([
    {
      id: "#PAY123",
      name: "Saikat Dutta",
      amount: 2999,
      date: "2025-05-20",
      status: "Completed",
    },
    {
      id: "#PAY124",
      name: "Rudransh Verma",
      amount: 1499,
      date: "2025-05-18",
      status: "Pending",
    },
  ]);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold text-gray-200 mb-6">
        💳 Payments Overview
      </h1>

      <div className="overflow-auto rounded-xl shadow border border-gray-700">
        <table className="min-w-full bg-[#0f172a] text-sm text-white">
          <thead className="bg-[#1e293b] text-gray-300 uppercase text-xs">
            <tr>
              <th className="text-left px-6 py-4">Payment ID</th>
              <th className="text-left px-6 py-4">Customer</th>
              <th className="text-left px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr
                key={index}
                className="border-t border-gray-600 hover:bg-[#1a253a] transition-all"
              >
                <td className="px-6 py-4 font-semibold">{payment.id}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <FaUser className="text-yellow-400" />
                  {payment.name}
                </td>
                <td className="px-6 py-4 flex items-center gap-1 text-green-400">
                  <FaRupeeSign /> {payment.amount}
                </td>
                <td className="px-6 py-4 flex items-center gap-2 text-blue-300">
                  <FaCalendarAlt /> {payment.date}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold 
                      ${
                        payment.status === "Completed"
                          ? "bg-green-600/20 text-green-400"
                          : "bg-yellow-600/20 text-yellow-300"
                      }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
