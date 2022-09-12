import { usersExist } from 'src/auth';
import { GetServerSideProps } from 'next';

const verifyAdmin: GetServerSideProps = async (context) => {
  const usersExistRes = await usersExist();

  if (!usersExistRes)
    return {
      redirect: {
        permanent: false,
        destination: '/register',
      },
      props: {},
    };

  return {
    props: {},
  };
};

export default verifyAdmin;
