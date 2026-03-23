import React from "react";
import blog1 from "../../assets/blog1.avif";
import blog2 from "../../assets/blog2.avif";
import blog3 from "../../assets/blog3.avif";
import blog4 from "../../assets/blog4.avif";
import blog5 from "../../assets/blog5.avif";

const blogsData = [
  {
    id: 1,
    title: "The Rise of Smart Luxury Watches",
    author: "Zain Malik",
    role: "Tech Journalist",
    image: blog1,
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "Published on August 2, 2025",
    description:
      "The lines between traditional craftsmanship and digital innovation are blurring. Leading brands like TAG Heuer and Montblanc have embraced hybrid models that combine mechanical elegance with smart features like heart rate tracking and voice assistance.",
  },
  {
    id: 2,
    title: "Sustainable Watchmaking: A Growing Trend",
    author: "Ayesha Khan",
    role: "Eco Analyst",
    image: blog2,
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "Published on August 1, 2025",
    description:
      "As sustainability takes center stage, watchmakers are exploring eco-friendly materials and ethical practices. From solar-powered watches to biodegradable straps, the industry is shifting towards greener timepieces.",
  },
  {
    id: 3,
    title: "History Reimagined: Vintage Watches in Modern Times",
    author: "Bilal Farooq",
    role: "Horology Enthusiast",
    image: blog3,
    authorImage: "https://randomuser.me/api/portraits/men/54.jpg",
    date: "Published on July 28, 2025",
    description:
      "Vintage watches are making a comeback as collectors and fashion-forward consumers look to timeless designs. Brands are reissuing classics with upgraded movements and materials, keeping history alive with modern flair.",
  },
  {
    id: 4,
    title: "Why Minimalist Watch Design is Dominating 2025",
    author: "Sara Riaz",
    role: "Fashion Columnist",
    image: blog4,
    authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
    date: "Published on July 25, 2025",
    description:
      "In a world full of tech overload, minimalism brings peace. Watchmakers are now favoring clean dials, subtle tones, and simple silhouettes — a clear signal that less is more, even in luxury horology.",
  },
  {
    id: 5,
    title: "Women in Watchmaking: Breaking Industry Norms",
    author: "Noor Fatima",
    role: "Industry Reporter",
    image: blog5,
    authorImage: "https://randomuser.me/api/portraits/women/52.jpg",
    date: "Published on July 18, 2025",
    description:
      "More women are designing, engineering, and leading watchmaking companies. This shift is leading to inclusive designs and fresh perspectives, challenging an industry historically dominated by men.",
  },
];


function BlogTech() {
  return (
    <section className="my-10 md:space-y-0 space-y-10 md:px-20 px-3 ">
      {blogsData.map((blog, index) => (
        <div
          key={blog.id}
          className={`flex flex-col  md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center bg-white`}
        >
          <img
            data-aos={index % 2 === 1 ? "fade-left" : "fade-right"}
            src={blog.image}
            alt={blog.title}
            className="w-full md:w-1/2 h-[80vh] object-cover order-2 md:order-1"
          />
          <div
            data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
            className=" md:w-1/2 md:gap-0 gap-5  w-full md:px-5 px-0 py-3 space-y-4 order-1 md:order-2">
            <h1 className="text-2xl font-serif font-semibold">{blog.title}</h1>
            <div className="flex items-center">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h3 className="text-sm font-semibold">{blog.author}</h3>
                <p className="text-xs text-gray-500">{blog.role}</p>
              </div>
            </div>
            <p>{blog.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-right w-full text-primary italic">
                {blog.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default BlogTech;
