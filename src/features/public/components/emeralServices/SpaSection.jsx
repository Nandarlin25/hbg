import React from 'react';
import image1 from "../../../../assets/Service/Spa & Wellness/first photo.jpeg";
import { IoCheckmarkOutline } from "react-icons/io5";
import TherapiesAndMassage from './TherapiesAndMassage';
const SpaSection = () => {
  return (
    <section className=" mx-auto  py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative w-full max-w-[589px] h-[400px] mx-auto shadow-lg hover:scale-105 overflow-hidden hover:shadow-lg transition-transform">
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
            So Many Ways To Unwind
          </span>

          {/* Title */}
          <h2 className="text-4xl font-bold font-heading text-primary leading-10 mt-2 mb-6">
            Spa and Wellness
          </h2>

          {/* Description */}
          <p className="text-2xl font-heading font-normal leading-8 text-secondary">
            Enjoy a range of luxurious treatments, including massages, facials,
            body wraps, and holistic therapies.
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-2">
              <IoCheckmarkOutline className="text-secondary text-xl" />
              <p className="text-xl font-normal font-emerald text-secondary">
                Overnight de-stress retreat
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkOutline className="text-secondary text-xl" />
              <p className="text-xl font-normal font-emerald text-secondary">
                Wedding spa packages
              </p>
            </div>
          </div>
        </div>
      </div>

      <TherapiesAndMassage />
    </section>
  );
}

export default SpaSection;
