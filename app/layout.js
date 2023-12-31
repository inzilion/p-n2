import './globals.css'
import Link from 'next/link'
import LoginBtn from './loginBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <html>
      <body>
        <div className='navbar'>
          <div className='nav-item'><Link href='/'>PN2</Link></div>
          <div className='nav-item'><Link href='/list'>List</Link></div>
          <div className='nav-item'><Link href='/new'>New</Link></div>
          <LoginBtn session={session}/>
        </div>
          {children}
      </body>
    </html>
  )
}
