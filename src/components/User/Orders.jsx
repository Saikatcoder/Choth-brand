
const Orders = () => {
  return (
        <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold text-gray-200 mb-6">🧾 Orders Overview</h1>

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
            <tr className="border-t border-gray-200 hover:bg-gray-50 transition-all">
              <td className="px-6 py-4 font-medium">#ORD1023</td>
              <td className="px-6 py-4">Sumit Kumar</td>
              <td className="px-6 py-4">sumit@gmail.com</td>
              <td className="px-6 py-4">9876543210</td>
              <td className="px-6 py-4">T-shirt</td>
              <td className="px-6 py-4">₹520</td>
              <td className="px-6 py-4">14/04/2025</td>
              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Completed
                </span>
              </td>
            </tr>

            <tr className="border-t border-gray-200 hover:bg-gray-50 transition-all">
              <td className="px-6 py-4 font-medium">#ORD1024</td>
              <td className="px-6 py-4">Aman Verma</td>
              <td className="px-6 py-4">aman@gmail.com</td>
              <td className="px-6 py-4">9999988888</td>
              <td className="px-6 py-4">Hoodie</td>
              <td className="px-6 py-4">₹750</td>
              <td className="px-6 py-4">15/04/2025</td>
              <td className="px-6 py-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Pending
                </span>
              </td>
            </tr>

            <tr className="border-t border-gray-200 hover:bg-gray-50 transition-all">
              <td className="px-6 py-4 font-medium">#ORD1025</td>
              <td className="px-6 py-4">Riya Singh</td>
              <td className="px-6 py-4">riya@gmail.com</td>
              <td className="px-6 py-4">9888877777</td>
              <td className="px-6 py-4">Cap</td>
              <td className="px-6 py-4">₹299</td>
              <td className="px-6 py-4">16/04/2025</td>
              <td className="px-6 py-4">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                  Cancelled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders