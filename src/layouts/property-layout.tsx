import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { usePropertyStore } from "@/stores/uesPropertyStore";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const PropertyLevelLayout = () => {
  const { propertyId } = useParams();
  const setPropertyId = usePropertyStore((state) => state.setPropertyId);

  useEffect(() => {
    if (propertyId) {
      setPropertyId(propertyId);
    }
  }, []);

  return (
    <div className="w-full h-full min-h-screen grid grid-cols-[240px_1fr] bg-gray-100">
      <Sidebar />
      <div className="py-7 px-10">
        <Navbar />
        <div
          className="p-6 mt-6 rounded-2xl bg-white "
          style={{ boxShadow: "2px 4px 8px rgba(0,0,0,0.1)" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PropertyLevelLayout;
