import React from "react";
import Container from "../../../components/Container";

const Footer = () => {
  return (
   
<footer className="bg-stone-900 text-gray-400 py-8 mt-auto">
   <Container>
   <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Brand Section */}
    <div className="">
    <h2 className="text-white text-2xl font-bold">Emerald</h2>
      <p className="mt-4 leading-8">
        Beautiful room presentations, straightforward booking &amp; reservation
        options, &amp; a whole lot more awaits here.
      </p>
    </div>
    {/* Explore Links */}
    <div className="px-24">
      <h3 className="text-white text-lg font-semibold">Explore</h3>
      <ul className="mt-4 space-y-2">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">About us</a></li>
        <li><a href="#" className="hover:text-white">Blog</a></li>
        <li><a href="#" className="hover:text-white">Services</a></li>
      </ul>
    </div>
    {/* Contact Links */}
    <div className="px-8">
      <h3 className="text-white text-lg font-semibold">Contact</h3>
      <ul className="mt-4 space-y-2">
        <li><a href="#" className="hover:text-white">Contact Us</a></li>
        <li><a href="#" className="hover:text-white">FAQ</a></li>
        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white">Terms &amp; conditions</a></li>
      </ul>
    </div>
    {/* App & Social Media */}
    <div className="">
      <h3 className="text-white text-lg font-semibold">App available on</h3>
      <div className="mt-4 flex space-x-4">
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="w-28 h-10" /></a>
      
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="w-28 h-10" /></a>

        
      </div>
      <h3 className="text-white text-lg font-semibold mt-6">Follow Us</h3>
      <div className="mt-4 flex space-x-4">
        <div className="bg-black size-10 flex justify-center items-center rounded-lg">
        <a href="#" className="hover:text-white"><i class="fa-brands fa-facebook-f text text-white text-lg"></i></a>
        </div>

        <div className="bg-black size-10 flex justify-center items-center rounded-lg ">
        <a href="#" className="hover:text-white"><i class="fa-brands fa-instagram text text-white text-lg"></i></a>
        </div>

        <div className="bg-black size-10 flex justify-center items-center rounded-lg">
        <a href="#" className="hover:text-white"><i class="fa-brands fa-twitter text text-white text-lg"></i></a>
        </div>
        
        <div className="bg-black size-10 flex justify-center items-center rounded-lg">
        <a href="#" className="hover:text-white"><i class="fa-brands fa-linkedin-in text text-white text-lg"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-8 border-t border-gray-700 pt-4 text-start">
    <p className="py-2">Copyrights ©2024. All Rights Reserved.</p>
  </div>
   </Container>
</footer>
  );
};

export default Footer;
