import { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      orderId: "#12354",
      customerName: "saikat",
      email: "saikat2018dutta18@gmail.com",
      mobile: "5689756",
      product: "hoodie",
      amount: 566666,
      date: "12/02/2025 10:15:14s Am",
      status: "pending",
    },
  ]);
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "dispatched":
        return "bg-green-100 text-green-800";
      case "returned":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold text-gray-200 mb-6">
        🧾 Orders Overview
      </h1>

      <div className="overflow-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="text-left px-6 py-4">Order ID</th>
              <th className="text-left px-6 py-4">Customer</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Mobile</th>
              <th className="text-left px-6 py-4">Product</th>
              <th className="text-left px-6 py-4">Amount</th>
              <th className="text-left px-6 py-4">Date</th>
              <th className="text-left px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {orders.map((item, index) => (
              <tr
                className="border-t border-gray-200 hover:bg-gray-50 transition-all"
                key={index}
              >
                <td className="px-6 py-4 font-medium">{item.orderId}</td>
                <td className="px-6 py-4 capitalize">{item.customerName}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.mobile}</td>
                <td className="px-6 py-4">{item.product}</td>
                <td className="px-6 py-4">₹{item.amount.toLocaleString()}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`${getStatusClass(item.status)} px-3 py-1 rounded-full text-xs font-semibold capitalize`}
                  >
                    <select
                      value={item.status}
                      onChange={(e) =>
                        handleStatusChange(index, e.target.value)
                      }
                      className="bg-transparent outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="dispatched">Dispatched</option>
                      <option value="returned">Returned</option>
                    </select>
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

export default Orders;
