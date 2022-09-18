import type { NextPage } from 'next';

import { ReactElement } from 'react';

const Dashboard: NextPage = (): ReactElement => {
  return (
    <>
      <div>
        <h1>dashboard salut! Number of registered users: </h1>
      </div>
    </>
  );
};

export default Dashboard;

// route guard
import { handleAuth } from 'src/auth';
export const getServerSideProps = async (context) => {
  return await handleAuth(context, true);
};
