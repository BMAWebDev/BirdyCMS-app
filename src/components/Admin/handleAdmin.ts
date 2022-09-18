import axios from 'src/lib/axios';
import { handleAuth } from 'src/auth';
import { UserType, Type } from 'src/types';

interface Response {
  props: {
    user?: UserType;
    types?: Array<Type>;
  };
}

const handleAdmin = async (context) => {
  let response: Response;
  response = (await handleAuth(context, true)) as Response;

  const { types }: any = await axios.get('types/readMany');

  response.props.types = types;

  return response;
};

export default handleAdmin;
