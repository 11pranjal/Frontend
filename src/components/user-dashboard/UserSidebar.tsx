import type { IUser } from "../../pages/auth/auth.contract"

export const UserSidebar = ({loggedInUser}: Readonly<{loggedInUser: IUser}>) => {
    return(
        <aside className="bg-gray-800 text-white w-100">
          <div className="flex flex-col h-full w-64 p-4 bg-gray-800 border-r border-gray-700 shadow-lg">
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <svg
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6V4m0 16v-2m8-4h2m-18 0H2m15.07-7.07l1.42-1.42M4.51 19.49l1.42-1.42M18.36 19.49l-1.42-1.42M5.64 5.64L7.06 7.06"
                  />
                </svg>
                <span className="font-bold text-lg tracking-wide">
                  POS Admin
                </span>
              </div>
            </div>
            <nav className="flex-1">
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href="/admin"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-gray-700 text-gray-200 font-medium"
                  >
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-4H7v4zm0 4h14v-2H7v2zm0-8h14V7H7v2z" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/user"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-gray-700 text-gray-200 font-medium"
                  >
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A8 8 0 1112 20a8 8 0 01-6.879-2.196z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Users
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/products"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-gray-700 text-gray-200 font-medium"
                  >
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h6m-3-3v6" />
                    </svg>
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/reports"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-gray-700 text-gray-200 font-medium"
                  >
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
                    </svg>
                    Reports
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/settings"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-gray-700 text-gray-200 font-medium"
                  >
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm5.94 2a7.012 7.012 0 01-1.86-1.86l1.32-2.28a1 1 0 00-1.1-1.46l-2.57.38A7.03 7.03 0 0112 4a7.03 7.03 0 01-1.73 2.22l-2.57-.38a1 1 0 00-1.1 1.46l1.32 2.28A7.012 7.012 0 014.06 10l-2.28 1.32a1 1 0 00.38 1.84l2.57.38c.33.44.7.87 1.1 1.26s.82.77 1.26 1.1l-.38 2.57a1 1 0 001.46 1.1l2.28-1.32a7.012 7.012 0 011.86 1.86l2.28 1.32a1 1 0 001.1-1.46l-.38-2.57a7.03 7.03 0 012.22-1.73l2.57.38a1 1 0 00.38-1.84L17.94 12a7.042 7.042 0 010-2z" />
                    </svg>
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-8">
              <button
                className="w-full flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition text-sm font-semibold justify-center"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                </svg>
                Logout
              </button>
            </div>
            <div className="mt-auto pt-8 text-gray-400 text-xs text-center border-t border-gray-700">
              POS Admin v1.0
            </div>
          </div>
        </aside>
    )
}