import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      <h1>
        hallow 
      </h1>
      <Link href={"/"} className=' bg-green-400 p-3 m-4'>
    go back to home
     </Link>
    </div>
  )
}

export default Home
