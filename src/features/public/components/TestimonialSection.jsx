import React from "react";
import Container from "../../../components/Container";
import { HiOutlineStar } from "react-icons/hi2";
import quote1 from "../../../assets/home/quote (1).png";
import quote2 from "../../../assets/home/quote (2).png";

import useTestimonialStore from "../../../stores/useTestimonialStore";

const TestimonialSection = () => {
  const {
    testimonials,
    currentIndex,
    setIndex,
   
  } = useTestimonialStore();
  return (
    <section className="bg-secondary-card relative">
      <Container>
        <div className="py-24">
          <div className="flex flex-col items-center">
            <h2 className="font-caveat text-3xl ">Testimonials</h2>

            <h1 className="font-heading text-4xl font-bold mt-4">
              What they says about us...
            </h1>
            <div className="mt-4 flex justify-center items-center gap-4 ">
              <HiOutlineStar className="fill-stroke  stroke-none w-[30px] h-[30px]" />
              <HiOutlineStar className="fill-stroke stroke-none w-[30px] h-[30px]" />
              <HiOutlineStar className="fill-stroke stroke-none w-[30px] h-[30px]" />
              <HiOutlineStar className="fill-stroke stroke-none w-[30px] h-[30px]" />

              <HiOutlineStar className="fill-stroke stroke-none w-[30px] h-[30px]" />
            </div>
            <div className="absolute top-0 left-0 translate-x-[300px] translate-y-[230px]">
              <img src={`${quote1}`} alt="" className="w-10 h-10 " />
            </div>
            <div className="w-2/3">
              <p className="mt-10 text-secondary text-[22px]">
              {testimonials[currentIndex].testimonial}
              </p>
              <div className="flex mt-14 justify-between">
                <div className="flex gap-6">
                  <img
                    src={testimonials[currentIndex].img}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-body">{testimonials[currentIndex].name}</h3>
                    <p className="text-lg font-body text-secondary mt-4">
                    {testimonials[currentIndex].city}
                    </p>
                  </div>
                </div>

                <div>
                    <img src={`${quote2}`} alt="" className="w-10 h-10 " />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 mt-10">
              {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setIndex(index)}
            className={`w-[19px] h-[19px] rounded-full ${
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
