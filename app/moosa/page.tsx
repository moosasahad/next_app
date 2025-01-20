import React from 'react'
import Link from 'next/link'
import Product from './Product'

const HI = () => {
  return (
    <div>
     hallow moosa
     <Link href={"/"} className=' bg-green-400 p-3 m-4'>
    go back to home
    <Product/>
     </Link>
<Product/>
    </div>
  )
}

export default HI
