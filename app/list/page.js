import client from "@/util/database"
import ListItem from "./listItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function List() {
  const session = await getServerSession(authOptions)
  const db = await client.db('sports');
  const list = await db.collection('soccer').find().toArray();
  return(
    <div>
      <h2>LIST</h2>
      <div className="list-bg">
        {
          list.map(item => <ListItem 
            id={item._id.toString()} 
            name={item.name}
            authorEmail = {item.author?.email}
            sessionEmail = {session.user.email}
          />)
        }
      </div>
    </div>
  )
}