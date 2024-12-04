// store.js


import homehero from "../assets/Banner/Home hero.jpg";
import roomhero from "../assets/Banner/Room hero.jpg";
import aboutushero from "../assets/Banner/about us hero .jpg";
import servicehero from "../assets/Banner/service hero.jpg";
import contactushero from "../assets/Banner/contact us hero.jpg";
import bloghero from "../assets/Banner/blog hero.jpg";
import bookinghero from "../assets/Banner/Room hero.jpg";
import  Faqhero from "../assets/FTPhero.png";

import { create } from "zustand";


export const useHeaderLinkStore = create(() => ({
  headercontact: [
    {
      path: "/",
      bgimage: homehero,
      title: "Welcome to emerald",
      header: "Maximum luxury. Exclusive sensation.",
      paragraph:
        "When you get into a hotel room, you lock the door, and you know there is a secrecy, there is a luxury, there is fantasy.",
    },
    {
      path: "/rooms",
      bgimage: roomhero,
     title: "Room",
    },
    {
      path: "/about-us",
      bgimage: aboutushero,
      title: "About Us",
    },
    {
      path: "/services",
      bgimage: servicehero,
     title: "Service",
    },
    {
      path: "/blog",
      bgimage: bloghero,
     title: "Blog",
    },
    {
      path: "/contact-us",
      bgimage: contactushero,
     title: "Contact Us",
    },
    {
      path: "/booking",
      bgimage: bookinghero,
     title: "Booking",
      title: "Your Next Stay Starts Here",
    },
    {
      path: "/faq",
      bgimage: Faqhero,
     title: "FAQ",
    },
    {
      path: "/privacy-policy",
      bgimage: Faqhero,
     title: "Privacy Policy",
    },
    {
      path: "/terms-and-conditions",
      bgimage: Faqhero,
     title: "Terms & Conditions",
    },
  ],
}));