import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PropertyState {
  propertyId: string;
  propertyDetails: any;
  pageName: string;
  setPageName: (name: string) => void;
  setPropertyId: (id: string) => void;
  setPropertyDetails: (details: string) => void;
}

const usePropertyStore = create<PropertyState>()(
  devtools(
    persist(
      (set) => ({
        propertyId: "",
        propertyDetails: {},
        pageName: "",
        setPageName: (name) => set((state) => ({ ...state, pageName: name })),
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
