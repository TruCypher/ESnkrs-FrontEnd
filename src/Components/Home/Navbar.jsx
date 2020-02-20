import React, { Component } from 'react';
import './Navbar.css';

import logo from './../../Logos/esnkrsLogo.svg';
import menu from './../../Logos/menu.svg';

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popupMenu: false
        };
    }

    showmore() {
        console.log(this.state.popupMenu);
        if(!this.state.popupMenu) {
            this.setState({
                popupMenu: true
            });
        } else {
            this.setState({
                popupMenu: false
            });
        }
    }

    componentDidUpdate () {
        let welcome = document.querySelector(".Welcome");
        let sideMenu = document.querySelector(".sideMenu");

        if(this.state.popupMenu) {
            welcome.style.opacity = 0;
            sideMenu.style.width = "100%";
        } else {
            welcome.style.opacity = 1;
            sideMenu.style.width = "0%";
        }
    }

    render() {
        return (
            <>
                <div className ="flex-nav d-flex bd-highlight">
                    <div className="left-nav d-flex mr-auto">
                        <img className="esnkrslogo" src= {logo} alt="Esnrks Logo"/>
                        <h1 id="bot-name">ESnkrs</h1>
                    </div>
                    <div className="menu d-flex ml-auto" onClick={this.showmore.bind(this)}>
                        <img src={menu} alt="Menu"/>
                    </div>
                    <div className="right-nav d-flex ml-auto">
                        <p className="align-self-center">Home</p>
                        <p className="align-self-center">Feature</p>
                        <p className="align-self-center">FAQ</p>
                        <p className="align-self-center">Contact</p>
                    </div>
                </div>
                <div className="sideMenu">
                    <a className=""> &nbsp;Home</a>
                    <a className=""> &nbsp;Feature</a>
                    <a className=""> &nbsp;FAQ</a>
                    <a className=""> &nbsp;Contact</a>
                </div>
            </>
        );
    }
}