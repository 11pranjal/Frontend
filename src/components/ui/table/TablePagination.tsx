import type { IPagination } from "../../../common/GlobalType"
import { type BaseSyntheticEvent } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

interface ITablePagination {
     pagination: IPagination, 
      getDataAction: (params: {page?: number, limit?: number, search?: string}) =>  Promise<void>;
}

export const TablePagination = ({
    pagination,
    getDataAction
}: Readonly<ITablePagination>
) => {
    return (
        <>
            <div className="flex justify-end items-center mt-6">
                <div className="flex items-center gap-1">
                <button className={`size-8 
                                flex items-center justify-center
                                rounded-full       
                                ${pagination && pagination.page === 1 ? `bg-gray-400 text-gray-300 hover:cursor-not-allowed` : ` bg-white text-gray-600  hover:bg-gray-100 `
                    }
                                `}
                    onClick={async (e: BaseSyntheticEvent) => {
                        e.preventDefault()
                        if (pagination.page > 1) {
                            await getDataAction({page: pagination.page-1})
                        }
                    }}>
                    <FaChevronLeft className="size-4" />
                </button>

                {
                    [1, 2, 3].map((pageNum) => (
                        <button key={pageNum} className={`
                                        size-8 flex items-center justify-center rounded-full
                                        hover:cursor-pointer
                                        ${pagination.page === pageNum ? 'bg-blue-600 text-white font-bold' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                                    `}
                            onClick={async (e: BaseSyntheticEvent) => {
                                e.preventDefault()
                                if (pagination.page !== pageNum) {
                                    await getDataAction({page:pageNum})
                                }
                            }}>
                            {pageNum}
                        </button>
                    ))
                }
                <button className={`size-8 
                                flex items-center justify-center
                                rounded-full       
                                ${pagination && pagination.page === 3
                        ? `bg-gray-400 text-gray-300 hover:cursor-not-allowed` : ` bg-white text-gray-600  hover:bg-gray-100 `
                    } 
                                `}
                    onClick={async (e: BaseSyntheticEvent) => {
                        e.preventDefault()
                        if (pagination.page < 3) {
                            await getDataAction({page: pagination.page + 1})
                        }
                    }}
                >
                    <FaChevronRight className="size-4" />
                </button>
            </div>
        </div>
    </>)
}