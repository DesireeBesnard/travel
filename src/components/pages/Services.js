import React from 'react';
import '../../App.css';
import Banner from "../Banner";
import Maps from "../Maps";
import Steps from '../Steps';
import Team from "../Team";
import Footer from "../Footer";


function Agency () {
    return (
        <>
            <Banner 
                className="banner" 
                bannerBg="banner--agency"
                children="Notre agence"
            />

            <div className="container agency">
                <div className="agency-adress">
                    <h2>
                        Agence de voyage<br /> à Besançon depuis 10 ans
                    </h2>
                    <p>
                        Avec nos conseillers Trvl vous êtes déjà en voyage! Nous sommes des amoureux du voyage. Pour donner vie à vos projets, nous mettons à votre disposition connaissance du terrain et savoir-faire technique, mais partageons aussi coups de cœur et anecdotes personnelles.
                    </p>

                    <p>
                        53b Rue de Belfort, 25000 Besançon <br />
                        téléphone: 06 98 17 27 88 | email: desireebesnard@gmail.com <br />
                        Horaires: Du Lundi au Vendredi de 8h30 à 12h et 13h à 16h30
                    </p>
                </div>
                <div className="agency-map">
                    <Maps />
                </div>
                
            </div>

            <div className="container">
                <h2 className="step--title">Concevez votre voyage sur-mesure</h2>
                <div className="steps-container">
                    <Steps 
                        stepNumber="1"
                        stepSubTitle="Récoltons votre brief" 
                        stepText="Grâce à un questionnaire approfondi, nous apprendrons à mieux vous connaître. Nous pourrons ainsi concevoir le voyage français parfait, fait pour vous."
                    />
                    <Steps 
                        stepNumber="2" 
                        stepSubTitle="Discutons du projet" 
                        stepText="Nous adapterons votre itinéraire en fonction de vos commentaires, jusqu'à ce qu'il vous satisfasse. Chaque partie du voyage peut être personnalisée."
                    />
                    <Steps 
                        stepNumber="3" 
                        stepSubTitle="Recevez votre guide" 
                        stepText="Nous vous ferons parvenir différentes suggestions, devis et itinéraires en fonction de vos intérêts et de vos attentes."
                    />
                    <Steps 
                        stepNumber="4" 
                        stepSubTitle="Faites vos valises" 
                        stepText="Nous sommes prêts à vous envoyer votre road-book pour un voyage sans encombre et nous avons hâte de vous accueillir en France."
                    />
                </div>
            </div>

            <Team />

            <Footer />
        </>
    )

}

export default Agency; 