import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
  let id = '';
  if(req.query.id) id = req.query.id;
  else             id = JSON.parse(req.body).id;

  const db = await client.db('sports');
  const result = await db.collection('soccer').deleteOne({"_id": new ObjectId(id)})
  
  let msg =''
  if(result.deletedCount > 0) msg = "OK"
  else                        msg = "ERROR"

  if(req.method === 'GET')   
    res.redirect(302,'/msg/201');
  else
    return res.status(200).json(msg);
  
}