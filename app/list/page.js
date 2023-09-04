import client from "@/util/database"
import Link from "next/link";

export default async function List() {
  const db = await client.db('sports');
  const list = await db.collection('soccer').find().toArray();
  console.log(list);
  return(
    <div>
      <h2>LIST</h2>
      <div className="list-bg">
        {
          list.map(item=>{
            return(
              <div className="list-item">
                <Link href={`/detail/${item._id}`}>{item.name}</Link>
              </div>
            )    
          })
        }
      </div>
    </div>
  )
}