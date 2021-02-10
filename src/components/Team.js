import React from 'react';
import "./Team.css";
import MembercardLeft from './MembercardLeft';



function Team() {
    return (
        <div className="container">

            <h1>Une équipe à votre écoute</h1>
            <p>blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla</p>

            <div className="team--container">
                <div className="team--column team--column-left">
                    <MembercardLeft 
                        src="../img/member-1.jpg"
                        name="Johnson Doe"
                        job="Founder and CEO"
                    />
                    <div className="membercard membercard-right">
                        <p>blablablabla</p>
                    </div>
                </div>
                {/* <div className="team--column team--column-right">
                    <div className="member-card member-up">
                        <p>blabla</p>
                    </div>
                    <div className="member-card member-down">
                        <p>blablablabla</p>
                    </div>
                </div> */}
            </div>
            
        </div>

    )
}

export default Team
