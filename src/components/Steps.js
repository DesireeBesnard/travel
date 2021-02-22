import React from 'react';
import "../App.css";
import "./Steps.css";

export const Steps = ({
    stepNumber, stepSubTitle, stepText, stepIcon
}) => {

    return (
        <div className="step">
            <div>
                <p className="step-number">{stepNumber}</p>
            </div>
            
            <div>
                <i className={stepIcon}></i>
            </div>
            <div>   
                <h3>{stepSubTitle}</h3>
                <p>{stepText}</p>
            </div>
        </div>
    )
}

export default Steps
