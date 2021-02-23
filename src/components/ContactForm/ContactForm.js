import React, { Component }  from 'react';
import '../../App.css';
import "./ContactForm.css";
import StepVoyage from "./StepVoyage.js";

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
                                inputChange = {this.inputChange}
                                values = {values}
                            />

                            {/* <div>
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
                            </div>
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
                                            <input type="text" id="name" name="name" placeholder="Nom"/>
                                            <label>*</label>
                                            <input type="text" id="email" name="email" placeholder="Adresse e-mail"/>
                                            <label>*</label>
                                            <input type="text" id="postalCode" name="postalCode" placeholder="Code Postal"/>
                                        </div>
                                        <div className="RightContact">
                                            <label>*</label>
                                            <input type="text" id="firstName" name="firstName" placeholder="Prénom"/>
                                            <label>*</label>
                                            <input type="text" id="telephone" name="telephone" placeholder="(ex: +33698172788)"/>
                                            <label>*</label>
                                            <input type="text" id="country" name="country" placeholder="Pays de résidence"/>
                                        </div>
                                    </div>
                                    <input type="textarea" id="moreInformations" name="moreInformations" placeholder="Merci de nous donner quelques précisions susr le voyage souhaité"/>

                                </div>
                                <input type="submit" value="SUBMIT"></input> */}
                            {/* </div> */}
                        </form>
                    </div>
                </div>
            </div>    
        )
        }

    }
}

export default ContactForm


// function ContactForm() {

//     const [step, setStep] = useState(1);
//     // const [destination, setDestination] = useState("");
//     // const [period, setPeriod] = useState("");
//     // const [duration, setduration] = useState("");
//     // const [travelerStatus, setTravelerStatus] = useState("");
//     // const [budget, setBudget] = useState("");
//     // const [contactDetails, setContactDetails] = useState("");

//     const nextStep = () => {
//         setStep(step + 1);
//     };

//     const prevStep = () => {
//         if (step > 1) {
//             setStep(step - 1);
//         }
//     };
// }

// export default ContactForm;

