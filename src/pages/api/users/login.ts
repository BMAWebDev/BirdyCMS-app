// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';
import knex from 'src/db';
import { UserType } from 'src/types';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Missing required params' });
  }

  const user: UserType = await knex('users').first().where({ username });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const passwordsMatch: boolean = await bcrypt.compare(password, user.password);
  if (!passwordsMatch) {
    return res.status(400).json({ message: 'Incorrect password' });
  }

  const token: string = jwt.sign(
    {
      id: user.id,
      username,
    },
    process.env.JWT_SECRET
  );

  const oneDay = 24 * 3600 * 1000;
  setCookie('jwt_token', token, { req, res, maxAge: oneDay });

  return res.status(200).json({ token, message: 'Authentication successful' });
};

export default login;
