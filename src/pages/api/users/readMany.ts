// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import knex from "src/db";

const readMany = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await knex("users");

  if (!users)
    res.status(500).json({
      message: "An error occured while trying to proccess your request",
    });

  if (!users.length) res.status(404).json({ message: "No users found" });

  res.status(200).json({ users });
};

export default readMany;
