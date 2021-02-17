import React from 'react';
import "../App.css";
import "./Steps.css";

let stepText1;
let stepText2;
let stepText3;
let stepText4;

const STEPTEXT = [
    stepText1 = "Grâce à un questionnaire approfondi, nous apprendrons à mieux vous connaître. Nous pourrons ainsi concevoir le voyage français parfait, fait pour vous.", 
    stepText2 = "Nous adapterons votre itinéraire en fonction de vos commentaires, jusqu'à ce qu'il vous satisfasse. Chaque partie du voyage peut être personnalisée.", 
    stepText3 = "Nous vous ferons parvenir différentes suggestions, devis et itinéraires en fonction de vos intérêts et de vos attentes.", 
    stepText4 = "Nous sommes prêts à vous envoyer votre road-book pour un voyage sans encombre et nous avons hâte de vous accueillir en France."];

export const Steps = ({
    stepNumber, stepSubTitle, stepText
}) => {

    const checkStepText = STEPTEXT.includes(stepText) ? stepText.value : STEPTEXT[0];

    return (
        <div className="step">
            <div>
                <p className="step-number">{stepNumber}</p>
            </div>
            <div>
                <h3>{stepSubTitle}</h3>
                <p>{checkStepText}</p>
            </div>

        </div>
    )
}

export default Steps
