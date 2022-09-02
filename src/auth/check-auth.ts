import decodeToken from "./decode-token";

const checkAuth = (): boolean => {
  return !!decodeToken();
};

export default checkAuth;
