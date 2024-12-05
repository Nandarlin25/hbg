import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date=new Date();
  return (
   
      <footer className="bg-zinc-800 text-gray-400 py-8 mt-auto overflow-x-hidden ">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Brand Section */}
          <div className="">
            <h2 className="text-white text-2xl font-bold">Emerald</h2>
            <p className="mt-4 leading-8">
              Beautiful room presentations, straightforward booking &amp;
              reservation options, &amp; a whole lot more awaits here.
            </p>
          </div>
          {/* Explore Links */}
          <div className="">
            <h3 className="text-white text-lg font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Links */}
          <div className="">
            <h3 className="text-white text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact-us" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white">
                  Terms &amp; conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* App & Social Media */}
          <div className="">
            <h3 className="text-white text-lg font-semibold">
              App available on
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play"
                  className="w-28 h-10"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="App Store"
                  className="w-28 h-10"
                />
              </a>
            </div>
            <h3 className="text-white text-lg font-semibold mt-6">Follow Us</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="#"
                className="hover:text-white bg-zinc-950 w-10 h-10 flex justify-center items-center rounded-lg"
              >
                <i className="fa-brands fa-facebook-f text-white text-lg"></i>
              </a>
              <a
                href="#"
                className="hover:text-white bg-zinc-950 w-10 h-10 flex justify-center items-center rounded-lg"
              >
                <i className="fa-brands fa-instagram text-white text-lg"></i>
              </a>
              <a
                href="#"
                className="hover:text-white bg-zinc-950 w-10 h-10 flex justify-center items-center rounded-lg"
              >
                <i className="fa-brands fa-twitter text-white text-lg"></i>
              </a>
              <a
                href="#"
                className="hover:text-white bg-zinc-950 w-10 h-10 flex justify-center items-center rounded-lg"
              >
                <i className="fa-brands fa-linkedin-in text-white text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="py-2">
            Copyrights ©{new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </footer>
   
  );
};

export default Footer;
