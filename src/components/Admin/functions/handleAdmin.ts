import axios from 'src/lib/axios';
import { handleAuth } from 'src/auth';
import { UserCollection } from 'src/types';
import { Collection } from 'src/components/Admin/types';

interface Response {
  props: {
    user?: UserCollection;
    collections?: Array<Collection>;
  };
}

import { GetServerSideProps } from 'next';
const handleAdmin: GetServerSideProps = async (context) => {
  let response: Response;
  response = (await handleAuth(context, true)) as Response;

  const { collections }: any = await axios.get('collections/readMany');

  response.props.collections = collections;

  return response;
};

export default handleAdmin;
