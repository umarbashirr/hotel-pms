import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PropertyState {
  propertyId: string;
  propertyDetails: any;
  setPropertyId: (id: string) => void;
  setPropertyDetails: (details: string) => void;
}

const usePropertyStore = create<PropertyState>()(
  devtools(
    persist(
      (set) => ({
        propertyId: "",
        propertyDetails: {},
        setPropertyId: (id) => set((state) => ({ ...state, propertyId: id })),
        setPropertyDetails: (details) =>
          set((state) => ({ ...state, propertyDetails: details })),
      }),
      {
        name: "propertyStore",
      }
    )
  )
);

export { usePropertyStore };
