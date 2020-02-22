import React, { Component } from 'react';

import HomePage from './Components/Home/HomePage.jsx';
import Feature from './Components/Feature/FeatureWrapper.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';
import Contact from './Components/Contact/Contact.jsx';

export default class app extends Component {

    componentDidMount() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    render() {
        return (
            <div className="">
                <HomePage />
                <Feature />
                <FAQ />
                <Contact />
            </div>
        );
    }
}