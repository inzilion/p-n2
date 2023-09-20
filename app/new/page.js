import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
export default async function New() {
  const session = await getServerSession(authOptions)
  if(!session)
    return <h2>로그인 하시오</h2>
  
  return(
  <div>
    <h2>NEW</h2>
    <form action="/api/new" method="post">
      <div className="detail">
        <div className="detail-item">
          Name : <input type="text" name="name" ></input>
        </div>
        <div className="detail-item">
          NUM : <input type="text" name="num"></input>
        </div>
        <div className="detail-item">
          Team : <input type="text" name="team"></input>
        </div>
      </div>
      <button style={{margin:"10px", padding:"5px"}} type="submit">Registration</button>
    </form>
  </div>
  )
}