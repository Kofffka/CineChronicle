import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <section className={`relative py-36 h-screen`}>
            {children}
        </section>
    )
}

export default Wrapper