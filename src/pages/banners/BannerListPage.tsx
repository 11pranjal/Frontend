import { FaChevronLeft, FaChevronRight, FaEye, FaPen, FaTrash } from "react-icons/fa";
import { TableHedaer } from "../../components/ui/TableHeader";
import { RowSkeleton } from "../../components/ui/table/TableSkeleton";
import { useEffect, useState, type BaseSyntheticEvent } from "react";
import type { IBanner } from "./banner.contract";
import { toast } from "sonner";
import axiosInstance from "../../config/axios.config";
import type { IPagination, IResponse } from "../../common/GlobalType";



export default function BannerListPage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [banners, setBanners] = useState<Array<IBanner>>([])
    const [pagination, setPagination] = useState<IPagination>({
        limit: 1,
        page: 1,
        total: 0,
        totalNoOfpages: 1,
    })

    const getBannerList = async (page = 1, limit = 1, search = '') => {
        setLoading(true)
        try {
            const response: IResponse<IBanner> = await axiosInstance.get("/banner", {
                params: {
                    page: page,
                    limit: limit,
                    search: search
                }
            })
            setBanners(response.data)
            setPagination(response.meta.pagination)
        } catch {
            toast.error("Sorry! Could not fetch data!!!")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getBannerList(1, 1, '');
    }, [])

    return (<>
        <section className="w-full p-5 bg-white rounded-lg shadow-md">
            {/* Header row: Title, CTA and Search */}
            <TableHedaer title="Banner" showSearch={true} btnTxt="+ Add Banner" btnUrl={'/admin/banner/create'} />

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-200 rounded-tl-lg rounded-tr-lg overflow-hidden">
                    <thead className="bg-stone-900/75">
                        <tr>
                            <th className="px-4 py-3 font-medium text-gray-100">Title</th>
                            <th className="px-4 py-3 font-medium text-gray-100">Thumbnail</th>
                            <th className="px-4 py-3 font-medium text-gray-100">Status</th>
                            <th className="px-4 py-3 font-medium text-gray-100">URL</th>
                            <th className="px-4 py-3 font-medium text-gray-100">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading
                                ? <>
                                    <RowSkeleton rows={5} columns={5} />

                                </>
                                : (
                                    banners && banners.length ? (
                                        banners.map((i: IBanner, idx) => (
                                            <tr key={idx} className="border-b boarder-b-gray-200 last:border-1 hover:bg-stone-100">
                                                <td className="px-4 py-3 whitespace-nowrap text-gray-900">{i.title}</td>
                                                <td className="px-4 py-3">
                                                    <img
                                                        src={i.image.url}
                                                        alt={i.title}
                                                        className="w-25 rounded-md object-cover "
                                                    />
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${i.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                        {i.status === 'active' ? "Published" : "Un-Published"}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <a
                                                        href={i.url}
                                                        target="_banner"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-700 hover:underline break-all ">
                                                        {i.url}
                                                    </a>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            title="View"
                                                            className="flex items-center justify-center size-10 bg-emerald-900 hover:bg-emerald-800 text-emerald-100 rounded-full transition"
                                                        >
                                                            <FaEye className="size-4" />
                                                        </button>
                                                        <button
                                                            title="Edit"
                                                            className="flex items-center justify-center size-10 bg-blue-900 hover:bg-blue-800 text-blue-100 rounded-full transition"
                                                        >
                                                            <FaPen className="size-4" />
                                                        </button>
                                                        <button
                                                            title="Delete"
                                                            className="flex items-center justify-center size-10 bg-red-900 hover:bg-red-800 text-red-100 rounded-full transition"
                                                        >
                                                            <FaTrash className="size-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : <tr className="border-b boarder-b-gray-200 last:border-1 hover:bg-stone-100">
                                        <td colSpan={5} className="px-4 py-3 text-center w-full" >
                                            <p>No Data found...</p>
                                        </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            {
                loading ? <></> : (
                    banners && <div className="flex justify-end items-center mt-6">
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
                                        await getBannerList(pagination.page - 1, pagination.limit, '')
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
                                                await getBannerList(pageNum, pagination.limit, '')
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
                                        await getBannerList(pagination.page + 1, pagination.limit, '')
                                    }
                                }}
                            >
                                <FaChevronRight className="size-4" />
                            </button>
                        </div>
                    </div>
                )
            }
        </section>
    </>)
}