import React, { useState } from "react";
import { User, Mail, Calendar, Clock, Users, Check } from "lucide-react";
import bgImage from "../assets/bg-image.jpg";

const BookYourTable = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        person: "1",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div
            className="wrapper block-border-shape py-12 relative"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#301e1ad7] z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        <h3 className="text-4xl text-fair font-bold mb-4">Exclusive Deal</h3>
                        <h2 className="text-3xl font-bold mb-6">Reserve Online & Save 30%</h2>
                        <p className="mb-8 leading-relaxed">
                            Book your table in advance and enjoy a seamless dining experience. 
                            Our online reservation system is quick, easy, and comes with special 
                            benefits just for you.
                        </p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">
                                <Check className="text-fair mr-2" />
                                <span>Instant confirmation on booking</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="text-fair mr-2" />
                                <span>Special discounts for online reservations</span>
                            </li>
                            <li className="flex items-center">
                                <Check className="text-fair mr-2" />
                                <span>Flexible scheduling options</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Content - Form */}
                    <div className="backdrop-blur-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            Book Your Table
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {/* Name Field */}
                                <div className="flex items-center border border-[var(--primary-fair)] px-4">
                                    <User className="text-fair" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="w-full px-4 py-3 bg-transparent text-white outline-none"
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="flex items-center border border-[var(--primary-fair)] px-4">
                                    <Mail className="text-fair" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 bg-transparent text-white outline-none"
                                        required
                                    />
                                </div>

                                {/* Date and Time Fields */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Date Field */}
                                    <div className="flex items-center border border-[var(--primary-fair)] px-4">
                                        <Calendar className="text-fair" />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-transparent text-white outline-none"
                                            required
                                        />
                                    </div>

                                    {/* Time Field */}
                                    <div className="flex items-center border border-[var(--primary-fair)] px-4">
                                        <Clock className="text-fair" />
                                        <select
                                            name="time"
                                            value={formData.time}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-transparent text-white outline-none"
                                            required
                                        >
                                            <option value="">Select Time</option>
                                            <option className="text-dark" value="09:00 AM">09:00 AM</option>
                                            <option className="text-dark" value="10:00 AM">10:00 AM</option>
                                            <option className="text-dark" value="11:00 AM">11:00 AM</option>
                                            <option className="text-dark" value="12:00 PM">12:00 PM</option>
                                            <option className="text-dark" value="01:00 PM">01:00 PM</option>
                                            <option className="text-dark" value="02:00 PM">02:00 PM</option>
                                            <option className="text-dark" value="03:00 PM">03:00 PM</option>
                                            <option className="text-dark" value="04:00 PM">04:00 PM</option>
                                            <option className="text-dark" value="05:00 PM">05:00 PM</option>
                                            <option className="text-dark" value="06:00 PM">06:00 PM</option>
                                            <option className="text-dark" value="07:00 PM">07:00 PM</option>
                                            <option className="text-dark" value="08:00 PM">08:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Person Select */}
                                <div className="flex items-center border border-[var(--primary-fair)] px-4">
                                    <Users className="text-fair" />
                                    <select
                                        name="person"
                                        value={formData.person}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-transparent text-white outline-none"
                                        required
                                    >
                                        <option className="text-dark" value="1">1 Guest</option>
                                        <option className="text-dark" value="2">2 Guests</option>
                                        <option className="text-dark" value="3">3 Guests</option>
                                        <option className="text-dark" value="4">4 Guests</option>
                                        <option className="text-dark" value="5">5 Guests</option>
                                        <option className="text-dark" value="6">6+ Guests</option>
                                    </select>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[var(--primary-fair)] text-dark py-3 px-6 font-bold hover:bg-opacity-90 transition-all duration-300"
                                >
                                    Reserve Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookYourTable;
