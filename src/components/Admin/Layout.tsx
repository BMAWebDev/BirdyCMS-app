import { ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ user, types, children }): ReactElement {
  return (
    <div className='content'>
      <Header user={user} types={types} />
      {children}
      <Footer />
    </div>
  );
}
