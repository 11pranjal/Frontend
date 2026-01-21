import type { IUser } from "../../pages/auth/auth.contract"

export const UserHeader = ({loggedInUser}: Readonly<{loggedInUser: IUser}>) => {
    return (<>
        <header className="h-20 bg-gray-900 w-full text-white">
            <div className="flex items-center justify-between h-full px-8">
                <div className="flex items-center gap-3">
                    <svg
                        className="h-9 w-9 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6V4m0 16v-2m8-4h2m-18 0H2m15.07-7.07l1.42-1.42M4.51 19.49l1.42-1.42M18.36 19.49l-1.42-1.42M5.64 5.64L7.06 7.06"
                        />
                    </svg>
                    <span className="font-bold text-xl tracking-wide">
                        Admin Dashboard
                    </span>
                </div>
                <nav className="flex items-center gap-6">
                    <button className="text-gray-300 hover:text-white transition">Overview</button>
                    <button className="text-gray-300 hover:text-white transition">Users</button>
                    <button className="text-gray-300 hover:text-white transition">Products</button>
                    <button className="text-gray-300 hover:text-white transition">Reports</button>
                </nav>
                <div className="flex items-center gap-4">
                    <img
                        // src="https://ui-avatars.com/api/?name=Admin&background=1e293b&color=fff"
                        src={loggedInUser?.image?.url}
                        alt="Admin avatar"
                        className="w-10 h-10 rounded-full border-2 border-green-400"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold">{loggedInUser?.name}</span>
                        <span className="text-sm text-gray-300">{loggedInUser?.role}</span>

                    </div>
                </div>
            </div>
        </header>
    </>)
}