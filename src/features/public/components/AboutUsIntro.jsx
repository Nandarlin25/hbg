import React, { useState } from "react";
import Container from "../../../components/Container";
import whoWeAreImage from "../../../assets/about-us/who-we-are.jpg";
import ourMission from "../../../assets/about-us/our-mission.png";
import ourHistory from "../../../assets/about-us/our-history.jpg";
import molly from "../../../assets/about-us/1.jpg";
import alexander from "../../../assets/about-us/2.jpg";
import suzan from "../../../assets/about-us/3.jpg";
import kevin from "../../../assets/about-us/4.jpg";

import dollaricon from "../../../assets/about-us/icon/dollar-and-yen-exchange-svgrepo-com.svg";

import globalicon from "../../../assets/about-us/icon/global-1-svgrepo-com.svg";
import { useStore } from "zustand";
import useSlideStore from "../../../stores/useSlideStore";


const AboutUsIntro = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const { slides } = useSlideStore();

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <main className="bg-zinc-50">
      <Container>
        <div className="mx-auto p-5 mb-2 max-w-screen-lg mt-6">
          <div className="text-star-solid flex justify-center items-center gap-3 mb-3">
            <i className="fa-solid fa-star text-xl"></i>
            <i className="fa-solid fa-star text-xl"></i>
            <i className="fa-solid fa-star text-xl"></i>
            <i className="fa-solid fa-star text-xl"></i>
            <i className="fa-solid fa-star text-xl"></i>
          </div>
          <h3 className="text-center font-caveat text-2xl">
            Welcome to Emerald
          </h3>
          <h1 className="font-heading text-lg sm:text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-5">
            We Always Care about Your experience
          </h1>
          <div className="px-5">
            <p className="text-zinc-500 sm:text-lg font-emerald text-pretty text-center tracking-wider">
              Immerse yourself in luxury and freshness with stunning views and
              enjoy with elegant and luxurious rooms. Let’s start a journey to
              discover [Hotel]
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row min-h-[300px] md:min-h-[500px] m-10 gap-1">
          <div className="md:w-1/2">
            <img
              className="object-cover w-full h-auto"
              src={whoWeAreImage}
              alt="Who We Are"
            />
          </div>
          <div className="md:w-1/2 flex flex-col md:mt-16 px-7">
            <p className="font-caveat text-xl mb-2">About Us</p>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold mb-4">
              Who We Are{" "}
            </h2>
            <p className="text-zinc-500 text-base sm:text-lg font-emerald text-pretty tracking-wide leading-relaxed mb-4">
              Our team of travel experts, tech enthusiasts, and customer service
              professionals are committed to making your booking experience
              seamless.
            </p>
            <p className="text-zinc-500 text-base sm:text-lg font-emerald text-pretty tracking-wide leading-relaxed">
              With our extensive network of hotels, exclusive offers, and
              user-friendly platform, we aim to empower you to make confident
              decisions and enjoy every aspect of your trip.
            </p>
          </div>
          <div></div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-row-reverse min-h-[300px] md:min-h-[500px] m-10">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              className="object-cover w-full h-auto"
              src={ourMission}
              alt="Our mission"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 mt-10">
            <p className="font-caveat text-xl">About Us</p>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold mb-1">
              Our Mission
            </h2>
            <p className="text-zinc-500 text-base sm:text-lg font-emerald tracking-wide leading-7">
              Our mission is simple: to make travel easier for everyone,
              everywhere.
            </p>

            {/* Best Price Section */}
            <div className="flex items-center mt-5 gap-5">
              <img className="w-16 h-16" src={dollaricon} alt="Dollar icon" />
              <div>
                <h3 className="text-zinc-900 text-xl font-bold font-emerald tracking-wide leading-7">
                  Best Price, Always
                </h3>
                <p className="text-zinc-500 text-lg font-emerald tracking-wide leading-7">
                  We provide competitive rates and exclusive deals to ensure you
                  get the best value.
                </p>
              </div>
            </div>

            {/* Global Reach Section */}
            <div className="flex items-center mt-5 gap-5">
              <img className="w-16 h-16" src={globalicon} alt="Global icon" />
              <div>
                <h3 className="text-zinc-900 text-xl font-bold font-emerald tracking-wide leading-7">
                  Global Reach
                </h3>
                <p className="text-zinc-500 text-lg font-emerald tracking-wide leading-7">
                  We’re committed to offering hotel bookings in destinations
                  worldwide, so you can travel anywhere with ease.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] m-5 lg:m-10 gap-4">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              className="object-cover h-64 lg:h-full w-full"
              src={ourHistory}
              alt="Who We Are"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-16 px-4 lg:px-7">
            <p className="font-caveat text-lg lg:text-xl mb-2">About Us</p>
            <h2 className="font-heading text-2xl lg:text-4xl font-bold mb-4">
              Our History
            </h2>
            <p className="text-zinc-500 text-base lg:text-lg font-emerald tracking-wide leading-6 lg:leading-7 mb-4">
              Start simple, but aim big. We focused on creating an easy-to-use
              website and partnering with hotels worldwide. As we grew, we kept
              expanding our offerings to meet more travel needs.
            </p>

            {/* Checkbox List */}
            {[
              "Growth and Innovation",
              "Build strong partnerships.",
              "Embrace innovation.",
              "Innovating Over Time",
            ].map((item, index) => (
              <div
                key={index}
                className="text-zinc-500 text-base lg:text-xl font-emerald tracking-wide leading-6 lg:leading-7 mb-3 flex items-center"
              >
                <input
                  type="checkbox"
                  className="text-zinc-900 h-5 w-5 rounded-md"
                  checked
                  readOnly
                />
                <span className="pl-2">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center p-8 space-y-8">
          <div className="flex flex-col justify-center items-center -mb-5">
            <p className="font-caveat text-xl mb-2">About Us</p>
            <h2 className="font-heading text-4xl font-bold">Our Teams</h2>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
          {[
            { name: "Molly", role: "Manager", img: molly },
            { name: "Alexander", role: "CEO", img: alexander },
            { name: "Suzan", role: "Receptionist", img: suzan },
            {
              name: "Kevin",
              role: "Director",
              img: kevin,
              customClass: "object-[center-top]",
            },
          ].map(({ name, role, img, customClass = "object-cover" }, index) => (
            <div key={index} className="text-center flex flex-col p-5">
              <img
                src={img}
                alt={name}
                className={`w-full h-[300px] rounded-md ${customClass}`}
              />
              <h3 className="mt-4 text-lg font-medium">{name}</h3>
              <p className="text-zinc-600">{role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 py-4">
          <button className="size-3 rounded-full bg-zinc-500 hover:bg-gray-600" />
          <button className="size-3 rounded-full bg-zinc-400 hover:bg-gray-600" />
        </div>

        <div className=" min-h-[300px] p-5 bg-zinc-100 mb-5">
          <div className="w-[900px] mx-auto p-5">
            <h3 className="text-center font-caveat text-2xl mb-3">
              Testimonials
            </h3>
            <h1 className="font-heading text-4xl font-bold text-center mb-3">
              What they says about us...
            </h1>
            <div className="text-star-solid flex justify-center items-center gap-3 mb-3">
              <i className="fa-solid fa-star text-xl"></i>
              <i className="fa-solid fa-star text-xl"></i>
              <i className="fa-solid fa-star text-xl"></i>
              <i className="fa-solid fa-star text-xl"></i>
              <i className="fa-solid fa-star text-xl"></i>
            </div>

            {/* Carousel Section */}
            <div className="relative px-14 rounded-lg w-full mx-auto">
              <div className="absolute -top-7 left-0 ">
                <i class="fa-solid fa-quote-left text-2xl text-zinc-800 "></i>
              </div>
              <div className="text-zinc-500 text-xl font-emerald tracking-normal leading-7 h-[90px]">
                {slides[activeSlide].text}
              </div>
              <div className="flex items-center mt-4">
                <img
                  src={slides[activeSlide].img}
                  alt={slides[activeSlide].name}
                  className="size-12 object-cover rounded-full"
                />

                <div className="pl-4">
                  <h4 className="text-lg">{slides[activeSlide].name}</h4>
                  <p className="text-gray-500 text-sm">
                    {slides[activeSlide].location}
                  </p>
                </div>
              </div>
              <div className="flex justify-center space-x-2 py-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`size-3 rounded-full ${
                      index === activeSlide ? "bg-zinc-500" : "bg-zinc-400"
                    } hover:bg-gray-600`}
                  />
                ))}
              </div>
              <div className="absolute bottom-16 right-36">
                <i class="fa-solid fa-quote-right text-2xl text-zinc-800 "></i>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative px-14 rounded-lg w-full mx-auto">
          <div className=" min-h-[300px] p-5 bg-zinc-100 mb-5">
            <div className="absolute -top-7 left-0">
              <i className="fa-solid fa-quote-left text-2xl text-zinc-800" />
            </div>

            <div className="text-zinc-500 text-xl font-emerald tracking-normal leading-7 h-[90px]">
              {slides[activeSlide].text}
            </div>

            <div className="flex items-center mt-4">
              <img
                src={slides[activeSlide].img}
                alt={slides[activeSlide].name}
                className="size-12 object-cover rounded-full"
              />
              <div className="pl-4">
                <h4 className="text-lg">{slides[activeSlide].name}</h4>
                <p className="text-gray-500 text-sm">
                  {slides[activeSlide].location}
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 py-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`size-3 rounded-full ${
                    index === activeSlide ? "bg-zinc-500" : "bg-zinc-400"
                  } hover:bg-gray-600`}
                />
              ))}
            </div>

            <div className="absolute bottom-16 right-36">
              <i className="fa-solid fa-quote-right text-2xl text-zinc-800" />
            </div>
          </div>
        </div> */}
      </Container>
    </main>
  );
};

export default AboutUsIntro;
