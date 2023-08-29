import Link from 'next/link'
import React from 'react'

const Action = () => {
  return (
    <div className={`[&>*]:mr-4  [&>*:last-child]:mr-0`}>
        <button className={`border rounded-md border-solid border-white py-3 px-4 bg-transparent`}>
            <span>
                <Link href={"/"}>
                    Sing Up
                </Link>
            </span>
        </button>
        <button className={`border rounded-md border-solid border-white py-3 px-4 bg-[#00925D]`}>
            <span>
            <Link href={"/"}>
                    Login
                </Link>
            </span>
        </button>
    </div>
  )
}

export default Action