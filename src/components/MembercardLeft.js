import React from 'react';
import "./Team.css";
import "./MembercardLeft.css";

function MembercardLeft(props) {
    return (
        <div className="membercard membercard-left">
            <div className="member-photo">
                <img src={props.src} alt="portrait du membre"/>
            </div>
            <div className="member-gap">

            </div>
            <div className="member-name">
                <p><span className="name">{props.name}</span><br/>{props.job}</p>
            </div>
        </div>
    )
}

export default MembercardLeft
