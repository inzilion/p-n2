'use client'
import Link from "next/link"

export default function ListItem({id, name}){
  return(
    <div className="list-item">
      <Link href={`/detail/${id}`}>{name}</Link>
      <span><Link href={`/edit/${id}`}>⚡</Link></span>
      <span style={{cursor:"pointer"}} onClick={(e)=>{
        fetch(`/api/remove`,
        {
          "method": "POST",
          "body": JSON.stringify({"id": id})
        })
        .then(res=>res.json())
        .then(json=>{
          if(json == "OK")
            e.target.parentNode.style.display="none";
          else
            alert("오류발생");
        })
      }}>❌</span>
    </div>
  )    
}