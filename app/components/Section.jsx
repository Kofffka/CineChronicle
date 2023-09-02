import React from 'react'

const Section = ({children, modify=true, position=false, redTest=false, ...props}) => {
  return (
    <section className={`${modify ? "px-9" : null} ${redTest ? "border-2   border-solid border-red-600" : null} relative ${position ? "w-screen h-[40em] min-h-screen" : null}   ${props.style}`}>
        {children} 
    </section>
  )
}

export default Section



// ${border-2   border-solid border-cyan-600}
