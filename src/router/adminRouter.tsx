import UserLayout from "../pages/layout/UserLayout";
import UserDashboard from "../pages/dashboard/UserDashboard";
import UserListPage from "../pages/user/UserListPage";
import ErrorPage from "../pages/ErrorPage";
import BannerListPage from "../pages/banners/BannerListPage";
import BannerCreatePage from "../pages/banners/BannerCreatePage";


export const adminRoutes = [{
    path: "/admin", element: <UserLayout />, children: [
        { index: true, Component: UserDashboard, },
        {path: "banners", element: <BannerListPage />},
        {path: "banner/create", element: <BannerCreatePage />},
        { path: "user", element: <UserListPage /> },
        { path: "user/:userId", element: <UserListPage /> },
        { path: "*", element: (<ErrorPage code={404} redirectLink="/admin" redirectTxt="Go Back To Home!!!" />), },
    ],
},]
