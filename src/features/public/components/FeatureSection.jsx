import React from "react";
import Container from "../../../components/Container";


import aboutIntro1 from "../../../assets/home/about-intro-1.png"
import ServiceSection from "./ServiceSection";
import SpecialOfferSection from "./SpecialOfferSection";
import BlogIntroSection from "./BlogIntroSection";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";
import useHomeRoomsIntroStore from "../../../stores/useHomeRoomsIntroStore";
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";

const FeatureSection = () => {
  const {rooms} = useHomeRoomsIntroStore()
  return (
   <>
         <BookingForm/>

    <section className=" ">
     <Container>
        <div className="grid grid-cols-2 gap-[91px] py-48">
          <div className="col-span-1">
            <img src={`${aboutIntro1}`} alt="" />
          </div>
          <div className="col-span-1">
            <h2 className="font-caveat text-3xl">Welcome to Emerald</h2>
            <h1 className="font-heading text-[40px] mt-2">Our Hotel has been present for over  30 years.</h1>
            <p className="font-body text-lg mt-8">We make the best or all our customers.We bring you the best hotel deals, exceptional customer service, and a seamless booking experience. Our hotel is dedicated to providing you with an unforgettable stay, offering a perfect blend of comfort, convenience, and personalized service.</p>
            <div className="mt-12">
              <Link to="about-us" className="font-body text-xl py-2 px-8 bg-primary rounded-md text-primary-frame">Discover More</Link>
            </div>
          </div>

        </div>

        <div className="w-full mb-24">
         <div className="flex flex-col justify-center items-center">
         <h2 className="font-caveat text-primary text-3xl">Welcome to Emerald</h2>
         <h1 className="font-heading text-primary text-[40px] font-bold mt-2">Your Dream Luxurious Hotel Room </h1>
         <p className="text-secondary font-body text-lg text-center mt-8">From single rooms to luxurious suites, we have accommodations <br></br> that cater to all types of travellers. </p>
         </div>
         <div className="grid grid-cols-12 gap-5 mt-16">
          {rooms.map((room,index) =>(
             <div className="col-span-4" key={index}>
             <img src={room.roomImg} className="h-80 rounded-t-[4px] " alt="" />
             <div className=" bg-primary text-primary-frame p-4 rounded-b-[4px]">
               <p className="text-2xl font-body">{room.roomName}</p>
               <div className="flex justify-between mt-4">
                 <p className="text-[22px] font-body">${room.roomFees}</p>
                 <Link to="rooms" className="bg-primary-frame text-primary text-sm py-2 px-4 rounded-3xl">Book Now</Link>
               </div>
             </div>
           </div>
          ))}
           
         
         </div>
        </div>

      
     </Container>
    </section>
    <ServiceSection/>
    <SpecialOfferSection/>
    <BlogIntroSection/>
    <TestimonialSection/>
    <CTASection/>
    
    </>
  );
};

export default FeatureSection;
