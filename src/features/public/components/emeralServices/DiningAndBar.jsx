import React from 'react';
import { dingindData } from '../../../../data/hotelData';

const DiningAndBar = () => {
  return (
    <div className="mt-[100px]">
      <h2 className="text-4xl font-bold mb-12 text-center leading-10 font-heading  text-primary ">
        The Ultimate Dining & Bar Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dingindData.map((dining) => (
          <div
            key={dining.id}
            className="bg-white mb-9 rounded-lg shadow-lg hover:scale-105 overflow-hidden hover:shadow-lg transition-transform border"
          >
            {/* Image Section */}
            <div className="relative h-[350px] w-full p-4">
              <img
                src={dining.image}
                alt={dining.title}
                className="object-cover w-[380px] h-[330px] rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-6 gap-4">
              <h3 className="text-xl text-primary font-bold mb-3 line-clamp-2">
                {dining.title}
              </h3>
              <p className="text-secondary text-base mb-4 line-clamp-2">
                {dining.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiningAndBar;
