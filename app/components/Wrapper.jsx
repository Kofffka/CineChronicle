import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <section className={`py-36`}>
            {children}
        </section>
    )
}

export default Wrapper