import { Outlet } from "react-router-dom";

export default function ConfigLayout() {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <Outlet />
    </div>
  );
}
