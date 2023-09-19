import client from "@/util/database"
import Link from "next/link";
import ListItem from "./listItem";

export default async function List() {
  const db = await client.db('sports');
  const list = await db.collection('soccer').find().toArray();
  return(
    <div>
      <h2>LIST</h2>
      <div className="list-bg">
        {
          list.map(item=><ListItem id={item._id.toString()} name={item.name}/>)
        }
      </div>
    </div>
  )
}