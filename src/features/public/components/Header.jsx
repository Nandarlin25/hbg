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
          className={`block py-2 pr-4 pl-3 nav-link text-zinc-300 font-semibold text-xl tracking-wider font-emerald border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
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
          className={`fixed navbar top-0 left-0 w-full flex items-center justify-between p-4 z-10 transition-all duration-500 ${
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
        <div className="absolute inset-0 bg-opacity-40 bg-zinc-800 opacity-10"></div>
        <div className="absolute bottom-36  text-center w-full flex flex-col">
        
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
