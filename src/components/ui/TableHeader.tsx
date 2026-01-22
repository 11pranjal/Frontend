import type { ReactNode } from "react"
import { NavLink } from "react-router"
export interface ITableHeaderProps {
    title: ReactNode,
    showSearch: boolean,
    btnUrl?: string | null,
    btnTxt?: ReactNode | null
}

export const TableHedaer = ({ title, showSearch, btnUrl = null, btnTxt = null }: Readonly<ITableHeaderProps>) => {
    return (
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between mb-6 gap-4">
            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>

            <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
                {
                    showSearch ? <div className="flex gap-2 w-full">
                        <input
                            type="search"
                            placeholder="Enter search keyword..."
                            className="bg-gray-100 border border-gray-300 focus:border-emerald-600 
                             rounded-full px-4 py-2 text-gray-800 w-full md:w-64 transition"
                        />
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Search
                        </button>
                    </div> : <></>
                }
                { btnUrl && btnTxt ? <div className="flex gap-2 w-full">
                    <NavLink
                        to={btnUrl}
                        className="bg-emerald-600 text-white rounded-full px-6 py-2 font-medium hover:bg-emerald-700 transition"
                    >
                        {btnTxt}
                    </NavLink>
                </div> : <></>
                }
            </div>
        </div>
    )
}