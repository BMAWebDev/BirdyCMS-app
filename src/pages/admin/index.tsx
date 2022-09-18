import type { NextPage } from 'next';

import { ReactElement } from 'react';
import { Layout } from 'src/components/Admin';
import { AdminProps } from 'src/types';

const Dashboard: NextPage = ({ user, types }: AdminProps): ReactElement => {
  return (
    <Layout user={user} types={types}>
      <div>
        <p>some master content here, the menu will be in the header</p>
      </div>
    </Layout>
  );
};

export default Dashboard;

// route guard
import { handleAdmin } from 'src/components/Admin';
export const getServerSideProps = async (context) => {
  return await handleAdmin(context);
};
