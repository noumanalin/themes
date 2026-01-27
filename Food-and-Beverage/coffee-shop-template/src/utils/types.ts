import type { ComponentType } from "react";


export type NavbarLinks = {
    name: string;
    href: string;
    dropDown?: NavbarLinks[]
}

export type MainSlider = {
    title: string;
    item: string;
    subTitle: string;
    image: string;
}


export type ServicesItem = {
    name: string;
    description: string;
    icon:ComponentType<{ className?:string, size?: number }>;
    image: string;
}


export type CoffeMenu = {
    name: string;
    price: number;
    image: string;
    description: string;
}


export type TestimonialClientsArray = {
    name: string;
    profession: string;
    image: string;
    message: string;
}

export type SocialLink = {
  title: string;
  to: string;
  icon: ComponentType<{ size?: number }>;
};