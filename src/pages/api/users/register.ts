// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import knex from 'src/db';
import { UserRegistrationConfig } from 'src/components/Register/types';

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, email, password, confirmPassword, role } = req.body;

  if (!username || !email || !password || !confirmPassword || !role) {
    return res.status(400).json({ message: 'Missing required params' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords don't match" });
  }

  const passwordHash: string = bcrypt.hashSync(password, 12);
  try {
    const userConfig: UserRegistrationConfig = {
      username,
      password: passwordHash,
      email_address: email,
    };
    if (role) userConfig.role = role;

    await knex('users').insert(userConfig);

    return res.status(200).json({ message: 'Registration successful' });
  } catch (err) {
    return res.status(500).json({
      message:
        'An error has occured while trying to process your registration. Please try again later',
    });
  }
};

export default register;
