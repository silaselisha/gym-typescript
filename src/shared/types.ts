import React from "react";

export enum EnumPages {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus',
    Footer = 'footer'
}

export interface ClassTypes  {
    image: string;
    name: string;
    description?: string;
}