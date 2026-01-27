import type { ComponentType } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageBanner from "../components/PageBanner"
import SectionHead from "../components/SectionHead"
import ContactForm from "../components/ContactForm";

export type AboutUs = {
  key: string;
  value: string;
  icon: ComponentType<{ className?: string, size?: number }>;
  link: boolean;
  type: null | 'tel' | 'mailto';
}

const aboutUs: AboutUs[] = [
  { key: "address", value: "123 Street, New York, USA", icon: MapPin, link: true, type: null },
  { key: "Pone", value: "+01234567890", icon: Phone, link: true, type: 'tel' },
  { key: "Email", value: "info@example.com", icon: Mail, link: true, type: 'mailto' },
]

const Contact = () => {
  return (
    <>
      <PageBanner name="contact" />
      <SectionHead heading="contact us" subHeadig="feel free to contact" />
      <article className="max-w-5xl mx-auto my-15 px-3 flex flex-col md:flex-row gap-4 flex-wrap items-center justify-between">
        {aboutUs && aboutUs.map((item: AboutUs, index: number) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <item.icon className="text-fair" size={36} />
            <h3 className="text-dark text-2xl"><strong>{item.key}</strong></h3>
            {item.link ?
              <a href={`${item.type}:${item.value}`}>{item.value}</a>
              : <p>{item.value}</p>
            }
          </div>
        ))}
      </article>
      <ContactForm/>
    </>
  )
}

export default Contact