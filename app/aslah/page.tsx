import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      page aslah
      <Link href={"/"} className=' bg-green-400 p-3 m-4'>
    go back to home
     </Link>
    </div>
  )
}

export default page