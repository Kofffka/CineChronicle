"use client"
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Test() {
    const [data,setData] = useState(null)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then (res_data => setData(res_data))
    },[])

    return (
            <>
                {
                    !data
                    ? null
                    : 
                    <div>
                        {data.map((element, index)=> {
                            return (
                                <div key={index}>{element.title}</div>
                            )
                        })}
                    </div>
                }
            </>
        );
}
