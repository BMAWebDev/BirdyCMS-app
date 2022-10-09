import axios from 'src/lib/axios';
import { UserCollection } from 'src/types';

interface UserResponse {
  user: UserCollection | undefined;
}

const getUserDetails = async (userID: number) => {
  const { user }: UserResponse = await axios.get(`users/readOne/${userID}`);

  return user;
};

export default getUserDetails;
