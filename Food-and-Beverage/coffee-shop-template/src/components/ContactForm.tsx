import { useState } from "react";
import Map from "./Map";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    // handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            alert("Please enter your name.");
            return;
        }
        if (!emailRegex.test(formData.email)) {
            alert("Enter a valid email address.");
            return;
        }
        if (!formData.subject.trim()) {
            alert("Subject cannot be empty.");
            return;
        }
        if (formData.message.trim().length < 10) {
            alert("Message should be at least 10 characters long.");
            return;
        }

        setLoading(true);

        try {
            // simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            alert("✅ Your message has been sent!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            alert("❌ Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="wrapper grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Map Section */}
            <Map />

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 outline-none"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 outline-none"
                    required
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 outline-none"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px] p-3 border border-gray-300 outline-none"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className={`text-dark px-8 py-3 bg-[var(--primary-fair)] rounded font-semibold transition ${
                        loading ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-80"
                    }`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
