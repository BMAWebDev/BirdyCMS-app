import '../styles/globals.css';

import { ReactElement } from 'react';
import { useUsersExist } from 'src/auth';

function MyApp({ Component, pageProps }): ReactElement {
  useUsersExist();

  return <Component {...pageProps} />;
}

export default MyApp;
