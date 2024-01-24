import { usePropertyStore } from "@/stores/uesPropertyStore";
import { useEffect } from "react";

const Rooms = () => {
  const setPageName = usePropertyStore((state) => state.setPageName);
  const pageTitle = "Rooms View";
  useEffect(() => {
    setPageName(pageTitle);
  }, []);

  return <div>Rooms</div>;
};

export default Rooms;
