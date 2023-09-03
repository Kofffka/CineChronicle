import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div>
      <ul className={`flex`}>
        <li className={`mr-6`}>
          <Link href={"/policy"}>
            <span className={`text-sm-info`}>
              Privacy policy
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/terms"}>
            <span className={`text-sm-info`}>
              Terms of service
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Links