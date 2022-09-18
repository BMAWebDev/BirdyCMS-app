// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import knex from 'src/db';

const readOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: 'Missing user ID' });
  }

  const user = await knex('users').first().where({ id });

  if (!user)
    return res.status(404).json({ message: 'No user found with given ID' });

  return res.status(200).json({ user });
};

export default readOne;
