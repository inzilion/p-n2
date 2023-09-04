export default function New() {
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