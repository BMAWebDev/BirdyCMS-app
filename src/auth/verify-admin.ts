import axios from 'src/lib/axios';
import decodeToken from './decode-token';
import { GetServerSideProps } from 'next';
import { getCookie } from 'cookies-next';

interface VerifyAdmin extends GetServerSideProps {
  (context: Object, isAdmin?: boolean): Promise<Object>;
}

interface UsersResponse {
  users?: Array<Object>;
  message: string;
}

const verifyAdmin: VerifyAdmin = async (context, isAdmin = false) => {
  const { users }: UsersResponse = await axios.get('users/readMany');

  const { req, res } = context;
  let props = {
    usersExist: false,
  };

  if (users) {
    if (isAdmin) {
      // get the decoded object containing user info from the token saved in cookie
      const cookie = getCookie('jwt_token', { req, res });
      if (cookie) {
        const { id } = decodeToken(cookie);

        if (users?.find((user: { id: number }) => user.id == id)) {
          return {
            props,
          };
        }
      }

      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
        props,
      };
    }

    if (!users.length)
      return {
        redirect: {
          permanent: false,
          destination: '/register',
        },
        props,
      };

    return {
      props: {
        usersExist: true,
      },
    };
  }

  const returnedOptions: any = {
    props,
  };
  if (req.url != '/register') {
    returnedOptions.redirect = {
      permanent: false,
      destination: '/register',
    };
  }

  return returnedOptions;
};

export default verifyAdmin;
