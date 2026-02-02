import { TableHedaer } from "../../components/ui/TableHeader";
import { RowSkeleton } from "../../components/ui/table/TableSkeleton";
import { useEffect, useState } from "react";
import type { IBanner } from "./banner.contract";
import { toast } from "sonner";
import axiosInstance from "../../config/axios.config";
import type { IPagination, IResponse } from "../../common/GlobalType";
import { TablePagination } from "../../components/ui/table/TablePagination";
import { RowActions } from "../../components/ui/table/RowAction";



export default function BannerListPage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [banners, setBanners] = useState<Array<IBanner>>([])
    const [pagination, setPagination] = useState<IPagination>({
        limit: 20,
        page: 1,
        total: 0,
        totalNoOfpages: 1,
    })

    const getBannerList = async ({
        limit = 20,
        page = 1,
        search = '',
    }: {
        limit?: number
        page?: number
        search?: string
    } = {}) => {
        setLoading(true)
        try {
            const response: IResponse<IBanner> = await axiosInstance.get("/banner", {
                params: {
                    limit: limit,
                    page: page,
                    q: search
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
        getBannerList({ limit: 20, page: 1, search: '' });
    }, [])

    const onDeleteConfirm = async (id: string) => {
        try {
            setLoading(true)
            await axiosInstance.delete("/banner/" + id)
            toast.success("Banner deleted successfully")
            await getBannerList({ limit: 20, page: 1, search: '' })
        } catch {
            toast.error("Error deleting Banner", {
                description: "There was some issue while deleting banner please try again once"
            })
        } finally {
            setLoading(false)
        }
    }


    return (<>
        <section className="w-full p-5 bg-white rounded-lg shadow-md">
            {/* Header row: Title, CTA and Search */}
            <TableHedaer title="Banner" getSearchResult={getBannerList} showSearch={true} btnTxt="+ Add Banner" btnUrl={'/admin/banner/create'} />

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
                                                <td className="px-4 py-3 text-center">
                                                    <RowActions
                                                        editUrl={"/admin/banner/" + i._id}
                                                        rowId={i._id}
                                                        onDeleteConfirm={onDeleteConfirm}
                                                    />
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
                loading ? null : (
                    banners && (
                        <TablePagination
                            getDataAction={({ limit, page, search }) => getBannerList({ limit, page, search })}
                            pagination={pagination}
                        />
                    )
                )
            }
        </section>
    </>)
}