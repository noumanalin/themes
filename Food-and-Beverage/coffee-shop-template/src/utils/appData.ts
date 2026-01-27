import { Truck, Coffee, Award, Table, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import type { CoffeMenu, MainSlider, NavbarLinks, ServicesItem, SocialLink, TestimonialClientsArray } from "./types";

import bannerImage1 from '../assets/main-banner-1.jpg'
import bannerImage2 from '../assets/main-banner-2.jpg'

import serviceImage1 from '../assets/service-1.jpg'
import serviceImage2 from '../assets/service-2.jpg'
import serviceImage3 from '../assets/service-3.jpg'
import serviceImage4 from '../assets/service-4.jpg'

import coffeeMenu1 from '../assets/menu-1.jpg'
import coffeeMenu2 from '../assets/menu-2.jpg'
import coffeeMenu3 from '../assets/menu-3.jpg'

import client1Image from '../assets/testimonial-1.jpg'
import client2Image from '../assets/testimonial-2.jpg'
import client3Image from '../assets/testimonial-3.jpg'
import client4Image from '../assets/testimonial-4.jpg'


export const navbarLinks: NavbarLinks[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Menu", href: "/menu" },
    {
        name: "More", href: "/#testimonial", dropDown: [
            { name: "Reservation", href: "/#reservation" },
            { name: "Testimonials", href: "/#testimonial" },
        ]
    },
    { name: "Contact", href: "/contact" },
]


export const mainSlider: MainSlider[] = [
    { title: "Welcome to", item: "Brew Haven", subTitle: "crafted with love since 1990", image: bannerImage1 },
    { title: "Taste the", item: "perfect roast", subTitle: "fresh beans daily", image: bannerImage2 },
    { title: "Relax and enjoy", item: "your coffee", subTitle: "a cozy atmosphere", image: bannerImage1 },
    { title: "Experience the", item: "art of brewing", subTitle: "every cup matters", image: bannerImage2 },
]


export const servicesItems: ServicesItem[] = [
    { name: "Fast Delivery", description: "We deliver your favorite coffee and snacks right to your doorstep in no time.", icon: Truck, image: serviceImage1 },
    { name: "Freshly Roasted Beans", description: "Our beans are roasted daily to guarantee bold flavors and rich aroma.", icon: Coffee, image: serviceImage2 },
    { name: "Premium Quality", description: "Every cup is prepared with carefully selected beans to maintain the highest quality.", icon: Award, image: serviceImage3 },
    { name: "Easy Table Booking", description: "Reserve your table online and skip the wait – quick and convenient.", icon: Table, image: serviceImage4 },
]


export const hotCoffees: CoffeMenu[] = [
    { name: "Espresso", price: 4, image: coffeeMenu1, description: "Rich, bold, and energizing – the perfect start to your day." },
    { name: "Cappuccino", price: 6, image: coffeeMenu2, description: "Smooth espresso topped with creamy milk foam." },
    { name: "Latte", price: 7, image: coffeeMenu3, description: "A balanced blend of espresso and steamed milk." },
]

export const coldCoffees: CoffeMenu[] = [
    { name: "Iced Americano", price: 5, image: coffeeMenu1, description: "Chilled espresso poured over ice for a refreshing kick." },
    { name: "Iced Mocha", price: 6, image: coffeeMenu2, description: "Chocolate, milk, and espresso blended into a cold delight." },
    { name: "Cold Brew", price: 7, image: coffeeMenu3, description: "Slow-brewed for a smooth, naturally sweet flavor." },
]


export const testimonialClientsArray: TestimonialClientsArray[] = [
    { name: 'Sophia Johnson', profession: "Graphic Designer", image: client1Image, message: "The coffee here is amazing and the service is outstanding. Highly recommend!" },
    { name: 'Michael Lee', profession: "Entrepreneur", image: client2Image, message: "I love working from this café – great atmosphere and reliable Wi-Fi." },
    { name: 'Emma Williams', profession: "Student", image: client3Image, message: "Perfect place to relax and enjoy a cup of latte with friends." },
    { name: 'James Brown', profession: "Photographer", image: client4Image, message: "The quality of the beans is unmatched. Every sip feels special." },
    { name: 'Olivia Davis', profession: "Content Writer", image: client2Image, message: "A cozy café with excellent cold brews. Definitely my go-to spot." },
    { name: 'Daniel Wilson', profession: "Developer", image: client3Image, message: "Friendly staff, fast service, and the best cappuccino in town!" },
]


export const socialLinks: SocialLink[] = [
    { title: "Twitter", to: "https://twitter.com/", icon: Twitter },
    { title: "Facebook", to: "https://facebook.com", icon: Facebook },
    { title: "Instagram", to: "https://instagram.com", icon: Instagram },
    { title: "LinkedIn", to: "https://linkedin.com", icon: Linkedin },
];
