import React from "react";
import image1 from "../../../../assets/Service/Pool Swimming/2.jpg";
import image2 from "../../../../assets/Service/Pool Swimming/1.jpg";
import { IoCheckmarkOutline } from "react-icons/io5";
const PoolSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative w-full max-w-[589px] h-[400px] mx-auto hover:scale-105 overflow-hidden hover:shadow-sm transition-transform">
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
            Indoor & Outdoor
          </span>

          {/* Title */}
          <h2 className="text-4xl font-bold font-heading text-primary leading-10 mt-2 mb-6">
            Pool Swimming
          </h2>

          {/* Description */}
          <p className="text-2xl font-heading font-normal leading-8 text-secondary">
            Take a refreshing dip in our swimming pool, an inviting oasis
            designed for relaxation and enjoyment. 
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-2">
              <IoCheckmarkOutline className="text-secondary text-xl" />
              <p className="text-xl font-normal font-emerald text-secondary">
                Indoor pool swimming{" "}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkOutline className="text-secondary text-xl" />
              <p className="text-xl font-normal font-emerald text-secondary">
                Outdoor pool swimming{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="relative w-full max-w-[589px] h-[400px] mx-auto">
            {/* Title */}
            <h2 className="text-5xl font-bold font-heading text-primary leading-10 mt-2 mb-6">
              Relax and Refresh at Our Swimming Pool
            </h2>

            {/* Description */}
            <p className="text-2xl font-heading font-normal leading-8 text-secondary mt-2 mb-6">
              Take a refreshing dip in our swimming pool, an inviting oasis
              designed for relaxation and enjoyment. 
            </p>
            <p className="text-2xl font-heading font-normal leading-8 text-secondary">
              Take a refreshing dip in our swimming pool, an inviting oasis
              designed for relaxation and enjoyment. 
            </p>
          </div>
          {/* Image Section */}
          <div className="relative w-full max-w-[589px] h-[400px] mx-auto  hover:scale-105 overflow-hidden hover:shadow-sm transition-transform">
            <img
              src={image2}
              alt="Luxury buffet station"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolSection;
