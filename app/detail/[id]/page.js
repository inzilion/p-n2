import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = await client.db('sports');
  const item = await db.collection('soccer').findOne({"_id": new ObjectId(props.params.id)});
  return(
    <div>
      <h2>Detail</h2>
      <div className="detail">
        <div className="detail-item">
          Name : {item.name}
        </div>
        <div className="detail-item">
          NUM : {item.num}
        </div>
        <div className="detail-item">
          Team : {item.team}
        </div>
      </div>
    </div>
  )
}