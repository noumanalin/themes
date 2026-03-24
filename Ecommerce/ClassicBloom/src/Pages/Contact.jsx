import React from 'react'
import ContactInfo from "../Components/Contact/ContactInfo"
import Map from "../Components/Contact/Map";
import ContactForm from '../Components/Contact/ContactForm';
import Breadcrumb from '../Components/Breadcrumb';
const Contact = () => {
    return (
        <>
            <Breadcrumb
                title="Contact Us"
                subtitle="We’re here to help! Reach out with your questions, feedback, or collaboration ideas — our team would love to hear from you."
                image="/contactHero.avif"
            />

            <ContactInfo />
            <Map />
            <ContactForm />



            {/* SEO meta tags */}
            <meta
                name="description"
                content="Get in touch with our perfume experts. We're here to help you find your signature scent or assist with your orders and inquiries."
            />
            <meta
                name="keywords"
                content="contact perfume shop, perfume customer support, fragrance help, perfume store contact"
            />
            <title>Contact Us | Perfume Shop</title>


        </>
    )
}

export default Contact
