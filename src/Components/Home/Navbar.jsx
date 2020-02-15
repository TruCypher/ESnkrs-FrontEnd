import React, { Component } from 'react';
import './Navbar.css';

import logo from './../../Logos/esnkrsLogo.svg';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className ="flex-nav d-flex bd-highlight">
                <div className="left-nav d-flex mr-auto">
                    <img className="esnkrslogo" src= {logo} alt="Esnrks Logo"/>
                    <h1 id="bot-name">ESnkrs</h1>
                </div>
                <div className="right-nav d-flex ml-auto">
                    <p className="align-self-center">Home</p>
                    <p className="align-self-center">Feature</p>
                    <p className="align-self-center">Success</p>
                    <p className="align-self-center">FAQ</p>
                </div>
            </div>
        );
    }
}