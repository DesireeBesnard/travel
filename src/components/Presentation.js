import React from 'react'
import "./Presentation.css";

function Presentation() {
    return (
        <>
            <div className="presentation">
                <div className="presentation-item">
                    <img className="presentation-img" src="../img/team.jpg" alt="présentation de l'équipe"/>
                </div>
                <div className="presentation-item">
                    <p>
                        Notre Équipe vous aide à élaborer vos séjours à la carte, garantit une sélection des meilleures adresses, ou réserve encore vos vols aux tarifs les plus justes.
                    </p>
                    <p>
                        De la croisière féérique dans les mers turquoise caraïbéennes aux greens de golf de Marrakech, sans oublier les week-end culturels à Prague et les séjours d'affaires, Marinat Voyages donne vie à vos envies.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Presentation
