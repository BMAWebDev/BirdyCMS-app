import type { NextPage } from "next";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "src/lib/axios";

import { useStore } from "src/store";

const Dashboard: NextPage = () => {
  const [usersNumber, setUsersNumber] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // if (!checkAuth()) router.push("/login");

    axios.get("users/readMany").then((res: any) => {
      if (res.users?.length) setUsersNumber(res.users.length);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <h1>dashboard salut! Number of registered users: {usersNumber}</h1>
      )}
    </div>
  );
};

export default Dashboard;
