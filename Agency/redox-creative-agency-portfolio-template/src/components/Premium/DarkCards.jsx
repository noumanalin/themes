import DarkCard from "./DarkCard";
import cardImage from "../../assets/dark-card-1.jpg";
import {
  X,
  MonitorCheck,
  LaptopMinimalCheck,
  Tablet,
  SmartphoneCharging,
} from "lucide-react";

const dataArray = [
  {
    icon: MonitorCheck,
    values: (
      <p className="center-center gap-1 text-sm border rounded-full border-gray-500 px-1 py-[0.5px] m-2">
        1920px <X size={15} /> 1080px
      </p>
    ),
    text: (
      <p>
        Desktop Display
        <br />
        Layout
      </p>
    ),
  },
  {
    icon: LaptopMinimalCheck,
    values: (
      <p className="center-center gap-1 text-sm border rounded-full border-gray-500 px-1 py-[0.5px] m-2">
        1366px <X size={15} /> 768px
      </p>
    ),
    text: (
      <p>
        Laptop Display
        <br />
        Layout
      </p>
    ),
  },
  {
    icon: Tablet,
    values: (
      <p className="center-center gap-1 text-sm border rounded-full border-gray-500 px-1 py-[0.5px] m-2">
        1024px <X size={15} /> 768px
      </p>
    ),
    text: (
      <p>
        Tablet Display
        <br />
        Layout
      </p>
    ),
  },
  {
    icon: SmartphoneCharging,
    values: (
      <p className="center-center gap-1 text-sm border rounded-full border-gray-500 px-1 py-[0.5px] m-2">
        767px <X size={15} /> 365px
      </p>
    ),
    text: (
      <p>
        Mobile Display
        <br />
        Layout
      </p>
    ),
  },
];

const DarkCards = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-2 flex flex-col md:flex-row justify-between my-10">
      <DarkCard
        heading={"Headers, Footers & Navigation"}
        text={"Adaptable layout building blocks"}
        dimText={
          "Select and adjust pre-built headers, footers, and navigation patterns to match the structure and goals of your website."
        }
      >
        <figure className="mt-6">
          <img
            src={cardImage}
            alt="Website layout preview"
            className="w-full rounded-lg"
          />
        </figure>
      </DarkCard>

      <DarkCard
        heading={"Responsive Layouts"}
        text={"Optimized for every screen size"}
        dimText={
          "The layout automatically adapts to different screen dimensions, ensuring consistent presentation and usability across desktop, tablet, and mobile devices."
        }
      >
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {dataArray.map((data, index) => (
            <div
              key={index}
              className={`text-gray-300 flex flex-col items-center text-center ${
                index !== 3
                  ? "border-b border-b-gray-600 md:border-none"
                  : ""
              }`}
            >
              <data.icon size={50} />
              <div>{data.values}</div>
              <div className="text-sm">{data.text}</div>
            </div>
          ))}
        </section>
      </DarkCard>
    </section>
  );
};

export default DarkCards;
