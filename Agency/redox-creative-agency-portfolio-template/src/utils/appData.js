import { Images, PackageOpen, Quote, Heading1,
        Send, Menu, Webhook, ChartNoAxesCombined, GalleryHorizontal,
        SearchCheck, DollarSign, User, Component
 } from 'lucide-react'; 

import DesignAgency2 from '../assets/design-agency-2.jpg';
import DigitalAgency1 from '../assets/digital-agency-1.jpg';
import ModernAgency from '../assets/modern-agency.jpg';
import ShowCase2 from '../assets/showcase-2.jpg';

import DigitalAgencyDark from '../assets/digital-agency-dark-1.jpg';
import DigitalAgency from '../assets/digital-agency-1.jpg';
import daclassic from '../assets/digital_agency_classic.jpg';
import PortfolioHorizontal from '../assets/portfolio-horizontal.jpg';
import creativeAgencyDark from '../assets/creative-agency-dark-1.jpg';
import creativeAgency from '../assets/creative-agency-2.jpg';
import DigitalAgencyModern from '../assets/digital-agency-modern.jpg';
import MarketingAgency from '../assets/marketing-agency-dark-1.jpg';
import marketingAgency2 from '../assets/marketing-agency-2.jpg';
import commingSoon from '../assets/commin-soon.png';

import DesignAgencyDark from '../assets/design-agency-dark-1.jpg';

import DesignAgency from '../assets/design-agency-2.jpg';
import webDevelopmentDark from '../assets/web-development-dark-1.jpg';
import webDevelopment from '../assets/web-development-2.jpg'; 



export const projects = [
  { name: "digital solutions", image: DigitalAgencyDark, link: "/", dark: true },
  { name: "digital solutions", image: DigitalAgency, link: "/", dark: false },
  { name: "digital solutions classic", image: daclassic, link: "/", dark: false },

  { name: "portfolio layout", image: PortfolioHorizontal, link: "/", dark: false },
  { name: "creative solutions", image: creativeAgencyDark, link: "/", dark: true },
  { name: "creative solutions", image: creativeAgency, link: "/", dark: false },

  { name: "digital solutions modern", image: DigitalAgencyModern, link: "/", dark: false },
  { name: "marketing solutions", image: MarketingAgency, link: "/", dark: true },
  { name: "design solutions", image: DesignAgencyDark, link: "/", dark: true },


  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
  { name: "coming soon", image: commingSoon, link: "/", dark: false },  
];


export const lightVersion = [
  { name: "Digital Solutions", link: "#", image: DigitalAgency1, badge: "Exclusive" },
  { name: "Digital Solutions Classic", link: "#", image: daclassic },
  { name: "Creative Solutions", link: "#", image: creativeAgency },
  { name: "Digital Solutions Modern", link: "#", image: DigitalAgencyModern },
  { name: "Marketing Solutions", link: "#", image: marketingAgency2 },
  { name: "Design Solutions", link: "#", image: DesignAgency, badge: "Free" },
  { name: "Web Solutions", link: "#", image: webDevelopment },
  { name: "Modern Solutions", link: "#", image: ModernAgency },
  { name: "Coming Soon", link: "#", image: commingSoon },
];

export const darkVersion = [
  { name: "Digital Solutions", link: "#", image: DigitalAgencyDark, badge: "Exclusive" },
  { name: "Creative Solutions", link: "#", image: creativeAgencyDark },
  { name: "Marketing Solutions", link: "#", image: MarketingAgency },
  { name: "Design Solutions", link: "#", image: DesignAgencyDark, badge: "Free" },
  { name: "Web Solutions", link: "#", image: webDevelopmentDark },
  { name: "Coming Soon", link: "#", image: commingSoon },
];

export const portfolio = [
  { name: "Portfolio Layout", link: "#", image: PortfolioHorizontal },
  { name: "Showcase Display", link: "#", image: ShowCase2 },
  { name: "Creative Solutions", link: "#", image: creativeAgency },
  { name: "Modern Solutions", link: "#", image: ModernAgency },
  { name: "Web Solutions", link: "#", image: webDevelopment },
  { name: "Coming Soon", link: "#", image: commingSoon },
  { name: "Coming Soon", link: "#", image: commingSoon },
];

export const portfolioDark = [
  { name: "Portfolio Layout", link: "#", image: PortfolioHorizontal },
  { name: "Creative Solutions", link: "#", image: creativeAgencyDark },
  { name: "Marketing Solutions", link: "#", image: MarketingAgency },
  { name: "Web Solutions", link: "#", image: webDevelopmentDark },
  { name: "Coming Soon", link: "#", image: commingSoon },
  { name: "Coming Soon", link: "#", image: commingSoon },
];



export const imageInfiniteSlider = [
    {src:DesignAgency2, alt:"Design Solutions Image"},
    {src:DigitalAgency1, alt:"Digital Solutions Image"},
    {src:ModernAgency, alt:"Modern Solutions Image"},
    {src:ShowCase2, alt:"Showcase Display Image"},
]


export const infiniteSlider1 = [
  { title: "newsletter", icon: Send },
  { title: "icon box", icon: PackageOpen },
  { title: "portfolio", icon: Images },
  { title: "testimonials", icon: Quote },
  { title: "headings", icon: Heading1 },
  { title: "Team member", icon: User },
  { title: "advance button", icon: Component },
  { title: "live site search", icon: SearchCheck },
  { title: "pricing tabel", icon: DollarSign },
];

export const infiniteSlider2 = [
  { title: "newsletter", icon: Send },
  { title: "Navbar menu", icon: Menu },
  { title: "social element", icon: Webhook },
  { title: "animated frame", icon: ChartNoAxesCombined },
  { title: "Carousel", icon: GalleryHorizontal },
];

export const infiniteSlider4 = [
  { title: "newsletter", icon: Send },
  { title: "Navbar menu", icon: Menu },
  { title: "social element", icon: Webhook },
  { title: "animated frame", icon: ChartNoAxesCombined },
  { title: "Carousel", icon: GalleryHorizontal },
];