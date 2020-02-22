import React, { Component } from 'react';
import './FeatureWrapper.css';
import Bound from 'bounds.js';
/* 
* import svg
* he he
*/
import bar from './../../Logos/bar.svg';
import raffle from './../../Logos/raffle.svg';
import thread from './../../Logos/thread.svg';
import g from './../../Logos/g.svg';
import cookies from './../../Logos/cookies.svg';
import spoof from './../../Logos/spoof.svg';

export default class FeatureWrapper extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const bound = Bound({
            margins: {
                bottom: 10
            }
        });

        let first = document.querySelector(".first-order");
        let second = document.querySelector(".second-order");
        let third = document.querySelector(".third-order");

        bound.watch(first, ()=> {
            first.classList.add("afteranimation");
            first.classList.add("appear1");
            bound.unWatch(first);
        });
        bound.watch(second, ()=> {
            second.classList.add("afteranimation");
            second.classList.add("appear2");
            bound.unWatch(second);
        });
        bound.watch(third, ()=> {
            third.classList.add("afteranimation");
            third.classList.add("appear3");
            bound.unWatch(third);
        });

    }

    render() {
        return (
            <div id="Feature">
                <div className="PageHeader d-flex justify-content-center align-items-center text-white">
                    <img src={bar} alt=""/> <h1>FEATURE</h1> <img src={bar} alt=""/>
                </div>
                <div className="Feature">
                    <div className="first-order">
                        <div className="raffle bigBox">
                            <h1 className="raffle-text text-white">Raffle Bot</h1>
                            <img className="img-fluid" src={raffle} alt="raffle"/>
                        </div>    
                    </div>  
                    <div className="second-order">
                        <div className="thread normalBox">
                            <h1 className="thread-text text-white">Multi-Threading</h1>
                            <div className="iconsvg">
                                <img src={thread} alt="thread"/>
                            </div>
                        </div>
                        <div className="gmail-filter normalBox">
                            <h1 className="gfilter-text text-white">Gmail-Filter</h1>
                            <div className="iconsvg">
                                <img src={g} alt="google"/>
                            </div>
                        </div>
                    </div>

                    <div className="third-order">
                        <div className="gmail-forward normalBox">
                            <h1 className="gforward-text text-white">Gmail-Forward</h1>
                            <div className="iconsvg">
                                <img src={g} alt="google"/>
                            </div>
                        </div>
                        <div className="cookies normalBox">
                            <h1 className="cookies-text text-white">Gen-Cookies</h1>
                            <div className="iconsvg">
                                <img src={cookies} alt="cookies"/>
                            </div>
                        </div>
                        <div className="spoof normalBox">
                            <h1 className="spoof-text text-white">Spoof-Browser</h1>
                            <div className="iconsvg">
                                <img src={spoof} alt="spoof"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}