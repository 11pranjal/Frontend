import { createBrowserRouter, RouterProvider } from "react-router";
import ForgetPasswordPage from "../components/auth/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import { adminRoutes } from "./adminRouter";
import { customerRoutes } from "./customerRoutes";
import { authRouter } from "./authRouter";

const router = createBrowserRouter([

  { path: "/forget-password", Component: ForgetPasswordPage },

  ...authRouter,
  ...adminRoutes,
  ...customerRoutes,

  { path: "*", element: (<ErrorPage code={404} redirectLink="/" redirectTxt="Go Back To Home!!!" />), },
]);

export default function RouterConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
