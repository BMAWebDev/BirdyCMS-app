import create from "zustand";
import { persist } from "zustand/middleware";

interface storeProps {
  authToken: string;
  setAuthToken: (token: string) => void;
}

const useStore = create<storeProps>()(
  persist(
    (set) => ({
      authToken: "",
      setAuthToken: (token) => set((state) => ({ authToken: token })),
    }),
    {
      name: "storage",
    }
  )
);

export default useStore;
