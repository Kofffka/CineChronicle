"use client"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "../../globals.css"


export const CarouselComponent = ({ children }) => {
    return (
        <Carousel

            swipeScrollTolerance={5}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                return (
                        <li
                        className={ `rounded-[50%] w-2 h-2 mr-2 text-black ${isSelected ? "bg-grey" : "bg-sm-info"}`}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={4}
                        aria-label={`${label} ${index + 1}`}
                    >
                    </li>
                );
            }}
            // renderArrowNext={(clickHandler, hasNext) => {
            //     return (
            //         <div onClick={clickHandler}
            //             className={
            //                 `absolute top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`
            //             }
            //         >
            //             Next
            //         </div>
            //     )
            // }}
            // renderArrowPrev={(clickHandler, hasPrev) => {
            //     return (
            //         <div onClick={clickHandler}
            //             className={
            //                 `absolute top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`
            //             }
            //         >
            //             Prev
            //         </div>
            //     )
            // }}
        >
            {children}
        </Carousel>
    );
}
