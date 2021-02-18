import React from 'react';
import "../App.css";
import "./Steps.css";

export const Steps = ({
    stepNumber, stepSubTitle, stepText
}) => {

    return (
        <div className="step">
            <div>
                <p className="step-number">{stepNumber}</p>
            </div>
            
            <div>
                
                <h3>{stepSubTitle}</h3>
                <p>{stepText}</p>
            </div>

        </div>
    )
}

export default Steps
