import "../styles/globals.css";

import { ReactElement } from "react";

// auth
import { checkAuth } from "src/auth";

function MyApp({ Component, pageProps }): ReactElement {
  return <Component isAuthenticated={checkAuth() as boolean} {...pageProps} />;
}

export default MyApp;
