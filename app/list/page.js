import client from "@/util/database"
import ListItem from "./listItem";

export default async function List() {
  const db = await client.db('sports');
  const list = await db.collection('soccer').find().toArray();
  return(
    <div>
      <h2>LIST</h2>
      <ListItem list={list}/>
    </div>
  )
}