// import React from "react";
// import { Link } from "react-router-dom";
// import useCookie from "react-use-cookie";
// import Logo from "../../../components/Logo";
// import BookingPage from "../../auth/pages/BookingPage";

// const Header = () => {
//   const [user] = useCookie("user");

//   return (
//     <header className="sticky top-0">
//       <nav className="border-gray-200  px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <span className="self-center font-heading text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Emerald
//             </span>
//           </Link>

//           <div className="flex items-center lg:order-2">
//             <Link
//               to="booking"
//               className="text-gray-800 bg-slate-100 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Book Now
//             </Link>
//           </div>
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <Link
//                   to="/"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="rooms"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Rooms
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="about-us"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About Us
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="services"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Services
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="contact-us"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact Us
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   to="blog"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Blog
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* <div className="relative">
//       <div className="opacity-85 h-[200px]  bg-cover bg-center w-full">
//         <img className="h-[300px] w-full" src=""  alt="" />

//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       </div>

//        <div className="absolute top-0 left-56 z-10">

//        </div>

//       </div> */}
//     </header>
//   );
// };

// export default Header;

// 2
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Rooms", path: "rooms" },
//     { name: "About Us", path: "about-us" },
//     { name: "Services", path: "services" },
//     { name: "Contact Us", path: "contact-us" },
//     { name: "Blog", path: "blog" },
//   ];

//   return (
//     <header className="sticky top-0 z-50">
//       <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-white dark:bg-gray-800">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <span className="self-center font-heading text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Emerald
//             </span>
//           </Link>
//           <div className="flex items-center lg:order-2">
//             <Link
//               to="booking"
//               className="text-gray-800 bg-slate-100 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Book Now
//             </Link>
//           </div>
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// 3
// import React from "react";
// import { Link } from "react-router-dom";

// const navItems = [
//   { name: "Home", to: "/" },
//   { name: "Rooms", to: "/rooms" },
//   { name: "About Us", to: "/about-us" },
//   { name: "Services", to: "/services" },
//   { name: "Contact Us", to: "/contact-us" },
//   { name: "Blog", to: "/blog" },
// ];

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50">
//       <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-white dark:bg-gray-800 shadow-md">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           {/* Brand Logo */}
//           <Link to="/" className="flex items-center">
//             <span className="self-center font-heading text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Emerald
//             </span>
//           </Link>

//           {/* Booking Button */}
//           <div className="flex items-center lg:order-2">
//             <Link
//               to="/booking"
//               className="text-gray-800 bg-slate-100 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               {navItems.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.to}
//                     className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Background Image Section */}
//       <div className="relative">
//         <div className="h-[300px] bg-cover bg-center w-full" style={{ backgroundImage: "url('path-to-your-image.jpg')" }}>
//           <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         </div>
//         {/* Content on the background */}
//         <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white z-10">
//           <h1 className="text-4xl font-bold">Welcome to Emerald</h1>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// 4
// import React from 'react';
// import { Link } from 'react-router-dom';

// const navigationLinks = [
//   { name: 'Home', path: '/', bgImage: '/path/to/home-bg.jpg' },
//   { name: 'Rooms', path: '/rooms', bgImage: '/path/to/rooms-bg.jpg' },
//   { name: 'About Us', path: '/about-us', bgImage: '/path/to/about-us-bg.jpg' },
//   { name: 'Services', path: '/services', bgImage: '/path/to/services-bg.jpg' },
//   { name: 'Contact Us', path: '/contact-us', bgImage: '/path/to/contact-us-bg.jpg' },
//   { name: 'Blog', path: '/blog', bgImage: '/path/to/blog-bg.jpg' },
// ];

// const Header = () => {

//   return (
//     <header className="sticky top-0">
//       <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <span className="self-center font-heading text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Emerald
//             </span>
//           </Link>

//           <div className="flex items-center lg:order-2">
//             <Link
//               to="booking"
//               className="text-gray-800 bg-slate-100 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Book Now
//             </Link>
//           </div>

//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               {navigationLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link
//                     to={link.path}
//                     className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="relative">
//         {navigationLinks.map((link, index) => (
//           <div
//             key={index}
//             className={`h-[70px] w-full bg-cover bg-center`}
//             style={{
//               backgroundImage: `url(${link.bgImage})`,
//             }}
//           >
//             {index === 0 && (
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                 <h1 className="text-white text-4xl font-bold">{link.name}</h1>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </header>
//   );
// };

// export default Header;

// 5
// import React from 'react';
// import { Link } from 'react-router-dom';

// const NAV_LINKS = [
//   { id: 'home', label: 'Home', to: '/', bgImage: '' }
//   { id: 'rooms', label: 'Rooms', to: '/rooms', bgImage: '/path/to/rooms-bg.jpg' },
//   { id: 'about-us', label: 'About Us', to: '/about-us', bgImage: '/path/to/about-bg.jpg' },
//   { id: 'services', label: 'Services', to: '/services', bgImage: '/path/to/services-bg.jpg' },
//   { id: 'contact-us', label: 'Contact Us', to: '/contact-us', bgImage: '/path/to/contact-bg.jpg' },
//   { id: 'blog', label: 'Blog', to: '/blog', bgImage: '/path/to/blog-bg.jpg' },
// ];

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50">
//       <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <span className="self-center font-heading text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Emerald
//             </span>
//           </Link>

//           {/* Booking Button */}
//           <div className="flex items-center lg:order-2">
//             <Link
//               to="/booking"
//               className="text-gray-800 bg-slate-100 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Navigation Menu */}
//           <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               {NAV_LINKS.map((link) => (
//                 <li key={link.id}>
//                   <Link
//                     to={link.to}
//                     id={link.id}
//                     className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Background Sections */}
//       {NAV_LINKS.map((link) => (
//         <div
//           key={link.id}
//           id={link.id}
//           className="relative"
//           style={{
//             backgroundImage: `url(${link.bgImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '70px',
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         </div>
//       ))}
//     </header>
//   );
// };

// export default Header;

// 6
// import React from "react";
// import { Link } from "react-router-dom";
// // import { Link } from "react-router-dom";
// // import homeBg from "../assets/home.jpg"; // Adjust paths based on your folder structure
// // import roomsBg from "../../../assets/rooms.jpg";
// // import aboutUsBg from "../assets/about-us.jpg";
// // import servicesBg from "../assets/services.jpg";
// // import contactUsBg from "../assets/contact-us.jpg";
// // import blogBg from "../assets/blog.jpg";

// import homeBg from "../../../assets/home/home-hero.jpg";
// import roomsBg from "../../../assets/Room/Room-hero.jpg";
// // import aboutUsBg from "../../../assets/about-us/about-us-hero-hero.jpg";
// // import servicesBg from "../../../assets/Service/service-hero.jpg";
// // import contactUsBg from "../../../assets/contact/contact-us-hero.jpg";

// const navLinks = [
//   { id: "home", name: "Home", to: "/", bg: homeBg },
//   { id: "rooms", name: "Rooms", to: "/rooms", bg: roomsBg },
//   // { id: "about-us", name: "About Us", to: "/about-us", bg: aboutUsBg },
//   // { id: "services", name: "Services", to: "/services", bg: servicesBg },
//   // { id: "contact-us", name: "Contact Us", to: "/contact-us", bg: contactUsBg },
//   // { id: "blog", name: "Blog", to: "/blog", bg: blogBg },
// ];

// const Header = () => {
//   return (
//     <header className="sticky top-0">
//       <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <span className="self-center font-heading text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Emerald
//             </span>
//           </Link>
//           <div className="flex items-center lg:order-2">
//             <Link
//               to="/booking"
//               className="text-gray-800 bg-slate-100 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Book Now
//             </Link>
//           </div>
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               {navLinks.map((link) => (
//                 <li key={link.id}>
//                   <Link
//                     to={link.to}
//                     className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Dynamic Background Image Section */}
//       {navLinks.map((link) => (
//         <div
//           id={link.id}
//           key={link.id}
//           className="relative h-[200px] bg-cover bg-center w-full"
//           style={{ backgroundImage: `url(${link.bg})` }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//           <div className="absolute top-0 left-16 z-10 text-white p-4">
//             <h1 className="text-2xl font-bold">{link.name}</h1>
//           </div>
//         </div>
//       ))}
//     </header>
//   );
// };

// export default Header;

// 7

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import homeBg from "../../../assets/home/home-hero.jpg";

// const Header = () => {
//   const location = useLocation();
//   const [backgroundImage, setBackgroundImage] = useState("");

//   // Define navigation links and their corresponding background images
//   const navLinks = [
//     { id: "home", label: "Home", path: "/", bgImage: "assets/home.jpg" },
//     { id: "rooms", label: "Rooms", path: "/rooms", bgImage: "assets/rooms.jpg" },
//     { id: "about-us", label: "About Us", path: "/about-us", bgImage: "assets/about-us.jpg" },
//     { id: "services", label: "Services", path: "/services", bgImage: "assets/services.jpg" },
//     { id: "contact-us", label: "Contact Us", path: "/contact-us", bgImage: "assets/contact-us.jpg" },
//     { id: "blog", label: "Blog", path: "/blog", bgImage: "assets/blog.jpg" },
//   ];

//   // Update background image based on current route
//   useEffect(() => {
//     const currentRoute = navLinks.find((link) => link.path === location.pathname);
//     setBackgroundImage(currentRoute ? currentRoute.bgImage : "");
//   }, [location.pathname]);

//   return (
//     <header className="sticky top-0">
//       {/* Navigation Bar */}
//       <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <span className="self-center font-heading text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Emerald
//             </span>
//           </Link>
//           <div className="flex items-center lg:order-2">
//             <Link
//               to="booking"
//               className="text-gray-800 bg-slate-100 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Book Now
//             </Link>
//           </div>
//           <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               {navLinks.map((link) => (
//                 <li key={link.id}>
//                   <Link
//                     to={link.path}
//                     className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0
//                       dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Dynamic Background Section */}
//       <div
//         className="relative h-[300px] bg-cover bg-center w-full"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../components/Logo";
import useHeaderNavStore from "../../../stores/useHeaderNavStore";
import { useHeaderLinkStore } from "../../../stores/useHeaderLinkStore";
import Container from "../../../components/Container";

const Headers = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const { headercontact } = useHeaderLinkStore();
  const { navLinks, activeLink } = useHeaderNavStore();

  // Function to handle scroll logic
  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  // Function to update the active link based on path
  const updateActiveLink = () => {
    activeLink(location.pathname);
  };

  useEffect(() => {
    // Set up scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once

  useEffect(() => {
    // Update active link when location changes
    updateActiveLink();
  }, [location.pathname]); // Dependency on location.pathname

  // Find the current header content
  const currentHeaderContent = headercontact.find(
    (item) => item.path === location.pathname
  );

  // Render Navigation Links
  const renderNavLinks = () =>
    navLinks.map((link) => (
      <li key={link.label}>
        <Link
          to={link.path}
          className={`block py-2 pr-4 pl-3 ${
            link.isActive ? "text-blue-700" : "text-white"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
        >
          {link.label}
        </Link>
      </li>
    ));

  return (
    <>
    
      <div>
        {/* Sticky Header */}
        <nav
          className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 z-10 transition-all duration-500 ${
            sticky ? "bg-primary" : "bg-transparent"
          }`}
        >
          <Container className={"flex justify-between items-center"}>
          <div className="text-white text-2xl font-bold italic">
            {/* <Logo /> */}
            <Link to="/" className="flex items-center">
              <span className="self-center font-heading font-bold text-4xl whitespace-nowrap dark:text-white">
                Emerald
              </span>
            </Link>
          </div>
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {renderNavLinks()}
          </ul>
          <div className="flex items-center lg:order-2">
            <Link
              to="/booking"
              className="text-gray-800 bg-slate-100 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Book Now
            </Link>
          </div>
          </Container>
        </nav>
        
        {/* Background Section */}
        {currentHeaderContent && currentHeaderContent.bgimage && (
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentHeaderContent.bgimage})`,
          height: "600px",
        }}
      >
        <div className="absolute inset-0  bg-opacity-40"></div>
        <div className="absolute bottom-36 z-10 text-center w-full flex flex-col">
        
        <div className="w-1/2 mx-auto px-4 py-5">
        {currentHeaderContent.title && (
            <h1 className="text-white text-4xl font-caveat font-bold py-3">
              {currentHeaderContent.title}
            </h1>
          )}
          {currentHeaderContent.header && (
            <h3 className="text-white text-5xl font-heading font-bold py-5">
              {currentHeaderContent.header}
            </h3>
          )}
          {currentHeaderContent.paragraph && (
            <p className="text-white text-lg font-emerald font-normal text-pretty ml-10">
              {currentHeaderContent.paragraph}
            </p>
          )}
        </div>
        </div>
      </div>
    )}
      </div>
    
      
    </>
    
  );
};

export default Headers;
