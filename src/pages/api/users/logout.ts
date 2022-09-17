// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { deleteCookie } from 'cookies-next';

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  deleteCookie('jwt_token', { req, res });

  return res.status(200).json({ message: 'Logout successful' });
};

export default logout;
