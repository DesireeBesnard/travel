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

        const { values, inputChange } = this.props;

        return (
            <div>
                <h2>Mes coordonnées</h2>
                <p>Les informations que nous demandons ci-dessous nous permettent de mieux appréhender vos souhaits de voyage; nous les approfondirons ensemble par téléphone ou lors d'un rendez-vous en agence.</p>
                <div className="radio-input" id="radioBy3">
                    <input type="radio" id="mademoiselle" name="civility" value="Mlle"/>
                    <label htmlFor="mademoiselle">Mlle</label>
                    <input type="radio" id="madame" name="civility" value="Mme"/>
                    <label htmlFor="madame">Mme</label>
                    <input type="radio" id="monsieur" name="civility" value="M."/>
                    <label htmlFor="monsieur">M.</label>
                </div>
                <div className="contactDetails">
                    <div className="contactDetailsContainer">
                        <div className="leftContact">
                            <label>*</label>
                            <input type="text" id="name" name="name" placeholder="Nom" onChange={inputChange("name")} value={values.name}/>
                            <label>*</label>
                            <input type="text" id="email" name="email" placeholder="Adresse e-mail" onChange={inputChange("email")} value={values.email}/>
                            <label>*</label>
                            <input type="text" id="postalCode" name="postalCode" placeholder="Code Postal" onChange={inputChange("postalCode")} value={values.postalCode}/>
                        </div>
                        <div className="RightContact">
                            <label>*</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Prénom" onChange={inputChange("firstNametelephone")} value={values.firstNametelephone}/>
                            <label>*</label>
                            <input type="text" id="telephone" name="telephone" placeholder="(ex: +33698172788)" onChange={inputChange("telephone")} value={values.telephone}/>
                            <label>*</label>
                            <input type="text" id="country" name="country" placeholder="Pays de résidence" onChange={inputChange("country")} value={values.country}/>
                        </div>
                    </div>
                    <input type="textarea" id="moreInformations" name="moreInformations" placeholder="Merci de nous donner quelques précisions susr le voyage souhaité" onChange={inputChange("moreInformations")} value={values.moreInformations}/>

                </div>             
                <div>
                    <Button buttonStyle="btn--appointment" buttonSize="btn--large" children="précedent" onClick={this.precedent}/>
                    <input type="submit" value="SUBMIT"></input> 

                </div>
            </div>  
        ) 
    }
}

export default StepVoyageurs
