import Image from "next/image";

import Link from "next/link";
export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
      <h1>hallow Team</h1>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s" alt="" />
<Link href={"/component"} className=' bg-green-400 p-3'>
component 
</Link>
<Link href={"/product"} className=' bg-green-400 p-3'>
product
</Link>
<Link href={"/rinsha"} className=' bg-green-400 p-3'>
rinsha
</Link>
<Link href={"/aslah"} className=' bg-green-400 p-3'>
aslah
</Link>
<Link href={"/moosa"} className=' bg-green-400 p-3'>
moosa
</Link>
      </div>
    </div>
  );
}
