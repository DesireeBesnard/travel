import React from 'react';
import "./Team.css";

const CARDTYPE = ["membercard-left", "membercard-right"];
const NAMEPLACE = ["member-namePlace1", "member-namePlace2", "member-namePlace3", "member-namePlace4"];

export const Membercard = ({

    cardPlace,
    src,
    name,
    namePlace,
    job     

}) =>{

    const checkCardPlace = CARDTYPE.includes(cardPlace) ? cardPlace : CARDTYPE[0];
    const checkNamePlace = NAMEPLACE.includes(namePlace) ? namePlace : NAMEPLACE[0];

    return (
        <div className={`membercard ${ checkCardPlace}`}>
            <div>
                <img src={src} alt={`portrait de ${name}`}/>
            </div>
            <div className={checkNamePlace}>
                <span className="name">{name}</span><br/>
                <p className="job">{job}</p>
            </div>
        </div>
    )
}

export default Membercard
