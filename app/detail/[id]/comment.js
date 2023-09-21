'use client'

import { useState } from "react"

export default function Comment({id}){
  const [comment, setComment] = useState('');
  
  const onChangeHandler = (e) => setComment(e.target.value);
  const onClickHandler = () => {
    fetch('/api/newComment', {
      "method": "POST",
      "body": JSON.stringify({"comment": comment, "parent": id})
    })
    .then(res=>res.json())
    .then(json=>{
      if(json){}
      else{}
    })
  };


  return(
    <>
      <input onChange={onChangeHandler} className="comment" type="text"></input>
      <button onClick={onClickHandler}>등록</button>
    </>
  )
}