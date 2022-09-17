import { ReactElement } from 'react';
import Link from 'next/link';
import { Header } from 'src/components';

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <div>
        <h1>Homepage</h1>
        <p>
          Go to <Link href={'/admin'}>admin panel</Link>
        </p>
      </div>
    </>
  );
}

// route guard
import { verifyAdmin } from 'src/auth';
export const getServerSideProps = async (context) => {
  return await verifyAdmin(context);
};
