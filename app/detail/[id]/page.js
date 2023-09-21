import LinkedBtn from "@/components/linkedBtn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import client from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Comment from "./comment";
import CommentsList from "./commentsList";

export default async function Detail(props) {
  const session = await getServerSession(authOptions);
  const db = await client.db('sports');
  const item = await db.collection('soccer').findOne({"_id": new ObjectId(props.params.id)});
  const comments = await db.collection('comments').find({"parent": item._id.toString()}).toArray()
  console.log(comments);
  return(
    <div>
      <h2>Detail</h2>
      <div className="detail">
        <div className="detail-item">
          작성자 : {item.author?.name ?? "알거없잖아"}
        </div>
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
      {
        session.user.email === item.author?.email
        ?
        <div>
          <LinkedBtn link={`/edit/${props.params.id}`} label="Edit" color='gray'/>
          <LinkedBtn link={`/api/remove?id=${props.params.id}`} label="DEL" color='gray'/>
        </div>
        :
        ""
      }
      <CommentsList list={comments}/>
      <Comment id={item._id.toString()}/>
    </div>
  )
}