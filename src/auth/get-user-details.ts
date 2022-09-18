import axios from 'src/lib/axios';
import { UserType } from 'src/types';

interface UserResponse {
  user: UserType | undefined;
}

const getUserDetails = async (userID: number) => {
  const { user }: UserResponse = await axios.get(`users/readOne/${userID}`);

  return user;
};

export default getUserDetails;
