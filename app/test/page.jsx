"use client"
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Test () {
        return (
            <Carousel>
                <div>
                    <p className="text-white">Legend 1</p>
                </div>
                <div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
        }
