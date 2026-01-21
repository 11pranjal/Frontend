export default function UserDashboard() {
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="mt-1 text-gray-500">Overview &amp; analytics for your POS application</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-blue-700 text-white rounded-md shadow hover:bg-blue-900 transition">Add Product</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition">Export Report</button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Total Sales</span>
              <span className="text-green-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" /></svg>
              </span>
            </div>
            <div className="mt-3 text-2xl font-bold text-gray-800">$82,300</div>
            <div className="text-sm text-green-600 mt-1">+6.8% from last month</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Orders</span>
              <span className="text-blue-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" /></svg>
              </span>
            </div>
            <div className="mt-3 text-2xl font-bold text-gray-800">1,245</div>
            <div className="text-sm text-blue-600 mt-1">+12.3% from last week</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Customers</span>
              <span className="text-yellow-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m13-7V7a4 4 0 00-4-4H7a4 4 0 00-4 4v4m16-4V7a4 4 0 00-4-4M3 13a4 4 0 003 3.87m0 0A4 4 0 0017 20" /></svg>
              </span>
            </div>
            <div className="mt-3 text-2xl font-bold text-gray-800">354</div>
            <div className="text-sm text-yellow-600 mt-1">+3 new today</div>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Products</span>
              <span className="text-purple-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m2.13-2.47A10.05 10.05 0 0121 12c0 5.52-4.48 10-10 10S1 17.52 1 12a10.05 10.05 0 012.87-7.03" /></svg>
              </span>
            </div>
            <div className="mt-3 text-2xl font-bold text-gray-800">182</div>
            <div className="text-sm text-purple-600 mt-1">+5 added this week</div>
          </div>
        </div>

        {/* Sales and Recent Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Sales Chart Placeholder */}
          <div className="col-span-2 bg-white rounded-lg shadow p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Sales Overview</h2>
              <select className="border border-gray-300 rounded px-2 py-1 text-gray-600 focus:outline-none">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="flex-1 flex items-center justify-center h-48 text-gray-400">
              {/* This should be replaced with a real chart */}
              <span>Sales Chart (Coming Soon)</span>
            </div>
          </div>
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr>
                    <th className="py-2 px-3 font-medium text-gray-600">Order ID</th>
                    <th className="py-2 px-3 font-medium text-gray-600">Customer</th>
                    <th className="py-2 px-3 font-medium text-gray-600">Amount</th>
                    <th className="py-2 px-3 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b last:border-none">
                    <td className="py-2 px-3">#60342</td>
                    <td className="py-2 px-3">John Doe</td>
                    <td className="py-2 px-3">$250</td>
                    <td className="py-2 px-3"><span className="inline-block px-2 py-0.5 bg-green-200 text-green-800 rounded text-xs">Completed</span></td>
                  </tr>
                  <tr className="border-b last:border-none">
                    <td className="py-2 px-3">#60341</td>
                    <td className="py-2 px-3">Jane Smith</td>
                    <td className="py-2 px-3">$180</td>
                    <td className="py-2 px-3"><span className="inline-block px-2 py-0.5 bg-yellow-200 text-yellow-800 rounded text-xs">Pending</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">#60340</td>
                    <td className="py-2 px-3">Bob Lee</td>
                    <td className="py-2 px-3">$89</td>
                    <td className="py-2 px-3"><span className="inline-block px-2 py-0.5 bg-red-200 text-red-800 rounded text-xs">Failed</span></td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-3 text-right">
                <a href="#" className="text-blue-700 hover:underline text-sm">View all orders</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
