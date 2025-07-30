import prisma from "@/libs/prisma";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const blogs = await prisma.blog.findMany({ include: { category: true } });
    return res.status(200).json(blogs);
  }

  if (req.method === 'POST') {
    const { title, content, blogCategoryId } = req.body;
    const blog = await prisma.blog.create({
      data: { title, content, blogCategoryId },
    });
    return res.status(201).json(blog);
  }

  res.status(405).end();
}
