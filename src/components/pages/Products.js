import React from 'react';
import '../../App.css';
import Banner from "../Banner";
import Footer from "../Footer";


function Product () {
    return (
        <>
            <Banner 
                className="banner" 
                bannerBg="banner--product"
                children="PRODUITS"
            />
            <Footer />
        </>
    )

}

export default Product; 

// export default function Services() {
//     return <h1 className="agency">NOTRE AGENCE</h1>
// }