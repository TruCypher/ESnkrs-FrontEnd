import React, { Component } from 'react';
import './HomePage.css';

import Navbar from './Navbar';
import WelcomeSection from './WelcomeSection';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soldOut: true,
        };
    }

    render() {
        return (
            <div className = "container-fluid background">
                <Navbar />
                <WelcomeSection />
            </div>
        );
    }
}