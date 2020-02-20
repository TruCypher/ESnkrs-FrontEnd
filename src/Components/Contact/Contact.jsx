import React, { Component } from 'react';

import './Contact.css';
import bar from './../../Logos/bar.svg';
import first from './../../Logos/outer.svg';
import second from './../../Logos/secondCircle.svg';
import third from './../../Logos/thirdCircle.svg';
import fourth from './../../Logos/inner.svg';

export default class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="contact container">
                    <div className="PageHeader d-flex justify-content-center align-items-center text-white">
                        <img src={bar} alt=""/> <h1>CONTACT</h1> <img src={bar} alt=""/>
                    </div>

                    <div className="circle">
                        <img src={first} alt="" className=""/>
                        <img src={second} alt="" className=""/>
                        <img src={third} alt="" className=""/>
                        <img src={fourth} alt="" className=""/>
                        <span className="info">
                            <h5 id="ref" className="text-white"> discord.gg/GQyYhgR </h5>
                            <h5 id="ref" className="text-white"> https://twitter.com/ESnkrsBot</h5>
                        </span>
                    </div>
                </div>
                <div className="Footer">
                    <h6> &copy; CopyRight From ESnkrs </h6>
                </div>
            </>
        );
    }
}