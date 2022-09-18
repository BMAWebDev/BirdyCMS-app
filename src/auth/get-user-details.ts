import axios from 'src/lib/axios';

interface UserResponse {
  user: Object | undefined;
}

const getUserDetails = async (userID: number) => {
  const { user }: UserResponse = await axios.get(`users/readOne/${userID}`);

  return user;
};

export default getUserDetails;
