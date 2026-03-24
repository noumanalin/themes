import React from "react";

const Map = () => {
    return (
        <section className="w-full md:h-screen h-[50vh] my-10 border-none">
            <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.009190147936!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bb4cde4fcd3%3A0x7a8b1fcbcfb5b8a5!2sKarachi%20Pakistan!5e0!3m2!1sen!2s!4v1696420100000!5m2!1sen!2s"
                style={{ width: "100%", height: "100%", }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-none"
            ></iframe>
        </section>
    );
};

export default Map;
