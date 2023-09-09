import React from 'react'

const TopInfo = ({ original_language, status }) => {
  return (
    <>
      <ul className={`flex`}>
        <li className={` bg-black text-white rounded-lg px-2 py-1 mr-4`}>{status}</li>
        <li className={` bg-black text-white rounded-lg px-2 py-1 mr-4`}>{original_language}</li>
      </ul>
    </>
  )
}

export default TopInfo