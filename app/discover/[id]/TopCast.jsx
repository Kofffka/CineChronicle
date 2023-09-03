import React from 'react'
import User from "../../../public/user.png"
import Image from 'next/image'

const TopCast = ({ cast }) => {

  return (
    <div className={`mt-12`}>

      <div className={`mb-6`}>
        <span className={`text-xl`}>Top Cast</span>
      </div>
      <ul className={`flex h-full`}>
        {
          cast.map((element, index) => {
            return (
              <li 
              className={`flex  w-max mr-4`} 
              key={index} >
                <div className={`w-12 h-12 mr-3`}>
                  <Image 
                  className={`rounded-[50%] w-full h-full`} 
                  width={320} 
                  height={320} 
                  src={User} 
                  alt={"user image"} />
                </div>
                <div className={``}>
                  <p className={`text-white text-base`}>{element}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TopCast