import { ReactElement } from 'react';
import { Layout } from 'src/components/Admin';
import { AdminProps } from 'src/components/Admin/types';

import { Table } from 'src/components/Admin/Collections';

export default function Collections({
  user,
  collections,
}: AdminProps): ReactElement {
  return (
    <Layout user={user} collections={collections}>
      <Table list={collections} />
    </Layout>
  );
}

// route guard
import { GetServerSideProps } from 'next';
import { handleAdmin } from 'src/components/Admin/functions';
export const getServerSideProps: GetServerSideProps = async (context) => {
  return await handleAdmin(context);
};
