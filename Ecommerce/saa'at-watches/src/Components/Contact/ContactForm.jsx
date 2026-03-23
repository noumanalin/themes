import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message, agree } = formData;

        if (!name || !email || !message) {
            alert("All fields are required.");
            return;
        }

        if (!agree) {
            alert("Please agree to the Privacy Policy.");
            return;
        }

        alert("Form submitted successfully!");
        // Proceed with form submission logic...
    };

    return (
        <div data-aos="fade-up" className="min-h-screen flex items-center justify-center bg-white px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-3xl">
                <h1 className="text-2xl md:text-4xl font-serif text-center mb-6">Reach Out</h1>

                {/* Name and Email in one row */}
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="flex-1 p-3 bg-gray-200 border-none outline-none focus:outline-inherit focus:bg-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="flex-1 p-3 bg-gray-200 border-none outline-none focus:outline-inherit focus:bg-white"
                    />
                </div>

                {/* Message box */}
                <div className="mb-4">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={10}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-200 border-none outline-none resize-none focus:outline-inherit focus:bg-white"
                    ></textarea>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-2 mb-6">
                    <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="w-5 h-5 accent-primary mt-1"
                    />
                    <label htmlFor="agree" className="text-sm leading-snug cursor-pointer">
                        I have read and agree to the <span className="underline">Privacy Policy</span>
                    </label>
                </div>

                {/* Send Button */}
                <button
                    type="submit"
                    className={`w-fit py-3 px-5 text-white uppercase font-medium ${formData.agree ? "bg-primary hover:bg-primary/80" : "bg-gray-400"
                        } transition`}
                >
                    Send message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
