import { ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ user = null, children }): ReactElement {
  return (
    <div className='content'>
      <Header user={user} />
      {children}
      <Footer />
    </div>
  );
}
