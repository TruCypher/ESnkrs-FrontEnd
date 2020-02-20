import React, { Component } from 'react';

import HomePage from './Components/Home/HomePage.jsx';
import Feature from './Components/Feature/FeatureWrapper.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';
import Contact from './Components/Contact/Contact.jsx';

export default class app extends Component {

    render() {
        return (
            <div className="">
                <HomePage />
                <br/>
                <Feature />
                <br/>
                <br/>
                <br/>
                <br/>
                <FAQ />
                <br/>
                <br/>
                <br/>
                <br/>
                <Contact />
            </div>
        );
    }
}