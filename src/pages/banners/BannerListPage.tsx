import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { TableHedaer } from "../../components/ui/TableHeader";

export default function BannerListPage() {
    return (<>
        <section className="w-full p-4 bg-white rounded-lg shadow-md">
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
                        {[1, 2, 3].map((i) => (
                            <tr key={i} className="border-b boarder-b-gray-200 last:border-1 hover:bg-stone-100">
                                <td className="px-4 py-3 whitespace-nowrap text-gray-900">Banner Title {i}</td>
                                <td className="px-4 py-3">
                                    <img
                                        src={`https://placehold.co/400x100`}
                                        alt="Thumbnail"
                                        className="w-25 rounded-md object-cover "
                                    />
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium
                    ${i % 2 === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'}
                  `}>
                                        {i % 2 === 0 ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <a
                                        href={`https://example.com/banner/${i}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:underline break-all"
                                    >
                                        https://example.com/banner/{i}
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
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-600">
                    Showing <span className="font-semibold">1</span> to <span className="font-semibold">3</span> of <span className="font-semibold">30</span> banners
                </div>
                <div className="flex items-center gap-1">
                    <button className="px-3 py-2 rounded-l-full bg-stone-200/50 hover:bg-stone-300 text-gray-700" disabled>
                        Prev
                    </button>
                    {[1, 2, 3, 4, 5].map((n) => (
                        <button
                            key={n}
                            className={`px-3 py-2 ${n === 1 ? 'bg-emerald-600 text-white' : 'bg-stone-200/50 text-gray-800'} hover:bg-emerald-500 hover:text-white transition rounded-full`}
                        >
                            {n}
                        </button>
                    ))}
                    <button className="px-3 py-2 rounded-r-full bg-stone-200/50 hover:bg-stone-300 text-gray-700">
                        Next
                    </button>
                </div>
            </div>
        </section>
    </>)
}