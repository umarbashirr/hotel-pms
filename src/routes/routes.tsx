import AuthLayout from "@/layouts/auth-layout";
import DashboardLayout from "@/layouts/dashboard-layout";
import PropertyLevelLayout from "@/layouts/property-layout";
import RootLayout from "@/layouts/root";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./login";
import PropertyConfig from "./property-config/property-config";
import RoomConfig from "./property-config/room-config";
import Dashboard from "./property/dashboard/dashboard";
import PropertiesList from "./property/properties-list";
import RegisterPage from "./register";
import Rooms from "./room/rooms";
import NewReservationPage from "./reservations/new-reservation";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index={true}
        path="/"
        element={<Navigate to="/auth/login" replace={true} />}
      />
      <Route path="/auth" element={<AuthLayout />}>
        <Route
          path=""
          index={true}
          element={<Navigate to="login" replace={true} />}
        />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="property" element={<PropertyLevelLayout />}>
        <Route path="" index={true} element={<PropertiesList />} />
        <Route path=":propertyId" element={<DashboardLayout />}>
          <Route
            path=""
            index={true}
            element={<Navigate to="dashboard" replace={true} />}
          />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reservations" element={<NewReservationPage />} />
          <Route path="rooms" element={<Rooms />} />
          <Route
            path="configure"
            element={<Navigate to="property" replace={true} />}
          />
          <Route path="configure/property" element={<PropertyConfig />} />
          <Route path="configure/room" element={<RoomConfig />} />
        </Route>
      </Route>
    </Route>
  )
);

export default routes;
