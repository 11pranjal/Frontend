export default function UserDashboard() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-10"></div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
            <p className="text-blue-100 mt-2">
              Welcome back to your POS system
            </p>
          </div>
        </div>

        {/* Main Content /}
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/ Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Sales",
              value: "$45,231",
              change: "+12%",
              color: "from-blue-500 to-blue-600",
            },
            {
              label: "Orders",
              value: "1,234",
              change: "+8%",
              color: "from-purple-500 to-purple-600",
            },
            {
              label: "Customers",
              value: "892",
              change: "+5%",
              color: "from-pink-500 to-pink-600",
            },
            {
              label: "Revenue",
              value: "$12,890",
              change: "+15%",
              color: "from-green-500 to-green-600",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${stat.color} rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform`}
            >
              <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-2">
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Recent Sales</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                    Order ID
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                    Customer
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((item) => (
                  <tr
                    key={item}
                    className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                  >
                    <td className="py-3 px-4 text-white">#ORD-{1000 + item}</td>
                    <td className="py-3 px-4 text-gray-300">John Doe</td>
                    <td className="py-3 px-4 text-white font-semibold">
                      $250.00
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/50">
                        Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Top Products</h2>
            <div className="space-y-4">
              {["Product A", "Product B", "Product C"].map((product, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <span className="text-gray-200">{product}</span>
                  <span className="font-bold text-purple-400">
                    {(i + 1) * 120} units
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
