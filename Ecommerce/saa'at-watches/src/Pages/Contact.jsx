import React from 'react'
import PageBanner from '../Components/PageBanner'
import ContactInfo from "../Components/Contact/ContactInfo"
import ContactForm from '../Components/Contact/ContactForm'
import MapSection from '../Components/Contact/MapSection'

const Contact = () => {
    return (
        <div>
            <PageBanner title="Contact Us" breadcrumb="Your Time Matters to Us" />
            <ContactInfo />
            <ContactForm />
            <MapSection />
        </div>
    )
}

export default Contact
