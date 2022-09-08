import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { usersExist } from 'src/auth';

const useUsersExist = (): void => {
  const router = useRouter();
  const [usersExistResult, setUsersExistResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (router.pathname != '/register') {
      usersExist().then((res) => {
        setUsersExistResult(res);
        setLoading(false);
      });
    }
  }, []);

  if (router.pathname != '/register' && !usersExistResult && !loading) {
    router.push('/register');
    return null;
  }
};

export default useUsersExist;
