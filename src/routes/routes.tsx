import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import LoginPage from "./login";
import RegisterPage from "./register";
import RegisterNewPorperty from "./property/register-property";
import AuthLayout from "@/layouts/auth-layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/property/new",
    element: <RegisterNewPorperty />,
  },
]);

export default routes;
