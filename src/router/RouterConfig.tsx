import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgetPasswordPage from "../components/auth/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../pages/layout/AuthLayout";
import UserLayout from "../pages/layout/UserLayout";
import UserDashboard from "../pages/dashboard/UserDashboard";
import UserListPage from "../pages/user/UserListPage";

const router = createBrowserRouter([
  // {path:"/",Component:LoginPage}
  //{path:"/",element:<LoginPage/>},
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      { path: "register", Component: RegisterPage },
    ],
  },
  // {path:"/register",Component:RegisterPage},

  { path: "/forget-password", Component: ForgetPasswordPage },

  {
    path: "/admin",
    element: <UserLayout />,
    children: [
      {
        index: true,
        Component: UserDashboard,
      },

      { path: "user", element: <UserListPage /> },
      { path: "user/:userId", element: <UserListPage /> },
    ],
  },
  {
    path: "*",
    element: (
      <ErrorPage code={404} redirectLink="/" redirectTxt="Go Back To Home!!!" />
    ),
  },
]);

export default function RouterConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
