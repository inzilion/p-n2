import client from "@/util/database"
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> be4ae1a7911c0ba786bec7d86be1f2dd2dbb4ecb
import ListItem from "./listItem";

export default async function List() {
  const db = await client.db('sports');
  const list = await db.collection('soccer').find().toArray();
  return(
    <div>
      <h2>LIST</h2>
<<<<<<< HEAD
      <div className="list-bg">
        {
          list.map(item=><ListItem id={item._id.toString()} name={item.name}/>)
        }
      </div>
=======
      <ListItem list={list}/>
>>>>>>> be4ae1a7911c0ba786bec7d86be1f2dd2dbb4ecb
    </div>
  )
}