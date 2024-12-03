import React from 'react';
import image1 from "../../../../assets/Service/Restauarant/R1.png";
import image2 from "../../../../assets/Service/Restauarant/R2.png";
import DiningAndBar from './DiningAndBar';
const RestaurantSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="container mx-auto px-4 ">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative w-[589px] h-[400px] hover:scale-105 overflow-hidden hover:shadow-sm transition-transform ">
            <img
              src={image1}
              alt="Luxury buffet station"
              className="rounded-lg w-[327px] h-[330px]"
            />
            <img
              src={image2}
              alt="Restaurant dining area"
              className="rounded-lg w-[299px] h-[277px] absolute top-36 right-10"
            />
          </div>
          <div className="lg:pl-12 w-[652px] h-[236px]">
            <span className="text-3xl font-normal font-caveat leading-9 text-primary">
              Our Services
            </span>
            <h2 className="text-4xl font-bold font-heading text-primary leading-10 mt-2 mb-6">
              Restaurant
            </h2>
            <p className="text-2xl font-heading font-normal leading-8 text-secondary ">
              Enjoy on-site restaurants serving local and international cuisine,
              or take advantage of 24/7 room service for meals in the comfort of
              your room.
            </p>
          </div>
        </div>
        <DiningAndBar />
      </div>
    </section>
  );
}

export default RestaurantSection;
