import prisma from "@/libs/prisma";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const services = await prisma.service.findMany({ include: { category: true } });
    return res.status(200).json(services);
  }

  if (req.method === 'POST') {
    const { name, description, serviceCategoryId } = req.body;
    const service = await prisma.service.create({
      data: { name, description, serviceCategoryId },
    });
    return res.status(201).json(service);
  }

  res.status(405).end();
}
