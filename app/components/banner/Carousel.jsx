"use client"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const CarouselComponent = ({children}) => {
        return (
            <Carousel
            swipeable={true}
            swipeScrollTolerance={5}
            showThumbs={false} 
            >
                {children}
            </Carousel>
        );
        }
