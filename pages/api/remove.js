import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
  if(req.method!=="DELETE")
    return res.status(400).json("너 뭐할라고?");

  const db = await client.db('sports');
  const result = await db.collection('soccer').deleteOne({"_id": new ObjectId(JSON.parse(req.body).id)})

  if(result.deletedCount > 0)
    return res.status(200).json({"msg": "success"});
  else 
    return res.status(500).json({"msg": "fail"});
}