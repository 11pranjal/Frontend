import AuthLayout from "../pages/layout/AuthLayout"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"

export const authRouter = [{
    
        path: "/",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <LoginPage />,
          },
          { path: "register", Component: RegisterPage },
        ],
      
}]