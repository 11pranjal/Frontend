import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <>
      <header className="h-20 bg-gray-900 w-full text-white">
        <div className="flex items-center justify-between px-6 h-full">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="hover:bg-gray-700 px-3 py-2 rounded">
              Profile
            </button>
            <button className="hover:bg-gray-700 px-3 py-2 rounded">
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="flex w-full h-screen">
        <aside className="bg-gray-800 text-white w-100">
          <nav className="p-4 space-y-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <span>📊</span>
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <span>🛍️</span>
              <span>Products</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <span>🧾</span>
              <span>Orders</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <span>👥</span>
              <span>User</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <span>📈</span>
              <span>Reports</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <span>⚙️</span>
              <span>Settings</span>
            </a>
          </nav>
        </aside>
        <section className="p-5 bg-gray-300 m-3 rounded-lg w-full">
          <Outlet />
        </section>
      </main>
      <footer className="h-16 bg-gray-900 w-full text-white border-t border-gray-700">
        <div className="flex items-center justify-between px-6 h-full text-sm">
          <span>&copy; 2024 POS System. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Support
            </a>
            <span className="text-gray-400">v1.0.0</span>
          </div>
        </div>
      </footer>
    </>
  );
}
