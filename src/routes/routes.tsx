import { createBrowserRouter } from "react-router-dom";
import HomePage from "./home";
import LoginPage from "./login";
import RegisterPage from "./register";
import RegisterNewPorperty from "./property/register-property";
import AuthLayout from "@/layouts/auth-layout";
import ConfigLayout from "@/layouts/config-layout";
import PropertyLevelLayout from "@/layouts/property-layout";
import PropertyConfig from "./property-config/property-config";
import RoomConfig from "./property-config/room-config";

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
    path: "/inventory/config/new",
    element: <RegisterNewPorperty />,
  },
  {
    path: "/property/:propertyId",
    element: <PropertyLevelLayout />,
    children: [
      {
        path: "configure/property",
        element: <PropertyConfig />,
      },
      {
        path: "configure/room",
        element: <RoomConfig />,
      },
    ],
  },
]);

export default routes;
