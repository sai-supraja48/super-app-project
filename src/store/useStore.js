import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      user: {
        name: "",
        username: "",
        email: "",
        mobile: "",
      },

      categories: [],

      setUser: (userData) =>
        set({
          user: userData,
        }),

      setCategories: (selectedCategories) =>
        set({
          categories: selectedCategories,
        }),

      resetStore: () =>
        set({
          user: {
            name: "",
            username: "",
            email: "",
            mobile: "",
          },
          categories: [],
        }),
    }),
    {
      name: "super-app-storage",
    }
  )
);

export default useStore;