import React, { Component } from 'react'
import Button from "../Button.js";

export class Confirmation extends Component {

    precedent = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const {
            values: {name, firstName, email, telephone, country, postalCode, moreInformations} 
        } = this.props;

        return (
            <div>
                <h2>Confirmation</h2>
                <ul>
                   <li></li> 
                </ul>
                            
                <div>
                    <Button buttonStyle="btn--appointment" buttonSize="btn--large" children="précedent" onClick={this.precedent}/>
                    <input type="submit" value="SUBMIT"></input> 
                </div>
            </div>  
        ) 
    }
}

export default Confirmation
