import { Headset, MonitorSmartphone, FileText, MousePointerClick } from "lucide-react";

const UsedTechnology = () => {
  const features = [
    {
      icon: <Headset className="w-8 h-8 text-[var(--primary)]" />,
      title: "Client Support",
      text: "Our premium support service assists you in resolving issues promptly and effectively.",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-[var(--primary)]" />,
      title: "Fully Responsive",
      text: "Your website displays perfectly across all modern devices and screen sizes.",
    },
    {
      icon: <FileText className="w-8 h-8 text-[var(--primary)]" />,
      title: "Comprehensive Documentation",
      text: "We provide thorough documentation to simplify setup and customization processes.",
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-[var(--primary)]" />,
      title: "Single-Click Demo Setup",
      text: "Install demo content instantly with one click and begin immediately.",
    },
  ];

  return (
    <section
      aria-label="used technologies"
      id="technologies"
      className="w-screen min-h-[75vh] bg-zinc-800"
    >
      <div className="wrapper py-16 flex flex-col items-center">
        {/* Section Title */}
        <h2 className="font-stylish text-2xl md:text-3xl text-[var(--primary)] mb-2">
          Technology
        </h2>
        <h1 className="text-white text-3xl md:text-4xl text-center mb-12 font-light tracking-wide">
          INTEGRATED TECHNOLOGIES
        </h1>

        {/* Main tech cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Elementor */}
          <div className="flex items-center gap-4 bg-white  p-5 shadow-md w-[320px]">
            <img
              src="/elementor.png"
              alt="Elementor Page Builder"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h4 className="text-zinc-800 font-semibold mb-1">
                Elementor Page Builder
              </h4>
              <p className="text-gray-600 text-sm leading-snug">
                Build pages effortlessly using the powerful Elementor page builder.
              </p>
            </div>
          </div>

          {/* WooCommerce */}
          <div className="flex items-center gap-4 bg-white  p-5 shadow-md w-[320px]">
            <img
              src="/woocommerce.png"
              alt="WooCommerce"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h4 className="text-zinc-800 font-semibold mb-1">
                WooCommerce
              </h4>
              <p className="text-gray-600 text-sm leading-snug">
                Establish your online store to sell products with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Divider text */}
        <h4 className="text-center mt-16 mb-10 text-2xl md:text-3xl font-light text-white">
          additional capabilities
        </h4>

        {/* Feature icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-3 max-w-[250px]">
              {feature.icon}
              <h5 className="text-white font-semibold text-sm md:text-base">
                {feature.title}
              </h5>
              <p className="text-gray-400 text-sm leading-snug">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsedTechnology;