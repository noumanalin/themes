import React from "react";

const Map = () => {
    return (
        <section className="h-[60vh] w-screen m-0 p-0">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094286!2d144.95373531531692!3d-37.816279179751824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2e7a7e7%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1632900000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0 h-full w-full"
            ></iframe>
        </section>
    );
};

export default Map;
