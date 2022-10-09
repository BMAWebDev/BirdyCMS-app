import axios from 'src/lib/axios';
import decodeToken from './decode-token';
import getUserDetails from './get-user-details';
import { GetServerSideProps } from 'next';
import { getCookie } from 'cookies-next';
import { UserCollection } from 'src/types';

interface HandleAuth extends GetServerSideProps {
  (context: Object, isAdmin?: boolean): Promise<Object>;
}

interface UsersResponse {
  users?: Array<UserCollection>;
  message: string;
}

const handleAuth: HandleAuth = async (context, isAdmin = false) => {
  const { users }: UsersResponse = await axios.get('users/readMany');

  const { req, res } = context;

  // if the users array exists
  if (users) {
    // but no users exist in that array
    if (!users.length) {
      return {
        redirect: {
          permanent: false,
          destination: '/register',
        },
        props: {
          user: null,
        },
      };
    }

    // get the decoded object containing user info from the token saved in cookie
    const cookie = getCookie('jwt_token', { req, res });
    let userID: number;

    if (cookie) {
      userID = decodeToken(cookie).id;
    }

    const user = await getUserDetails(userID);

    // if users exist and is on an admin page
    if (isAdmin) {
      if (user) {
        if (user.role == 'admin' || user.role == 'superadmin') {
          return {
            props: {
              user: user ? user : null,
            },
          };
        }

        return {
          redirect: {
            permanent: false,
            destination: '/',
          },
          props: {
            user: user ? user : null,
          },
        };
      }

      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
        props: {
          user: user ? user : null,
        },
      };
    }

    // users exist on a client page
    return {
      props: {
        usersExist: true,
        user: user ? user : null,
      },
    };
  }

  const returnedOptions: any = {
    props: {},
  };

  if (req.url != '/register') {
    returnedOptions.redirect = {
      permanent: false,
      destination: '/register',
    };
  }

  return returnedOptions;
};

export default handleAuth;
