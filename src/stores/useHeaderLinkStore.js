
import homehero from "../assets/Banner/Home hero.webp";
import roomhero from "../assets/Banner/Room hero.webp";
import aboutushero from "../assets/Banner/about us hero .webp";
import servicehero from "../assets/Banner/service hero.webp";
import contactushero from "../assets/Banner/contact us hero.webp";
import bloghero from "../assets/Banner/blog hero.webp";
import bookinghero from "../assets/Room/Booking Detail/booking hero.jpg";
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
     header: "Room",
    },
    {
      path: "/about-us",
      bgimage: aboutushero,
      header: "About Us",
    },
    {
      path: "/services",
      bgimage: servicehero,
     header: "Service",
    },
    {
      path: "/blog",
      bgimage: bloghero,
     header: "Blog",
    },
    {
      path: "/blog-details",
      bgimage: bloghero,
      header: "Blog Detail",
    },
    {
      path: "/contact-us",
      bgimage: contactushero,
     header: "Contact Us",
    },
   
    {
      path: "/faq",
      bgimage: Faqhero,
     header: "FAQ",
    },
    {
      path: "/privacy-policy",
      bgimage: Faqhero,
     header: "Privacy Policy",
    },
    {
      path: "/terms-and-conditions",
      bgimage: Faqhero,
     header: "Terms & Conditions",
    },
    
    {
      path: "/rooms/room-details/booking-details",
      bgimage: bookinghero,
      title: null,
      header: "Booking",
      paragraph: "Your Next Stay Starts Here"
    },
    {
      path: "/rooms/room-details/booking-completed",
      bgimage: null,
      title: null,
      header: null,
    },
    {
      path: "/rooms/room-details",
      bgimage: bloghero,
      title: null,
      header:" Room Detail",
    }
  ],
}));