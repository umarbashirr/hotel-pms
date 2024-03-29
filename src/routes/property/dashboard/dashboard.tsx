import { usePropertyStore } from "@/stores/uesPropertyStore";
import { useEffect } from "react";

export default function Dashboard() {
  const setPageName = usePropertyStore((state) => state.setPageName);
  const pageTitle = "Dashboard";
  useEffect(() => {
    setPageName(pageTitle);
  }, []);
  return <div>Dashboard Page</div>;
}
