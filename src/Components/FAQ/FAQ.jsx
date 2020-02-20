import React, { Component } from 'react';

import './FAQ.css';
import bar from './../../Logos/bar.svg';

export default class FAQ extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FAQ">
                <div className="PageHeader d-flex justify-content-center align-items-center text-white">
                    <img src={bar} alt=""/> <h1>FAQ</h1> <img src={bar} alt=""/>
                </div>

                <div className="FAQText">
                    <div className="FAQWrap">
                        <h1 className="text-white FAQT"> Here are some</h1> 
                        <h1 className="text-white FAQI"> FREQUESNTLY ASKED QUESTION</h1>
                        <h1 className="text-white FAQT"> from our user!</h1>
                    </div>
                </div> 

                <div className="FAQAnswer container-fluid">
                    <div className="FAQCover">
                        <div className="cost alert">
                            <h5 className="cost-text text-white">How Much Does ESnkrs Cost ?</h5>
                        </div>
                        <div className="compatible alert">
                            <h5 className="compatible-text text-white">Which Operating System ESnkrs Compatible With ?</h5>
                        </div>
                        <div className="contactAd alert">
                            <h5 className="contactAd-text text-white">What is the fastest way to contact Admin ?</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}