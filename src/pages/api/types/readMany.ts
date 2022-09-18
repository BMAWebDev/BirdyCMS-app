// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import knex from 'src/db';

const readMany = async (req: NextApiRequest, res: NextApiResponse) => {
  const types = await knex('types');

  if (!types)
    res.status(500).json({
      message: 'An error occured while trying to proccess your request',
    });

  if (!types.length) res.status(404).json({ message: 'No types found' });
  else res.status(200).json({ types });
};

export default readMany;
