import React from 'react'
import Link from 'next/link'



const Navigation = () => {
  return (
    <nav>
      <ul className={`flex [&>*]:mr-7 [&>*]:text-grey [&>*:last-child]:mr-0`}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/discover"}>Discover</Link>
        </li>
        <li>
          <Link href={"/release"}>Movie release</Link>
        </li>
        <li>
          <Link href={"/forum"}>Forum</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation