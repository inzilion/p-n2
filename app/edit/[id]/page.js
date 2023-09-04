import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = await client.db('sports');
  const result = await db.collection('soccer').findOne({"_id": new ObjectId(props.params.id)});
  return(
    <div>
      <h2>Edit</h2>
      <form action="/api/edit" method="post">
        <div className="detail">
          <div className="detail-item">
            Name : <input type="text" name="name" defaultValue={result.name}></input>
          </div>
          <div className="detail-item">
            NUM : <input type="text" name="num" defaultValue={result.num}></input>
          </div>
          <div className="detail-item">
            Team : <input type="text" name="team" defaultValue={result.team}></input>
          </div>
          <div className="detail-item">
            <input type="hidden" name="_id" value={props.params.id}></input>
          </div>
        </div>
        <button style={{margin:"10px", padding:"5px"}} type="submit">Edit</button>
      </form>
    </div>
  )
}