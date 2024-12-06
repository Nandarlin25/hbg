import React from "react";
import Container from "../../../../components/Container";
import { HiOutlineStar } from "react-icons/hi2";
import quote1 from "../../../../assets/home/quote (1).png";
import quote2 from "../../../../assets/home/quote (2).png";

import useTestimonialStore from "../../../../stores/useTestimonialStore";

const TestimonialSection = () => {
  const {
    testimonials,
    currentIndex,
    setIndex,
   
  } = useTestimonialStore();
  return (
    <section className="bg-secondary-card md:relative py-14 px-6">
      <Container>
        <div className="lg:py-24">
          <div className="md:flex flex-col items-center">
            <h2 className="font-caveat text-[20px] md:text-lg lg:text-3xl ">Testimonials</h2>

            <h1 className="font-heading text-2xl md:text-2xl lg:text-4xl font-bold mt-2 md:mt-4">
              What they says about us...
            </h1>
            <div className="mt-2 md:mt-4 flex justify-start md:justify-center items-center gap-4 ">
              <HiOutlineStar className="fill-stroke  stroke-none w-[30px] h-[30px] md:w-[19px] md:h-[19px] lg:w-[30px] lg:h-[30px]" />
              <HiOutlineStar className="fill-stroke stroke-none w-[30px] h-[30px] md:w-[19px] md:h-[19px] lg:w-[30px] lg:h-[30px]" />
              <HiOutlineStar className="fill-stroke stroke-none w-[30px] h-[30px] md:w-[19px] md:h-[19px] lg:w-[30px] lg:h-[30px]" />
              <HiOutlineStar className="fill-stroke stroke-none w-[30px] h-[30px] md:w-[19px] md:h-[19px] lg:w-[30px] lg:h-[30px]" />

              <HiOutlineStar className="fill-stroke stroke-none w-[30px] h-[30px] md:w-[19px] md:h-[19px] lg:w-[30px] lg:h-[30px]" />
            </div>
            <div className="md:w-2/3">
            <img src={`${quote1}`} alt="" className="md:w-10 md:h-10 w-4 h-4 mr-auto" />
            </div>

            {/* <div className="md:absolute top-0 left-0 translate-x-[300px] translate-y-[230px]">
              <img src={`${quote1}`} alt="" className="w-10 h-10 " />
            </div> */}
            <div className="md:w-2/3">
              <p className="md:mt-5 lg:mt-10 text-secondary text-[12px] lg:text-[22px]">
              {testimonials[currentIndex].testimonial}
              </p>
              <div className="flex mt-14 justify-between">
                <div className="flex gap-4 md:gap-6">
                  <img
                    src={testimonials[currentIndex].img}
                    alt=""
                    className="lg:size-14 size-8 rounded-full"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-[12px] md:text-[16px] lg:text-2xl font-body font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-[12px] md:text-[16px] lg:text-lg font-body text-secondary mt-4">
                    {testimonials[currentIndex].city}
                    </p>
                  </div>
                </div>

                <div>
                    <img src={`${quote2}`} alt="" className="md:w-10 md:h-10 w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
              {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setIndex(index)}
            className={`w-2 h-2 md:w-[11px] lg:w-[19px] md:h-[11px] lg:h-[19px] rounded-full ${
              currentIndex === index
                ? "bg-secondary"
                : "bg-border "
            }`}
          ></button>
        ))}
              

              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
