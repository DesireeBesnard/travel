import React, { Component } from 'react'
import Button from "../Button.js";

export class StepVoyageurs extends Component {

    precedent = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    suivant = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        return (
            <div>
                <h2>Les voyageurs</h2>
                <p>Les informations que nous demandons ci-dessous nous permettent de mieux appréhender vos souhaits de voyage; nous les approfondirons ensemble par téléphone ou lors d'un rendez-vous en agence.</p>
                <div className="radio-input" id="radioBy4">
                    <input type="radio" id="status-couple" name="travelerStatus" value="En couple"/>
                    <label htmlFor="status-couple">En couple</label>
                    <input type="radio" id="status-family" name="travelerStatus" value="En famille"/>
                    <label htmlFor="status-family">En famille</label>
                    <input type="radio" id="status-friends" name="travelerStatus" value="Entre amis"/>
                    <label htmlFor="status-friends">Entre amis</label>
                    <input type="radio" id="status-single" name="travelerStatus" value="Seul(e)"/>
                    <label htmlFor="status-single">Seul(e)</label>
                </div>
                <div className="radio-input" id="radioBy4">
                    <input type="radio" id="budget1" name="budget" value="< 4 000 €"/>
                    <label htmlFor="budget1">&lt; 4 000 €</label>
                    <input type="radio" id="budget2" name="budget" value="4 000 - 6 000 €"/>
                    <label htmlFor="budget2">4 000 - 6 000 €</label>
                    <input type="radio" id="budget3" name="budget" value="6 000 - 8 000 €"/>
                    <label htmlFor="budget3">6 000 - 8 000 €</label>
                    <input type="radio" id="budget4" name="budget" value="> 8 000 €"/>
                    <label htmlFor="budget4">&gt; 8 000 €</label>
                </div>                
                <div>
                    <Button buttonStyle="btn--appointment" buttonSize="btn--large" children="précedent" onClick={this.precedent}/>
                    <Button buttonStyle="btn--appointment" buttonSize="btn--large" children="suivant" onClick={this.suivant}/>

                </div>
            </div>  
        ) 
    }
}

export default StepVoyageurs
