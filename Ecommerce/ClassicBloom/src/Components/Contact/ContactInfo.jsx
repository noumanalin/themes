import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const AddressDecoration = () => (
    <div className="relative w-52 h-52 mx-auto" aria-hidden="false" role="img" aria-label="location decoration">
        {/* brush-like organic background (teal-200) */}
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* subtle blur filter to imitate soft brush edges */}
            <defs>
                <filter id="softBrush" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feComponentTransfer in="b">
                        <feFuncA type="linear" slope="0.95" />
                    </feComponentTransfer>
                </filter>
            </defs>

            {/* layered irregular paths to simulate a painterly brush blotch */}
            <path
                d="M24 44 C46 10, 120 8, 130 44 C139 80, 106 120, 68 122 C42 123, 20 96, 24 44 Z"
                fill="#f0fdfa"        /* tailwind teal-200 hex */
                opacity="0.95"
                filter="url(#softBrush)"
            />
            <path
                d="M40 36 C64 18, 108 22, 118 46 C124 66, 102 96, 72 106 C52 112, 36 86, 40 36 Z"
                fill="#ccfbf1"       /* slightly lighter teal layer for texture */
                opacity="0.55"
                filter="url(#softBrush)"
            />

            {/* faint stroked brush feather to add rough edge */}
            <path
                d="M28 50 C54 34, 110 36, 120 60"
                stroke="#6ee7b7"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.35"
                fill="none"
                filter="url(#softBrush)"
            />
        </svg>

        {/* completed, thin stroked triangle */}
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* closed triangle (completed) */}
            <path
                d="M26 12 L136 32 L74 124 L26 12 Z"
                stroke="#0f172a"     /* dark stroke for contrast (slate-900) */
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            
          
           
        </svg>

        {/* pin icon centered inside triangular area */}
        <div className="absolute inset-0 flex items-center justify-center -top-10 text-[26px] text-[#0f172a]">
            <FiMapPin aria-hidden="false" title="Map pin" />
        </div>
    </div>
);

const PhoneDecoration = () => (
    <div className="relative w-52 h-52 mx-auto">
        {/* soft rectangular brush */}
        {/* brush-like organic background (teal-200) */}
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* subtle blur filter to imitate soft brush edges */}
            <defs>
                <filter id="softBrush" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feComponentTransfer in="b">
                        <feFuncA type="linear" slope="0.95" />
                    </feComponentTransfer>
                </filter>
            </defs>

            {/* layered irregular paths to simulate a painterly brush blotch */}
            <path
                d="M24 44 C46 10, 120 8, 130 44 C139 80, 106 120, 68 122 C42 123, 20 96, 24 44 Z"
                fill="#f0fdfa"        /* tailwind teal-200 hex */
                opacity="0.95"
                filter="url(#softBrush)"
            />
            <path
                d="M40 36 C64 18, 108 22, 118 46 C124 66, 102 96, 72 106 C52 112, 36 86, 40 36 Z"
                fill="#ccfbf1"       /* slightly lighter teal layer for texture */
                opacity="0.55"
                filter="url(#softBrush)"
            />

            {/* faint stroked brush feather to add rough edge */}
            <path
                d="M28 50 C54 34, 110 36, 120 60"
                stroke="#6ee7b7"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.35"
                fill="none"
                filter="url(#softBrush)"
            />
        </svg>

        {/* open square / corner frame */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M44 40 H116 M44 120 H116 M44 40 V80 M116 80 V120" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-[26px] text-[#111827]">
            <FiPhone />
        </div>
    </div>
);

const EmailDecoration = () => (
    <div className="relative w-52 h-52 mx-auto">
        {/* brush-like organic background (teal-200) */}
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* subtle blur filter to imitate soft brush edges */}
            <defs>
                <filter id="softBrush" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feComponentTransfer in="b">
                        <feFuncA type="linear" slope="0.95" />
                    </feComponentTransfer>
                </filter>
            </defs>

            {/* layered irregular paths to simulate a painterly brush blotch */}
            <path
                d="M24 44 C46 10, 120 8, 130 44 C139 80, 106 120, 68 122 C42 123, 20 96, 24 44 Z"
                fill="#f0fdfa"        /* tailwind teal-200 hex */
                opacity="0.95"
                filter="url(#softBrush)"
            />
            <path
                d="M40 36 C64 18, 108 22, 118 46 C124 66, 102 96, 72 106 C52 112, 36 86, 40 36 Z"
                fill="#ccfbf1"       /* slightly lighter teal layer for texture */
                opacity="0.55"
                filter="url(#softBrush)"
            />

            {/* faint stroked brush feather to add rough edge */}
            <path
                d="M28 50 C54 34, 110 36, 120 60"
                stroke="#6ee7b7"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.35"
                fill="none"
                filter="url(#softBrush)"
            />
        </svg>

        {/* partial arc stroke to mimic the screenshot */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M36 106 A60 60 0 0 0 136 46" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-[26px] text-[#111827]">
            <FiMail />
        </div>
    </div>
);

const ContactCard = ({ decoration, title, children }) => {
    return (
        <div className=" w-full text-center flex flex-col items-center justify-center">
            <div className="">{decoration}</div>
            <h3 className="text-lg md:text-xl text-[#0F172A] font-medium">{title}</h3>
            <div className="text-sm text-gray-600">{children}</div>
        </div>
    );
};

export default function ContactInfo() {
    return (
        <section className="py-10 sectionlayout bg-white">
            <div className="">
                <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-y-6">
                    <ContactCard decoration={<AddressDecoration />} title="Address">
                        <div>58 White St., New York</div>
                    </ContactCard>

                    <ContactCard decoration={<PhoneDecoration />} title="Phone">
                        <div className="space-y-2">
                            <div>+1 (800) 987 456 98</div>
                            <div>+1 (800) 987 456 98</div>
                        </div>
                    </ContactCard>

                    <ContactCard decoration={<EmailDecoration />} title="Email">
                        <div>cosmecos_company@mail.com</div>
                    </ContactCard>
                </div>
            </div>
        </section>
    );
}