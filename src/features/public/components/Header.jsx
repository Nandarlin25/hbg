import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useHeaderNavStore from "../../../stores/useHeaderNavStore";
import { useHeaderLinkStore } from "../../../stores/useHeaderLinkStore";
import Container from "../../../components/Container";
import BreadCrumb from "./BreadCrumb";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { RiHotelLine } from "react-icons/ri";
import CheckAvailabilityBox from "./CheckAvailabilityBox";
import Logo from "../../../components/Logo";
import test from "../../../assets/test.jpg"



const Headers = () => {
  const [sticky, setSticky] = useState(false);
  const location =useLocation();
  const { headercontact } = useHeaderLinkStore();
  const { navLinks, activeLink } = useHeaderNavStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle scroll logic
  const handleScroll = () => {
    setSticky(window.scrollY > 50);
  };

  const phoneToogleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenuIcon = () => {
    setIsMenuOpen(false);
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
  }, []);

  useEffect(() => {
    // Update active link when location changes
    updateActiveLink();

  }, [location.pathname]);

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
          className={`block py-2 pr-4 pl-3 nav-link text-primary-frame font-normal text-xl tracking-wider font-emerald border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
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
          sticky || !currentHeaderContent?.bgimage ? "bg-primary" : "bg-transparent" 
        }`}
      >
        
          <Container className={"flex justify-between items-center px-7"}>
            <div className="text-white font-bold italic tracking-wide">
              <Link to="/" className="flex items-center gap-2">
                <Logo />
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className="hidden lg:flex space-x-6 text-lg font-medium">
              {renderNavLinks()}
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/rooms"
                className={`rounded-lg px-6 py-3 text-lg shadow-md  ${
                  sticky
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-white text-primary hover:bg-primary hover:text-primary-frame"
                }`}
              >
                Book Now
              </Link>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <Link
                to="/rooms"
                className={`rounded-lg px-2 py-1.5 text-[10px] md:px-6 md:py-3 md:text-sm shadow-md md:text-center ${
                  sticky
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-white text-primary hover:bg-primary-dark"
                }`}
              >
                Book Now
              </Link>

              {/* Menu Icon */}
              <button
                onClick={phoneToogleMenu}
                className="text-white focus:ring-2 focus:ring-offset-2 focus:ring-primary menu-icon"
                aria-label="Toggle Navigation"
              >
                <RxHamburgerMenu className="text-xl md:text-2xl bg-primary-frame text-primary" />
              </button>

              {/* Book Now Button */}
            </div>
          </Container>
        </nav>

        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
              onClick={closeMenuIcon}
            />

            {/* Mobile Menu */}
            <ul
              className={`fixed top-0 right-0 bg-secondary-card text-primary z-20 w-48 pt-8 h-full shadow-lg transform transition-transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={closeMenuIcon}
                className="absolute top-4 right-4 text-primary hover:text-red-500 focus:outline-none"
              >
                <IoMdClose className="text-2xl" />
              </button>

              {/* Navigation Links */}
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-sm md:text-lg font-medium py-2 px-2 md:py-4 md:px-6 hover:bg-gray-700 hover:text-white flex items-center gap-2 transition duration-200"
                >
                  <RiHotelLine className="text-lg" />

                  <Link
                    className="text-primary text-xs"
                    to={link.path}
                    onClick={closeMenuIcon}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Background Section */}
        {currentHeaderContent && currentHeaderContent.bgimage && (
          <div

            className="md:relative md:bg-cover bg-center bg-no-repeat md:h-[400px] lg:h-[600px]"

            style={{
              backgroundImage: `url(${currentHeaderContent.bgimage})`,
              // height: "600px",
            }}
          >
            <div className="md:absolute "></div>
            <div className="md:absolute bottom-24 w-full lg:bottom-36 text-center  flex flex-col items-center py-12 md:pt-0 md:space-y-4 px-6">

              {currentHeaderContent.title && (
                <h3 className="text-white text-sm md:text-3xl lg:text-4xl font-normal font-caveat">
                  {currentHeaderContent.title}
                </h3>
              )}
              {currentHeaderContent.header && (
                <h1 className="text-white text-md md:text-4xl lg:text-5xl font-bold font-heading drop-shadow-md">
                  {currentHeaderContent.header}
                </h1>
              )}
              {/* Breadcrumb Section */}
              {location.pathname !== "/" && (
                <div className="mt-4">
                  <BreadCrumb
                    currentPageTitle={currentHeaderContent.header}
                    links={[{ path: "/", label: "Home" }]}
                    className="text-white font-normal font-heading text-xl"
                  />
                </div>
              )}

              {currentHeaderContent.paragraph && (
                <p className="text-white text-xs  md:w-full text-start md:text-center md:text-lg lg:text-xl max-w-3xl">
                  {currentHeaderContent.paragraph}
                </p>
              )}
            </div>
            {currentHeaderContent.path === "/" && <CheckAvailabilityBox />}
            {currentHeaderContent.path === "/rooms" && <CheckAvailabilityBox />}
          </div>
        )}
      </div>
    </>
  );
};

export default Headers;
