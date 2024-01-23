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
    <main>
      <Outlet />
    </main>
  );
};

export default PropertyLevelLayout;
