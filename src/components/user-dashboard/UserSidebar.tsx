import { useContext } from "react"
import { FaCog, FaImage, FaPowerOff, FaShoppingBag, FaShoppingCart, FaSitemap, FaUsers } from "react-icons/fa"
import type { IUser } from "../../pages/auth/auth.contract"
import { NavLink, useNavigate } from "react-router"
import { FaB, FaMessage } from "react-icons/fa6"
import AuthContext from "../../context/AuthContext"
import { toast } from "sonner"

export const UserSidebar = ({ loggedInUser }: Readonly<{ loggedInUser: IUser }>) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success("You have been logged out successfully");
    navigate("/")
  };

  return (
    <aside className="bg-gray-800 text-white w-100">
      <div className="flex flex-col h-full w-64 p-4 bg-gray-800 border-r border-gray-700 shadow-lg">
        <div className="mb-8">
          <div className="flex items-center gap-3">
          </div>
        </div>
        <nav className="flex-1">
          <ul className="flex flex-col gap-1">
            <li>
              <NavLink
                to={loggedInUser && `/${loggedInUser.role}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-gray-700 font-medium"
              >
                <FaCog className="text-green-400 size-5 " />
                Dashboard
              </NavLink>
            </li>
            {
              loggedInUser && loggedInUser.role === 'admin' ? <li>
                <NavLink
                  to={loggedInUser && `/${loggedInUser.role}/banners`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-gray-700 font-medium"
                >
                  <FaImage className="text-green-400 size-5 " />
                  Banners
                </NavLink>
              </li> : <></>
            }

            {
              loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller') ? <li>
                <NavLink
                  to={loggedInUser && `/${loggedInUser.role}/brand`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-gray-700 font-medium"
                >
                  <FaB className="text-green-400 size-5 " />
                  Brand
                </NavLink>
              </li> : <></>
            }

            {
              loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller') ? <li>
                <NavLink
                  to={loggedInUser && `/${loggedInUser.role}/categories`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-gray-700 font-medium"
                >
                  <FaSitemap className="text-green-400 size-5 " />
                  Categories
                </NavLink>
              </li> : <></>
            }

            <li>
              <NavLink
                to={loggedInUser && `/${loggedInUser.role}/users`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-gray-700 font-medium"
              >
                <FaUsers className="text-green-400 size-5 " />
                Users
              </NavLink>
            </li>

            {
              loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller') ? <li>
                <NavLink
                  to={loggedInUser && `/${loggedInUser.role}/products`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-gray-700 font-medium"
                >
                  <FaShoppingBag className="text-green-400 size-5 " />
                  Products
                </NavLink>
              </li> : <></>
            }

            <li>
              <NavLink
                to={loggedInUser && `/${loggedInUser.role}/orders`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-gray-700 font-medium"
              >
                <FaShoppingCart className="text-green-400 size-5 " />
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to={loggedInUser && `/${loggedInUser.role}/messages`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition hover:bg-gray-700 font-medium"
              >
                <FaMessage className="text-green-400 size-5 " />
                Messages
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 cursor-pointer 
            px-4 py-2 bg-red-600 hover:bg-red-700 text-white 
            rounded-lg transition text-sm font-semibold justify-center"
          >
            <FaPowerOff className="size-5" />
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