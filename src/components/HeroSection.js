import React from 'react';
import {Button} from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-3.mp4" autoPlay loop muted/>
            <h1>L'AVENTURE VOUS ATTEND</h1>
            <p>Qu'attendez-vous?</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize="btn--large"
                >
                    NOS SERVICES
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize="btn--large"
                >
                    VOIR LE TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
