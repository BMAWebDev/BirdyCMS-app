import { ReactElement } from 'react';
import axios from 'src/lib/axios';
import { useRouter } from 'next/router';
import { AdminProps } from 'src/types';

export default function Header({ user, types }: AdminProps): ReactElement {
  const router = useRouter();

  const logout = async () => {
    const res: any = await axios.post('users/logout');
    alert(res.message);
    router.push('/');
  };

  return (
    <div className='header'>
      {user && <h1>BirdyCMS Admin Panel</h1>}

      <ul>
        <li>
          Welcome, {user.username}
          <ul className='profile'>
            <li>Go to profile (soon)</li>
            <li
              style={{ fontWeight: 'bold', cursor: 'pointer' }}
              onClick={logout}
            >
              Logout
            </li>
          </ul>
        </li>

        <li>
          Types
          <ul className='types'>
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/admin/types/create')}
            >
              Create new type
            </li>
            {types.map((type) => {
              return (
                <li
                  key={type.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.push(`/admin/types/${type.name}`)}
                >
                  {type.name}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
