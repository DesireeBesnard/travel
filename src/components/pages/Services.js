import React from 'react';
import '../../App.css';
import Banner from "../Banner";
import Footer from "../Footer";


function Agency () {
    return (
        <>
            <Banner 
                className="banner" 
                bannerBg="banner--agency"
                children="NOTRE AGENCE"
            />
            <Footer />
        </>
    )

}

export default Agency; 

// export default function Services() {
//     return <h1 className="agency">NOTRE AGENCE</h1>
// }