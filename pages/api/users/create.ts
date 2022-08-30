// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function create(req: NextApiRequest, res: NextApiResponse) {
  console.log("test from server: ", req);
  res.status(200).json({ name: "John Doe created" });
}
