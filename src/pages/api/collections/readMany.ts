// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import knex from 'src/db';

const readMany = async (req: NextApiRequest, res: NextApiResponse) => {
  const collections = await knex('collections');

  if (!collections)
    res.status(500).json({
      message: 'An error occured while trying to proccess your request',
    });

  if (!collections.length)
    res.status(404).json({ message: 'No collections found' });
  else res.status(200).json({ collections });
};

export default readMany;
