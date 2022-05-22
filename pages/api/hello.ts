// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { PrismaClient, Prisma } from '@prisma/client'
//
// const prisma = new PrismaClient()
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader('content-type', 'application/json; charset=utf-8');
  // const user = await prisma.user.create({
  //   data: {
  //     email: 'huang@prisma.io',
  //     name: 'Elsa Prisma',
  //   },
  // })
  console.log(2);
  // console.log(user);

  res.status(200).json({ name: 'John Doe' })
}
