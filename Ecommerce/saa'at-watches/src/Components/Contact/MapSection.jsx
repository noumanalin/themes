// components/MapSection.jsx
import React from "react";

const MapSection = () => {
  return (
    <section data-aos="fade-up" className="w-full text-center pt-10 ">
    
        <h1 className="text-2xl md:text-4xl font-serif mb-4">Find Us Here</h1>

        <div className="w-full h-[600px] rounded overflow-hidden shadow-lg border">
          {/* Replace the src value below with your own Google Maps embed link */}
          {/* Example: Go to https://www.google.com/maps > search your business > click Share > Embed a map > Copy HTML > extract the src */}
          <iframe
            title="Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8178126842826!2d-74.0090186845934!3d40.708177079332205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1ce751e3a7%3A0x28e91c981fb1a57a!2s12%20Van%20Dyke%20St%2C%20Brooklyn%2C%20NY%2011231%2C%20USA!5e0!3m2!1sen!2s!4v1616776572711!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
    
    </section>
  );
};

export default MapSection;
