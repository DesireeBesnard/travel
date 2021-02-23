import React, { Component } from 'react';
import Button from "../Button.js";

export class StepVoyage extends Component {

    suivant = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const { values, inputChange } = this.props;

        return (
            <div>
                <h2>Votre voyage</h2>
                <p>Les informations que nous demandons ci-dessous nous permettent de mieux appréhender vos souhaits de voyage; nous les approfondirons ensemble par téléphone ou lors d'un rendez-vous en agence.</p>
                                
                <div className="select-input">
                    <select name="destination" id="destination-select" onChange={inputChange('destination')} value={values.destination}>
                        <option value="">--Choisir une destination--</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                        <option value="Italie">Italie</option>
                        <option value="Maroc">Maroc</option>
                        <option value="Chine">Chine</option>
                        <option value="Pérou">Pérou</option>
                    </select>
                    <select name="period" id="period-select" onChange={inputChange('period')} value={values.period}>
                        <option value="">--Choisir une période--</option>
                        <option value="unknownPeriod">Je ne sais pas encore</option>
                        <option value="Janvier">Janvier</option>
                        <option value="Février">Février</option>
                        <option value="Mars">Mars</option>
                        <option value="Avril">Avril</option>
                        <option value="Mai">Mai</option>
                        <option value="Juin">Juin</option>
                        <option value="Juillet">Juillet</option>
                        <option value="Août">Août</option>
                        <option value="Septembre">Septembre</option>
                        <option value="Octobre">Octobre</option>
                        <option value="Novembre">Novembre</option>
                        <option value="Décembre">Décembre</option>
                    </select>
                    <select name="duration" id="destination-select" onChange={inputChange('duration')} value={values.duration}>
                        <option value="">--Choisir une durée--</option>
                        <option value="week">Une semaine</option>
                        <option value="oneOrTwoWeek">Une à deux semaines</option>
                        <option value="twoWeeks">Deux semaiens</option>
                        <option value="twoToThree">Deux à trois semaines</option>
                        <option value="threeWeeks">Trois semaines</option>
                        <option value="moreThanThree">Plus de trois semaines</option>
                    </select>
                </div>
                <div>
                    <Button buttonStyle="btn--appointment" buttonSize="btn--large" children="suivant" onClick={this.suivant}/>
                </div>
            </div>  
        )  
    }
}

export default StepVoyage
