import React from 'react';
import image1 from "../../../../assets/Service/Restauarant/restaurant.png";
import DiningAndBar from './DiningAndBar';

const RestaurantSection = () => {
  return (
    <section className=" mx-auto  py-8">
      <div className="grid lg:grid-cols-2  gap-8 items-center">
        {/* Image Section */}
        <div className="relative w-full max-w-[589px] h-[400px] mx-auto shadow-sm hover:scale-105 overflow-hidden hover:shadow-sm transition-transform">
          <img
            src={image1}
            alt="Luxury buffet station"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:pl-12">
          {/* Subtitle */}
          <span className="text-3xl font-normal font-caveat leading-9 text-primary">
            Our Services
          </span>

          {/* Title */}
          <h2 className="text-4xl font-bold font-heading text-primary leading-10 mt-2 mb-6">
            Restaurant
          </h2>

          {/* Description */}
          <p className="text-2xl font-heading font-normal leading-8 text-secondary">
            Enjoy on-site restaurants serving local and international cuisine,
             or take advantage of 24/7 room service for meals in the comfort
            of your room.
          </p>
        </div>
      </div>

      <DiningAndBar />
    </section>
  );
}

export default RestaurantSection;
