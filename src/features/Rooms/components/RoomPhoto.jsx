import React, { useState } from 'react'
import img1 from '../../../assets/Room/Room-details/Room 1.jpg'
import img2 from '../../../assets/Room/Room-details/Room 2.jpg'
import img3 from '../../../assets/Room/Room-details/Room 3.jpeg'
import Container from '../../../components/Container'


const RoomPhoto = ({divWidth}) => {
  const images=[
    {
      id:1,
      image:img1
    },
    {
      id:2,
      image:img2
    },
    {
      id:3,
      image:img3
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

console.log(divWidth);
  return (
    <div className='relative'>
          <div>
            <button type="button" onClick={prevSlide} className="absolute z-0 lg:top-[330px] md:top-[145px] top-[77px] border-secondary-card lg:-left-2 md:-left-3 -left-2 flex items-center justify-center lg:w-10 lg:h-10 w-6 h-6 bg-white rounded-full shadow-md -translate-y-1/2 hover:bg-gray-200" data-carousel-prev>
            <span className="sr-only">Previous</span>
            <svg aria-hidden="true" className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button type="button" onClick={nextSlide} className="absolute z-0 lg:top-[330px] md:top-[145px] top-[77px] border-secondary-card lg:-right-2 md:-right-3 -right-2 flex items-center justify-center lg:w-10 lg:h-10 w-6 h-6 bg-white rounded-full shadow-md -translate-y-1/2 hover:bg-gray-200" data-carousel-next>
            <span className="sr-only">Next</span>
            <svg aria-hidden="true" className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          </div>
      <div className={`w-full md:w-[768px] sm:w-[640px]  lg:w-[1024px] xl:w-[1280px] overflow-x-hidden mx-auto relative -z-0 `}>
      
          
  <div className='lg:py-[72px] md:py-[40px] w-full py-[24px] flex flex-col justify-items-center relative'>
    <div id="carousel" className="relative w-full flex justify-center" data-carousel="static">
      <div className="relative lg:h-[550px]  lg:rounded-[40px] md:rounded-[30px] rounded-[20px] md:h-80 h-72 w-full">
        {/* Slides */}
        <div className={` flex duration-700 w-full ease-in-out`} data-carousel-item>
          
          <div className='w-full'>
            {images.map((image) => {
              return (
                <div key={image.id}>
                  <img src={images[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="absolute w-full block  object-cover lg:h-[540px] md:h-[290.64px] h-[160px] lg:rounded-tl-[90px] md:rounded-tl-[70px] rounded-tl-[30px] lg:rounded-br-[90px] md:rounded-br-[70px] rounded-br-[30px]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

  )
}

export default RoomPhoto