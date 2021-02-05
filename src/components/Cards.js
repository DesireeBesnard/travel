import React from 'react';
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Découvrez nos plus belles destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="../img/img-9.jpg" 
                            text="Explorez la cascade cachée au fond de la jungle amazonienne"  
                            label="Adventure" 
                            path="/services"
                        />
                        <CardItem 
                            src="../img/img-2.jpg" 
                            text="Voyagez à travers les îles de Bali lors d'une croisière privée"  
                            label="Luxury" 
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="../img/img-3.jpg" 
                            text="Mettez les voiles dans l'océan Atlantique pour visiter des eaux inexplorées"  
                            label="Mystery" 
                            path="/services"
                        />
                        <CardItem 
                            src="../img/img-4.jpg" 
                            text="Vivez le football au sommet des montagnes himalayennes"  
                            label="Adventure" 
                            path="/services"
                        />
                        <CardItem 
                            src="../img/img-8.jpg" 
                            text="Traversez le désert du Sahara lors d'une visite guidée"  
                            label="Adventure" 
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
