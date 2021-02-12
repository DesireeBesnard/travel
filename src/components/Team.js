import React from 'react';
import "./Team.css";
import Membercard from './Membercard';
import { Button } from './Button';



function Team() {
    return (
        <div className="container container-team">

            <div className="team--container">
                <div className="team--column team--column-left">
                    <Membercard 
                        cardPlace="membercard-left"
                        src="../img/member-2.jpg"
                        name="Jessica Parker"
                        namePlace="member-namePlace1"
                        job="Afrique"
                    />
                    <Membercard 
                        cardPlace="membercard-right"
                        src="../img/member-1.jpg"
                        name="Johnson Doe"
                        namePlace="member-namePlace2"
                        job="Asie"
                    />
                    
                </div>
                <div className="team--column team--column-right">
                    <Membercard 
                        cardPlace="membercard-left"
                        src="../img/member-3.jpg"
                        name="Jane Fonzie"
                        namePlace="member-namePlace3"
                        job="Europe - Océanie"
                    />
                    <Membercard 
                        cardPlace="membercard-right"
                        src="../img/member-4.jpg"
                        name="Tania Anderson"
                        namePlace="member-namePlace4"
                        job="Les Amériques"
                    />
                </div>
            </div>

            <div className="team-text">
                <h2 className="team-title">Une équipe à votre écoute</h2>
                <Button buttonStyle='btn--sand'>Demander un devis</Button>
                <Button buttonStyle='btn--sand'>Prendre rendez-vous</Button>
                <div className="takeappointment">
                    
                </div>
            </div>
        </div>

    )
}

export default Team
