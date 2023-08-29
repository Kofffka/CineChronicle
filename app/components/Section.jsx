import React from 'react'

const Section = ({children, modify=true}) => {
  return (
    <section className={`${modify ? "px-8" : null}  ${"border-[1px] border-solid border-white"}`}>
        {children} 
    </section>
  )
}

export default Section