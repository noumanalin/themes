import React from "react";


const Team = () => {

const teamMembers = [
  {
    id: 1,
    name: "Aiden Blanc",
    position: "Horology Specialist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Isabella Varon",
    position: "Mechanical Design Engineer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Luca Montre",
    position: "Luxury Watch Curator",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Sofia Cartier",
    position: "Timepiece Brand Strategist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];



    return (
        <>
            <section className=" py-16 px-3 md:px-20 ">
                <div className=" w-full flex lg:flex-row gap-20 flex-col justify-between items-center">
                    {/* Left Side */}
                    <div className=" w-full lg:w-1/2 text-center lg:text-left lg:order-2 order-1">
                        <h1 className="md:text-4xl text-2xl font-serif  mb-6">
                            Meet the Team
                        </h1>
                        <p className="">
                            Our team is composed of horology enthusiasts, mechanical artists,
                            and luxury watch experts who bring precision and passion to every timepiece we design.
                        </p>
                    </div>

                    {/* Right Side Cards */}
                    <div className=" w-full lg:w-1/2 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="relative w-[260px] h-[200px] rounded-[14px] shadow-[4px_4px_20px_#d1d1d1,-4px_-4px_20px_#ffffff] flex flex-col items-center justify-center overflow-hidden z-[10] text-center"
                            >
                                {/* Glass Background */}
                                <div className="absolute top-[5px] left-[5px] w-[250px] h-[190px] z-[2] bg-white/95 backdrop-blur-[24px] rounded-[10px] outline outline-2 outline-white overflow-hidden flex flex-col items-center justify-center p-4">
                                    <img className="w-16 h-16  rounded-full mb-3"
                                        src={member.image}
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-sm text-gray-600">{member.position}</p>
                                </div>

                                {/* Blob Animation */}
                                <div className="absolute top-1/2 left-1/2 w-[180px] h-[180px] rounded-full bg-primary opacity-100 blur-[12px] animate-blobBounce z-[1]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blob Animation Keyframes */}
            <style>{`
        @keyframes blob-bounce {
          0% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
          25% {
            transform: translate(-100%, -100%) translate3d(100%, 0, 0);
          }
          50% {
            transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
          }
          75% {
            transform: translate(-100%, -100%) translate3d(0, 100%, 0);
          }
          100% {
            transform: translate(-100%, -100%) translate3d(0, 0, 0);
          }
        }

        .animate-blobBounce {
          animation: blob-bounce 5s infinite ease;
        }
      `}</style>
        </>
    );
};

export default Team;
