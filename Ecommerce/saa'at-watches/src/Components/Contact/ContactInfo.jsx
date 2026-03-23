import React from "react";

const contactDetails = [
  {
    title: "Address",
    content: "12 Van Dyke St, Brooklyn, NY 11231",
  },
  {
    title: "Phone",
    content: (
      <>
        <a href="tel:18001234567" className="text-primary cursor-pointer block">
          1 (800) 123-4567
        </a>
        <a href="tel:18001234568" className="text-primary cursor-pointer block">
          1 (800) 123-4568
        </a>
      </>
    ),
  },
  {
    title: "Mail",
    content: (
      <>
        <a href="mailto:sales@yoursite.com" className="text-primary cursor-pointer block">
          sales@yoursite.com
        </a>
        <a href="mailto:hr@yoursite.com" className="text-primary cursor-pointer block">
          hr@yoursite.com
        </a>
      </>
    ),
  },
  {
    title: "Hours",
    content: (
      <>
        Mon - Fri : 8 AM - 6 PM <br /> Sat : 9 AM - 4 PM
      </>
    ),
  },
];

const ContactInfo = () => {
  return (
    <div data-aos="fade-up" className="px-3 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className="border aspect-square bg-white flex flex-col items-center justify-center hover:scale-90 transform transition cursor-pointer duration-300 p-4 text-center"
          >
            <h1 className="text-2xl font-serif mb-2">{item.title}</h1>
            <p className="text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
