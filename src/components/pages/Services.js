import React from 'react';
import '../../App.css';
import Banner from "../Banner";
import Team from "../Team";
import Presentation from "../Presentation";
import Footer from "../Footer";


function Agency () {
    return (
        <>
            <Banner 
                className="banner" 
                bannerBg="banner--agency"
                children="NOTRE AGENCE"
            />
            <Team />
            <Presentation />
            <Footer />
        </>
    )

}

export default Agency; 

// export default function Services() {
//     return <h1 className="agency">NOTRE AGENCE</h1>
// }