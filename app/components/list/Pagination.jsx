"use client"
import React from 'react'

const Pagination = () => {
    const [prev, setPrev] = useState(1)

    
    const hadnleChangePrev = () => {
        prev === 1 ? null : setPrev(prev - 1) 
    }
    
    const hadnleChangeNext = () => {
        setPrev(prev + 1)
        
    }
    

    return (
        <div>
            <button
            onClick={hadnleChangePrev}
            >
                <span>Prev State</span>
            </button>
            <button
            onClick={hadnleChangeNext}
            >
                <span>
                    Next State
                </span>
            </button>
        </div>
    )
}

export default Pagination