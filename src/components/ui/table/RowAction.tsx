import { FaPen,FaTrash } from "react-icons/fa"
import { NavLink } from "react-router"
import Swal from "sweetalert2"

interface IRowActionProps {
    editUrl: string,
    rowId: string,
    onDeleteConfirm: (id: string) => Promise<void>
}

export const RowActions = ({editUrl, rowId, onDeleteConfirm}: Readonly<IRowActionProps>) => {
    const deleteConfirm = async() => {
        const {isConfirmed} = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          if(isConfirmed) {
            onDeleteConfirm(rowId)  
          }
    }
    return (
        <div className="flex items-center gap-2 ">
            <NavLink
            to={editUrl}
                title="Edit"
                className="flex items-center justify-center size-10 bg-blue-900 hover:bg-blue-800 text-blue-100 rounded-full transition hover:cursor-pointer"
            >
                <FaPen className="size-4" />
            </NavLink>
            <button
                className="flex items-center justify-center size-10 bg-red-900 hover:bg-red-800 text-red-100 rounded-full transition hover:cursor-pointer"
                title="Delete"
                onClick={deleteConfirm}
            >
                <FaTrash className="size-4 " />
            </button>
        </div>
    )
}