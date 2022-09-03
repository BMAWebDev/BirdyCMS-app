import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStore } from "src/store";

const useAuth = (): void => {
  const { authToken } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!authToken) router.push("/login");
  }, []);
};

export default useAuth;
