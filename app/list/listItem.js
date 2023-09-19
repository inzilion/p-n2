'use client'
import Link from "next/link"
<<<<<<< HEAD

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
=======
export default function ListItem(props) {
  return(
    <div className="list-bg">
    {
      props.list.map(item=>{
        return(
          <div className="list-item" key={item._id}>
            <Link href={`/detail/${item._id}`}>{item.name}</Link>
            <span><Link href={`/edit/${item._id}`}>⚡</Link></span>
            <span style={{cursor:"pointer"}} 
                  onClick={(e)=>{
                    fetch('/api/remove',
                    {
                      method: 'DELETE',
                      body: JSON.stringify({"id": item._id})
                    })
                    .then(res=>res.json())
                    .then(json=>{
                      if(json.msg==='success'){
                        e.target.parentNode.style.opacity = 0;
                        setTimeout(()=>{
                          e.target.parentNode.style.display = "none";
                        },1000);
                      }
                    })
                  }}>❌</span>
          </div>
        )    
      })
    }
    </div>
  )
>>>>>>> be4ae1a7911c0ba786bec7d86be1f2dd2dbb4ecb
}