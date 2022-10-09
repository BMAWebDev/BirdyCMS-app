import { ReactElement } from 'react';
import Header from './Header';

export default function Layout({ user, collections, children }): ReactElement {
  return (
    <div className='content'>
      <Header user={user} collections={collections} />
      {children}
    </div>
  );
}
