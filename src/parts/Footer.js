import React from 'react';
import Button from './../elements/Button';
import IconText from './IconText';

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <IconText/>
                        <p className="brand-tagline">
                        We QueTech your beauty holiday instantly and memorable
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            <Button type="link" href="/register">New Account</Button></li>
                            <li className="list-group-item">
                            <Button type="link" href="/properties">Start Book a Room</Button></li>
                            <li className="list-group-item">
                            <Button type="link" href="/use-payments">Use Payments</Button></li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            <Button type="link" href="/about">About</Button></li>
                            <li className="list-group-item">
                            <Button type="link" href="/privacy">Privacy Policy</Button></li>
                            <li className="list-group-item">
                            <Button type="link" href="/terms">Terms & Conditions</Button></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            <Button isExternal type="link" href="mailto:ipankthedoors@gmail.com">
                                ipankthedoors@gmail.com
                            </Button></li>
                            <li className="list-group-item">
                            <Button isExternal type="link" href="tel:+6282111148073">
                                082111148073
                            </Button></li>
                            <li className="list-group-item">
                            <span>Staycation,id, Jakarta</span></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                    Copyright 2020  All rights reserved Stayation
                    </div>
                </div>
            </div>
        </footer>
    );
}