import React from "react";
import image1 from "../../../../assets/Service/Fitness Center/first phto.jpeg";
import { IoCheckmarkOutline } from "react-icons/io5";
import { gymData } from "../../../../data/gymData";
const FitnessSection = () => {
  return (
    <section className=" mx-auto  py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative w-full max-w-[589px] h-[400px] md:h-[300px] mx-auto shadow-lg hover:scale-105 overflow-hidden hover:shadow-lg transition-transform">
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
            Training Spaces
          </span>

          {/* Title */}
          <h2 className="text-4xl font-bold font-heading text-primary leading-10 mt-2 mb-6">
            Fitness Center
          </h2>

          {/* Description */}
          <p className="text-2xl font-heading font-normal leading-8 text-secondary">
            Stay active and energized in our state-of-the-art Fitness Center,
            equipped with the latest cardio machines, strength training
            equipment, and free weights. 
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-2">
              <IoCheckmarkOutline className="text-secondary text-xl" />
              <p className="text-xl font-normal font-emerald text-secondary">
                Cardiovascular equipment
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmarkOutline className="text-secondary text-xl" />
              <p className="text-xl font-normal font-emerald text-secondary">
                Some dumbells for weight lifting
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[90px]">
        <h2 className="text-4xl font-bold mb-12 text-center leading-10 font-heading  text-primary ">
          Gym And Yoga At The Hotel
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {gymData.map((gym) => (
            <div
              key={gym.id}
              className="mb-9 rounded-lg shadow-lg hover:scale-105 overflow-hidden hover:shadow-lg transition-transform"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={gym.image}
                  alt={gym.title}
                  className="object-cover w-full h-[330px] rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessSection;
