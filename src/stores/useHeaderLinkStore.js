// store.js


import homehero from "../assets/home/home-hero.jpg";
import roomhero from "../assets/Room/room-hero.jpg";
import aboutushero from "../assets/about-us/about-us-hero.jpg";
import servicehero from "../assets/Service/service-hero.jpg";
import contactushero from "../assets/contact/contact-us-hero.jpg";
import bloghero from "../assets/Blog/blog-hero.jpg";
import bookinghero from "../assets/contact/contact-us-hero.jpg";

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
      header: "Your Next Stay Starts Here",
    },
  ],

    }))