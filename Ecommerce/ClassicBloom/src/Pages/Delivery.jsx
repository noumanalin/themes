import React from 'react';
import Steps from '../Components/Delivery/Steps';
import BestWay from "../Components/Delivery/BestWay";
import PricingPackages from "../Components/Delivery/PricingPackages";
import QualityService from '../Components/Delivery/QualityService';
import Breadcrumb from "../Components/Breadcrumb"

const Delivery = () => {
    return (
        <>
            <Breadcrumb
                title="Delivery Information"
                subtitle="Discover our reliable and timely delivery services ensuring your favorite fragrances reach you with care and precision."
                image="/delivery/hero.webp"
            />
            <BestWay />
            <Steps />
            <PricingPackages />
            <QualityService/>

            {/* SEO meta tags */}
            <meta
                name="description"
                content="Learn about our perfume delivery options — offering safe, fast, and elegant delivery to ensure your fragrances arrive fresh and on time."
            />
            <meta
                name="keywords"
                content="perfume delivery, fragrance shipping, fast delivery perfumes, luxury perfume delivery, safe perfume packaging"
            />
            <title>Delivery Information | Perfume Shop</title>

        </>
    )
}

export default Delivery
