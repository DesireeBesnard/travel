import React, { useState }  from 'react';
import '../App.css';
import "./ContactForm.css";

function ContactForm() {

    const [step, setStep] = useState(1);
    // const [destination, setDestination] = useState("");
    // const [period, setPeriod] = useState("");
    // const [duration, setduration] = useState("");
    // const [travelerStatus, setTravelerStatus] = useState("");
    // const [budget, setBudget] = useState("");
    // const [contactDetails, setContactDetails] = useState("");

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-pic">
                <img src="../img/img-8.jpg" alt="Excursion dans le désert du sahara à chameau" />
            </div>
            <div className="contacSection">
                <h2>Entrons en contact </h2>
                <div className="contactForm">
                    <form className="form">
                        <div>
                            <h2>Votre voyage</h2>
                            <p>Les informations que nous demandons ci-dessous nous permettent de mieux appréhender vos souhaits de voyage; nous les approfondirons ensemble par téléphone ou lors d'un rendez-vous en agence.</p>
                        
                            <div className="select-input">
                                <select name="destinations" id="destination-select">
                                    <option value="">--Choisir une destination--</option>
                                    <option value="France">France</option>
                                    <option value="Belgique">Belgique</option>
                                    <option value="Italie">Italie</option>
                                    <option value="Maroc">Maroc</option>
                                    <option value="Chine">Chine</option>
                                    <option value="Pérou">Pérou</option>
                                </select>
                                    <select name="periods" id="period-select">
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
                                    <select name="duration" id="destination-select">
                                        <option value="">--Choisir une durée--</option>
                                        <option value="week">Une semaine</option>
                                        <option value="oneOrTwoWeek">Une à deux semaines</option>
                                        <option value="twoWeeks">Deux semaiens</option>
                                        <option value="twoToThree">Deux à trois semaines</option>
                                        <option value="threeWeeks">Trois semaines</option>
                                        <option value="moreThanThree">Plus de trois semaines</option>
                                    </select>
                                </div>
                        </div>
                        <div>
                            <h2>Les voyageurs</h2>
                            <p>Les informations que nous demandons ci-dessous nous permettent de mieux appréhender vos souhaits de voyage; nous les approfondirons ensemble par téléphone ou lors d'un rendez-vous en agence.</p>
                            <div className="radio-input">
                                <input type="radio" id="status-couple" name="travelerStatus" value="En couple"/>
                                <label htmlFor="status-couple">En couple</label>
                                <input type="radio" id="status-family" name="travelerStatus" value="En famille"/>
                                <label htmlFor="status-family">En famille</label>
                                <input type="radio" id="status-friends" name="travelerStatus" value="Entre amis"/>
                                <label htmlFor="status-friends">Entre amis</label>
                                <input type="radio" id="status-single" name="travelerStatus" value="Seul(e)"/>
                                <label htmlFor="status-single">Seul(e)</label>
                            </div>
                            <div className="radio-input">
                                <input type="radio" id="budget1" name="budget1" value="< 4 000 €"/>
                                <label htmlFor="budget1">&lt; 4 000 €</label>
                                <input type="radio" id="budget2" name="budget2" value="4 000 - 6 000 €"/>
                                <label htmlFor="budget2">4 000 - 6 000 €</label>
                                <input type="radio" id="budget3" name="budget3" value="6 000 - 8 000 €"/>
                                <label htmlFor="budget3">6 000 - 8 000 €</label>
                                <input type="radio" id="budget4" name="budget4" value="> 8 000 €"/>
                                <label htmlFor="budget4">&gt; 8 000 €</label>
                            </div>
                        </div>
                        <div>
                            <h2>Mes coordonnées</h2>
                            <p>Les informations que nous demandons ci-dessous nous permettent de mieux appréhender vos souhaits de voyage; nous les approfondirons ensemble par téléphone ou lors d'un rendez-vous en agence.</p>
                            <div className="radio-input">
                                <input type="radio" id="mademoiselle" name="mademoiselle" value="Mlle"/>
                                <label htmlFor="mademoiselle">Mlle</label>
                                <input type="radio" id="madame" name="madame" value="Mme"/>
                                <label htmlFor="madame">Mme</label>
                                <input type="radio" id="monsieur" name="monsieur" value="M."/>
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
                            <input type="submit" value="SUBMIT"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;

