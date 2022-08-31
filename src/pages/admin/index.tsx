import type { NextPage } from "next";

import { useEffect, useState } from "react";
import axios from "src/lib/axios";

const Dashboard: NextPage = () => {
  const [usersNumber, setUsersNumber] = useState<number>(0);

  useEffect(() => {
    axios.get("users/readMany").then((res: any) => {
      if (res.users?.length) setUsersNumber(res.users.length);
    });
  }, []);

  return (
    <div>
      <h1>dashboard salut! Number of registered users: {usersNumber}</h1>
    </div>
  );
};

export default Dashboard;
