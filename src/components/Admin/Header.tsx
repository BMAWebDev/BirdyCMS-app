import { ReactElement } from 'react';
import axios from 'src/lib/axios';
import { useRouter } from 'next/router';
import { AdminProps } from 'src/components/Admin/types';
import Link from 'next/link';

import cs from 'classnames';
import s from './style.module.scss';

export default function Header({
  user,
  collections,
}: AdminProps): ReactElement {
  const router = useRouter();

  const logout = async () => {
    const res: any = await axios.post('users/logout');
    alert(res.message);
    router.push('/');
  };

  const isActivePage = (route: string) => {
    return route === router.asPath;
  };

  return (
    <div className={cs(s.header)}>
      <h1>BirdyCMS Admin Panel - Welcome, {user.username}</h1>

      <ul className={cs(s.headerMenu)}>
        <li>
          <Link href='/admin'>
            <span className={cs(isActivePage('/admin') ? s.active : '')}>
              Main page
            </span>
          </Link>

          <ul className={cs(s.headerSubMenu, 'profile')}>
            <li>
              {/* /admin/profile or /profile, to be decided */}
              <Link href='/admin/profile'>
                <span>Go to profile (soon)</span>
              </Link>
            </li>

            <li className={cs(s.headerLogoutButton)} onClick={logout}>
              <span>Logout</span>
            </li>
          </ul>
        </li>

        <li>
          <Link href='/admin/collections'>
            <span
              className={cs(isActivePage('/admin/collections') ? s.active : '')}
            >
              Collections
            </span>
          </Link>

          <ul className={cs(s.headerSubMenu, 'collections')}>
            <li>
              <Link href='/admin/collections/create'>
                <span
                  className={cs(
                    isActivePage('/admin/collections/create') ? s.active : ''
                  )}
                >
                  Create new type
                </span>
              </Link>
            </li>

            {collections.map((collection) => {
              return (
                <li key={collection.id} className={cs(s.collectionItem)}>
                  <Link href={`/admin/collections/${collection.slug}`}>
                    <span>{collection.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}
