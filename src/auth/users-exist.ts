import axios from 'src/lib/axios';

interface UsersResponse {
  users?: Array<Object>;
  message: string;
}

const usersExist = async (): Promise<boolean> => {
  const { users }: UsersResponse = await axios.get('users/readMany');

  if (users) return true;

  return false;
};

export default usersExist;
