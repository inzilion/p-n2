import client from "@/util/database";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export default async function handler(req, res) {
  if(req.method==='GET')
    return res.status(404).json('그런거 없다.');
  if(req.body.name==='Ronaldo')  
    return res.status(200).json('나는 날도가 싫어요');
  // 위에서 허용하지 않는 데이터를 다 걸러내요
  
  const session = await getServerSession(req, res, authOptions);
  
  console.log(session);
  req.body.author = session.user;
  const db = await client.db('sports');
  const result = await db.collection('soccer').insertOne(req.body)
  
  if(result.acknowledged)
    res.redirect(302, '/msg/200');
  else
    res.redirect(302, '/msg/400');
}