import UserLayout from "../pages/layout/UserLayout"
import UserDashboard from "../pages/dashboard/UserDashboard"
import ErrorPage from "../pages/ErrorPage"

export const customerRoutes = [{
        path: "/customer",
        element: <UserLayout />,
        children: [
          {
            index: true,
            Component: UserDashboard,
          },
          { path: "*", element: (<ErrorPage code={404} redirectLink="/customer" redirectTxt="Go Back To Home!!!" />), },
        ],
},]