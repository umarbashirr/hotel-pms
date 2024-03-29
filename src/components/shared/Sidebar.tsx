import { usePropertyStore } from "@/stores/uesPropertyStore";
import { Link, NavLink } from "react-router-dom";
import { LayoutDashboard, Hotel, UsersRound, Bed } from "lucide-react";

const Sidebar = () => {
  const propertyId = usePropertyStore((state) => state.propertyId);

  const activeClass =
    "flex justify-start items-center space-x-2 bg-primary text-primary-foreground p-2 rounded-sm shadow-sm";
  const inActiveClass =
    "flex justify-start items-center space-x-2 text-primary p-2 rounded-sm duration-300 ease-in-out hover:bg-gray-100";

  return (
    <aside className="border-r rounded-tr-3xl rounded-br-3xl h-full bg-white">
      <header className="py-8 px-4">
        <Link to="/" className="text-xl font-semibold ">
          Hoteliq
        </Link>
      </header>
      <nav className="flex flex-col gap-2 px-1">
        <NavLink
          to={`/property/${propertyId}/dashboard`}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to={`/property/${propertyId}/reservations`}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Hotel className="w-5 h-5" />
          <span>Reservation</span>
        </NavLink>
        <NavLink
          to={`/property/${propertyId}/guests`}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <UsersRound className="w-5 h-5" />
          <span>Guests</span>
        </NavLink>
        <NavLink
          to={`/property/${propertyId}/rooms`}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <Bed className="w-5 h-5" />
          <span>Rooms</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
