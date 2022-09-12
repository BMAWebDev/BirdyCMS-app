import type { NextPage } from 'next';

import { ReactElement, useEffect, useState } from 'react';
import { useAuth } from 'src/auth';
import axios from 'src/lib/axios';

import { Loading } from 'src/components';

const Dashboard: NextPage = (): ReactElement => {
  const [usersNumber, setUsersNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useAuth();

  useEffect(() => {
    axios.get('users/readMany').then((res: any) => {
      if (res.users?.length) setUsersNumber(res.users.length);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h1>dashboard salut! Number of registered users: {usersNumber}</h1>
    </div>
  );
};

export default Dashboard;

// route guard
import { verifyAdmin } from 'src/auth';
export const getServerSideProps = async (context) => {
  return await verifyAdmin(context);
};
