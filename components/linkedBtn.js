import Link from "next/link"

export default function LinkedBtn({link, label, color}){
  return(
    <Link href={link}>
      <button style={{margin:"10px", padding:"5px", color: color}}>{label}</button>
    </Link>
  )
}