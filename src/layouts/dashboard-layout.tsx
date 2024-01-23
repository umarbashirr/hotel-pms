import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();

  console.log(location);
  console.log(location.pathname);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
