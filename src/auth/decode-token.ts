import jwt from 'jsonwebtoken';
import { TokenJWT } from 'src/types';

interface DecodedToken {
  id: number;
  username: string;
}

const decodeToken = (token): DecodedToken | null => {
  const decodedToken = jwt.decode(token) as TokenJWT;
  if (decodedToken) {
    const { id, username } = decodedToken;
    return { id, username };
  }
  return null;
};

export default decodeToken;
