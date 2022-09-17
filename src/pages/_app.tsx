// global styles
import '../styles/globals.scss';
import '../styles/components.scss';

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

import { ReactElement } from 'react';

function MyApp({ Component, pageProps }): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
