import React, { useState } from "react";
import Container from "../../../../components/Container";

import aboutIntro1 from "../../../../assets/home/about-intro-1.png";
import ServiceSection from "../components/ServiceSection";
import SpecialOfferSection from "../components/SpecialOfferSection";
import BlogIntroSection from "../components/BlogIntroSection";
import TestimonialSection from "../components/TestimonialSection";
import CTASection from "../components/CTASection";
import useHomeRoomsIntroStore from "../../../../stores/useHomeRoomsIntroStore";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const FeatureSection = () => {
  const { rooms } = useHomeRoomsIntroStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ["Column 1", "Column 2", "Column 3", "Column 4"];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      <section className="bg-primary-frame ">
        <Container>
          <div className="block md:grid md:grid-cols-2 gap-[91px] mt-14 md:mt-0 md:py-48 px-6">
            <div className="col-span-1">
              <h2 className="font-caveat text-[20px] md:text-lg lg:text-3xl ">
                Welcome to Emerald
              </h2>
              <h1 className="font-heading text-2xl lg:text-[40px] mt-2 font-bold">
                Our Hotel has been present for over 30 years.
              </h1>
              <p className="font-body text-[16px] md:text-[12px] lg:text-lg mt-6 lg:mt-8 text-secondary">
                We make the best or all our customers.We bring you the best
                hotel deals, exceptional customer service, and a seamless
                booking experience. Our hotel is dedicated to providing you with
                an unforgettable stay, offering a perfect blend of comfort,
                convenience, and personalized service.
              </p>
              <div className=" mt-10 md:mt-8 lg:mt-12">
                <Link
                  to="about-us"
                  className="font-body text-[16px] md:text-xl py-2 px-4 md:px-8 bg-primary rounded-md text-primary-frame"
                >
                  Discover More
                </Link>
              </div>
            </div>
            <div className="col-span-1 order-first mt-14 md:mt-0">
              <img src={`${aboutIntro1}`} alt="" className="" />
            </div>
          </div>


          <div className="w-full mb-24 md:mt-0 lg:mt-14">

            <div className="md:flex flex-col justify-center items-center px-6">
              <h2 className="font-caveat text-primary text-xl md:text-lg lg:text-3xl">
                Welcome to Emerald
              </h2>
              <h1 className="font-heading text-primary text-2xl lg:text-[40px] font-bold mt-2 ">
                Your Dream Luxurious Hotel Room{" "}
              </h1>
              <p className="text-secondary font-body text-[16px] md:text-[12px] lg:text-lg md:text-center mt-6 md:mt-4 lg:mt-8">
                From single rooms to luxurious suites, we have accommodations{" "}
                <br></br> that cater to all types of travellers.{" "}
              </p>
            </div>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-5 mt-16">
              {rooms.map((room, index) => (
                <div className="col-span-1 md:col-span-4" key={index}>
                  <img
                    src={room.roomImg}
                    className="h-80 md:h-60 lg:h-80  "
                    alt=""
                  />
                  <div className=" bg-primary text-primary-frame p-4 rounded-b-[4px]">
                    <p className="text-2xl md:text-[16px] font-body lg:text-2xl">{room.roomName}</p>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-[22px] font-body md:text-[12px] lg:text-[22px]">${room.roomFees}</p>
                      <Link
                        to="rooms"
                        className="bg-primary-frame text-primary text-sm py-2 px-4 rounded-3xl md:text-[11px] lg:text-sm"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex md:hidden flex-col items-center mx-3   mt-8 rounded-t-[4px] ">
              <div
                className="flex  transition-transform duration-500 gap-2 "
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {rooms.map((room, index) => (
                  <div
                    key={index}
                    className="min-w-full   border border-gray-300 "
                  >
                     <img
                    src={room.roomImg}
                    className="h-80 rounded-t-[4px]"
                    alt=""
                  />
                    <div className="min-w-full bg-primary text-primary-frame  rounded-b-[4px]  ">
                    <p className="text-lg font-body font-bold p-2">{room.roomName}</p>
                    <div className="p-2  mt-4 w-full flex flex-wrap justify-between">
                      <span className="text-lg font-body  ">${room.roomFees}</span>
                      <Link
                        to="rooms"
                        className="bg-primary-frame text-primary text-[11px] py-1 px-4 rounded-3xl "
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                    
                  </div>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={handlePrev}
                  className="p-5 bg-natural-light  rounded-full disabled:opacity-50"
                  disabled={currentIndex === 0}
                >
                  <HiChevronLeft className="stroke-primary size-6"/>
                </button>
                <button
                  onClick={handleNext}
                  className="p-5 bg-natural-light rounded-full disabled:opacity-50"
                  disabled={currentIndex === rooms.length - 1}
                >
                  <HiChevronRight className="stroke-primary size-6"/>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ServiceSection />
      <SpecialOfferSection />
      <BlogIntroSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
};

export default FeatureSection;
