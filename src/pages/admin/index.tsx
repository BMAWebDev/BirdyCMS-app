import type { NextPage } from 'next';

import { ReactElement } from 'react';
import { Layout } from 'src/components/Admin';
import { AdminProps } from 'src/components/Admin/types';

const Dashboard: NextPage = ({
  user,
  collections,
}: AdminProps): ReactElement => {
  return (
    <Layout user={user} collections={collections}>
      <div>
        <p>some master content here, the menu will be in the header</p>
      </div>
    </Layout>
  );
};

export default Dashboard;

// route guard
import { GetServerSideProps } from 'next';
import { handleAdmin } from 'src/components/Admin/functions';
export const getServerSideProps: GetServerSideProps = async (context) => {
  return await handleAdmin(context);
};
