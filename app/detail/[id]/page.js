import client from "@/util/database"
import { ObjectId } from "mongodb";
import Link from "next/link";

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
      <Link href={`/edit/${props.params.id}`}>
        <button style={{margin:"10px", padding:"5px"}} type="button">Edit</button>
      </Link>
      <Link href={`/api/remove?id=${props.params.id}`}>
        <button style={{margin:"10px", padding:"5px"}} type="button">DEL</button>
      </Link>
    </div>
  )
}