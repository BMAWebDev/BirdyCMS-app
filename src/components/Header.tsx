import { ReactElement } from 'react';
import axios from 'src/lib/axios';
import { useRouter } from 'next/router';
import { PageProps } from 'src/types';

export default function Header({ user }: PageProps): ReactElement {
  const router = useRouter();

  const logout = async () => {
    const res: any = await axios.post('users/logout');
    alert(res.message);
    router.push('/');
  };

  return (
    <div className='header'>
      {user && <h1>Header. Hello {user.username}</h1>}
      {!user && <h1>Header</h1>}

      <ul>
        {!user && (
          <>
            {router.route != '/login' && (
              <li onClick={() => router.push('/login')}>Login</li>
            )}
            {router.route != '/register' && (
              <li onClick={() => router.push('/register')}>Register</li>
            )}
          </>
        )}
        {user && (
          <li style={{ fontWeight: 'bold' }} onClick={logout}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
}

export const getServerSideProps = (context) => {
  const { req, res } = context;

  console.log(context);

  return {
    props: {},
  };
};
