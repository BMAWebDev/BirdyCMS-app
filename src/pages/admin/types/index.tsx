import { ReactElement } from 'react';

export default function Types(): ReactElement {
  return <div>types</div>;
}

// route guard
import { handleAuth } from 'src/auth';
export const getServerSideProps = async (context) => {
  return await handleAuth(context, true);
};
