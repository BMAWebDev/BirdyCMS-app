import jwt from "jsonwebtoken";
import { useStore } from "src/store";
import { TokenJWT } from "src/types";

const decodeToken = (): Object | null => {
  const { authToken } = useStore.getState();
  const token = jwt.decode(authToken) as TokenJWT;
  if (token) {
    const { id, username } = token;
    return { id, username };
  }
  return null;
};

export default decodeToken;
