export const RowSkeleton = ({ rows, columns }: Readonly<{ rows: number, columns: number }>) => {
    return (
        <>
            {
                [...Array(rows)].map((_, index: number) => (
                    <tr key={index} className="border-b boarder-b-gray-200 last:border-1 hover:bg-stone-100">
                        {
                            [...Array(columns)].map((_, ind: number) => (
                                <td key={'col'+ind} className="px-4 py-3" >
                                    <p className="animate-pulse w-full h-2 bg-gray-400 rounded-md"></p>
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </>
    )
}