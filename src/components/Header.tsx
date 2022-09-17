import { ReactElement } from 'react';
import axios from 'src/lib/axios';
import { useRouter } from 'next/router';

export default function Header(): ReactElement {
  const router = useRouter();

  const logout = async () => {
    const res: any = await axios.post('users/logout');
    alert(res.message);
    router.push('/');
  };

  return (
    <div>
      <h1>Header</h1>

      <ul>
        {router.route != '/login' && (
          <li onClick={() => router.push('/login')}>Login</li>
        )}
        {router.route != '/register' && (
          <li onClick={() => router.push('/register')}>Register</li>
        )}
        <li style={{ fontWeight: 'bold' }} onClick={logout}>
          Logout
        </li>
      </ul>
    </div>
  );
}

// export const getServerSideProps = (context) => {
//   const { req, res } = context;

//   console.log(context);

//   return {
//     props: {},
//   };
// };
