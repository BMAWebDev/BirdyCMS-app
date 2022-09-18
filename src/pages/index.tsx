import { ReactElement } from 'react';
import Link from 'next/link';
import { Layout } from 'src/components';
import { PageProps } from 'src/types';

export default function Home({ user }: PageProps): ReactElement {
  return (
    <Layout user={user}>
      <div>
        <h1>Homepage</h1>
        {(user?.role == 'admin' || user?.role == 'superadmin') && (
          <p>
            Go to <Link href={'/admin'}>admin panel</Link>
          </p>
        )}
      </div>
    </Layout>
  );
}

// route guard
import { handleAuth } from 'src/auth';
export const getServerSideProps = async (context) => {
  return await handleAuth(context);
};
