import React from 'react';
import { spaData } from '../../../../data/SpaData';


const TherapiesAndMassage = () => {
  return (
    <div className="mt-[100px] ">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mb-6 text-center leading-10 font-heading text-primary">
        Therapies And Massage
      </h2>
      <p className="w-full md:w-[1000px] mx-auto text-secondary font-emerald font-normal text-xl leading-6 mb-12 text-center">
        Quality Service. Attention to Detail. Relaxation at its best. Our waxing
        services gently remove hair, leaving the skin comfortable and smooth.
      </p>

      {/* Spa Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {spaData.map((spa) => (
    <div
      key={spa.title}
      className="relative overflow-hidden rounded-lg transition-transform hover:scale-105"
    >
      {/* Image Section */}
      <div className="relative h-[350px]">
        <img
          src={spa.image}
          alt={spa.title}
          className="object-cover w-full h-full"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex  items-end justify-center bg-primary bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
          <h3 className="text-4xl font-heading font-bold text-primary-frame mb-6">
            {spa.title}
          </h3>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default TherapiesAndMassage;
