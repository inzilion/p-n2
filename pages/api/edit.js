import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if(req.method==='GET')
    return res.status(404).json('그런거 없다.');
  if(req.body.name==='Ronaldo')  
    return res.status(200).json('나는 날도가 싫어요');
  // 위에서 허용하지 않는 데이터를 다 걸러내요
  
  const db = await client.db('sports');
  const result = await db.collection('soccer').updateOne(
    {"_id": new ObjectId(req.body._id)},
    {$set: { 
      "name": req.body.name,
      "num": req.body.num,
      "team": req.body.team
    }});

  if(result.acknowledged)
    res.redirect(302, '/msg/300');
  else
    res.redirect(302, '/msg/400');
}