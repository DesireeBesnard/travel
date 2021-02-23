import React, { Component }  from 'react';
import '../../App.css';
import "./ContactForm.css";
import StepVoyage from "./StepVoyage.js";
import StepVoyageurs from "./StepVoyageurs.js";
import StepCoordonnees from "./StepCoordonnees.js";

export class ContactForm extends Component {

    state = {
        step: 1,
        destination: "",
        period: "",
        duration: "",
        travelerStatus: "",
        budget: "",
        name: "",
        firstName: "",
        email: "",
        telephone: "",
        country: "",
        postalCode: "",
        moreInformations: ""
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({step: step + 1});
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step - 1});
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const {step} = this.state;
        const {destination, period, duration, travelerStatus, budget, name, firstName, email, telephone, country, postalCode, moreInformations} = this.state;
        const values = {destination, period, duration, travelerStatus, budget, name, firstName, email, telephone, country, postalCode, moreInformations};

        switch(step) {
            case 1:
                return (
                    <div className="contact-container">
                        <div className="contact-pic">
                            <img src="../img/img-8.jpg" alt="Excursion dans le désert du sahara à chameau" />
                        </div>
                        <div className="contactSection">
                            <h2>Entrons en contact </h2>
                            <div className="contactForm">
                                <form className="form">

                                    <div className="radio-input" id="radioBy3">
                                        <input type="radio" id="step1" name="formStep" value="Votre voyage"/>
                                        <label htmlFor="step1">Votre voyage</label>
                                        <input type="radio" id="step2" name="formStep" value="Les voyageurs"/>
                                        <label htmlFor="step2">Les voyageurs</label>
                                        <input type="radio" id="step3" name="formStep" value="Mes coordonnées"/>
                                        <label htmlFor="step3">Mes coordonnées</label>
                                    </div>

                                    <StepVoyage 
                                        nextStep = {this.nextStep}
                                    />  
                                </form>
                            </div>
                        </div>
                    </div>    
                )

            case 2:
                return (
                    <div className="contact-container">
                        <div className="contact-pic">
                            <img src="../img/img-8.jpg" alt="Excursion dans le désert du sahara à chameau" />
                        </div>
                        <div className="contactSection">
                            <h2>Entrons en contact </h2>
                            <div className="contactForm">
                                <form className="form">

                                    <div className="radio-input" id="radioBy3">
                                        <input type="radio" id="step1" name="formStep" value="Votre voyage"/>
                                        <label htmlFor="step1">Votre voyage</label>
                                        <input type="radio" id="step2" name="formStep" value="Les voyageurs"/>
                                        <label htmlFor="step2">Les voyageurs</label>
                                        <input type="radio" id="step3" name="formStep" value="Mes coordonnées"/>
                                        <label htmlFor="step3">Mes coordonnées</label>
                                    </div>

                                    <StepVoyageurs 
                                        prevStep = {this.prevStep}
                                        nextStep = {this.nextStep}
                                    />  
                                </form>
                            </div>
                        </div>
                    </div>    
                )  
            case 3:
               return (
                    <div className="contact-container">
                        <div className="contact-pic">
                            <img src="../img/img-8.jpg" alt="Excursion dans le désert du sahara à chameau" />
                        </div>
                        <div className="contactSection">
                            <h2>Entrons en contact </h2>
                            <div className="contactForm">
                                <form className="form">

                                    <div className="radio-input" id="radioBy3">
                                        <input type="radio" id="step1" name="formStep" value="Votre voyage"/>
                                        <label htmlFor="step1">Votre voyage</label>
                                        <input type="radio" id="step2" name="formStep" value="Les voyageurs"/>
                                        <label htmlFor="step2">Les voyageurs</label>
                                        <input type="radio" id="step3" name="formStep" value="Mes coordonnées"/>
                                        <label htmlFor="step3">Mes coordonnées</label>
                                    </div>

                                    <StepCoordonnees
                                        prevStep = {this.prevStep}
                                        nextStep = {this.nextStep}
                                        inputChange = {this.inputChange}
                                        values = {values}
                                    />  
                                </form>
                            </div>
                        </div>
                    </div>    
                )             
        }

    }
}

export default ContactForm
