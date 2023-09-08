'use client'
import Link from "next/link"
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
}