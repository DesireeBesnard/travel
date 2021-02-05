import React from 'react';


const BANNERBG = ["banner--agency", "banner--product", "banner--signIn"];

export const Banner = ({
    bannerBg,
    children
}) => {

    const checkBannerBg = BANNERBG.includes(bannerBg) ? bannerBg : BANNERBG[0];

    return (
        <>
            <div className={`banner ${checkBannerBg}`}>
                <h1>{children}</h1>
            </div>
        </>
    )
}

export default Banner
