import { usePropertyStore } from "@/stores/uesPropertyStore";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const pageName = usePropertyStore((state) => state.pageName);
  return (
    <header className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold">{pageName}</h2>
      </div>
      <div>
        <div className="flex items-center justify-end gap-4">
          <div className="text-end text-xs">
            <p className="font-semibold">umarbashir601@gmail.com</p>
            <p>Admin</p>
          </div>
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
