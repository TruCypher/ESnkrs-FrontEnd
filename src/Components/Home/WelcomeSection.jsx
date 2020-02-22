import React, { Component } from 'react';
import './WelcomeSection.css';

import tickmark from './../../Logos/tickmark.svg';
import showmore from './../../Logos/showmore.svg';

export default class WelcomeSection extends Component {

    componentDidMount() {
        let seemore = document.querySelector(".Welcome-footer");
        seemore.addEventListener("click", () => {
            document.querySelector("#Feature").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    render() {
        return (
            <div className="Welcome"> 
                <h1 className="Welcome-text d-flex justify-content-center align-items-center text-white"> 
                    <img className="tick img-fluid" src={tickmark} alt="tick"/> 
                        <span> It&apos;s your friendly bot ESnkrs </span>     
                    <img className="tick img-fluid" src={tickmark} alt="tick"/> 
                </h1>
                <div className="Welcome-button d-flex justify-content-center align-items-center">
                    <button className="stockStatus btn"> Sold Out</button>
                </div>
                <div className="Welcome-footer d-flex justify-content-center">
                    <h5>See More</h5>
                    <img className="showmore img-fluid" src={showmore} alt=""/>
                </div>
            </div>
        );
    }
}