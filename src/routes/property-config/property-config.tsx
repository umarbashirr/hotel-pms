import { usePropertyStore } from "@/stores/uesPropertyStore";

export default function PropertyConfig() {
  const propertyId = usePropertyStore((state) => state.propertyId);

  return <div>Property Configuration Page {propertyId}</div>;
}
