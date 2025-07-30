import prisma from "@/libs/prisma";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const categories = await prisma.blogCategory.findMany();
    return res.status(200).json(categories);
  }

  if (req.method === 'POST') {
    const { name } = req.body;
    const category = await prisma.blogCategory.create({ data: { name } });
    return res.status(201).json(category);
  }

  res.status(405).end();
}
