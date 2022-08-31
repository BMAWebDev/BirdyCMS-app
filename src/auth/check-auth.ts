import { useStore } from "src/store";

const checkAuth = () => {
  const { authToken } = useStore.getState();

  console.log(authToken);

  // to be continued once i finish the JWT auth

  return !!authToken;
};

export default checkAuth;
