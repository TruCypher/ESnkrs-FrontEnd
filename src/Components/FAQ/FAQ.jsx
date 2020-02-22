import React, { Component } from 'react';

import './FAQ.css';
import bar from './../../Logos/bar.svg';
import Bound from 'bounds.js';

export default class FAQ extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const bound = Bound({
            marigins: 10
        });

        let faqText = document.querySelector(".FAQWrap");
        let cost = document.querySelector(".cost");
        let compat = document.querySelector(".compatible");
        let contact = document.querySelector(".contactAd");

        bound.watch(faqText, () => {
            faqText.classList.add("afteranimation");
            faqText.classList.add("leftIn");
            bound.unWatch(faqText);
        });
        bound.watch(cost, () => {
            cost.classList.add("afteranimation");
            cost.classList.add("appear1");
            bound.unWatch(cost);
        });
        bound.watch(compat, () => {
            compat.classList.add("afteranimation");
            compat.classList.add("appear2");
            bound.unWatch(compat);
        });
        bound.watch(contact, () => {
            contact.classList.add("afteranimation");
            contact.classList.add("appear3");
            bound.unWatch(contact);
        });
    }

    render() {
        return (
            <div className="FAQ" id="FAQ">
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