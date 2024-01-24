import { usePropertyStore } from "@/stores/uesPropertyStore";
import { Button } from "../ui/button";

const Navbar = () => {
  const pageName = usePropertyStore((state) => state.pageName);
  return (
    <header className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold">{pageName}</h2>
      </div>
      <div>
        <Button>Logout</Button>
      </div>
    </header>
  );
};

export default Navbar;
