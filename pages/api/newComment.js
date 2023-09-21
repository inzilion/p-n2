import client from "@/util/database";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const comment = JSON.parse(req.body);
  comment.author = session.user.email;
  console.log(comment);
  const db = await client.db('sports');
  const result = await db.collection('comments').insertOne(comment)
  
  return res.status(200).json(result.acknowledged)
}