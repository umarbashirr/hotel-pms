import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full mt-[100px] flex items-center justify-center px-4">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
