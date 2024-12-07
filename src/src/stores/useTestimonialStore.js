import { create } from 'zustand';
import testimonial1 from "../assets/home/testimonial/testmonial 1.jpg"

import testimonial2 from "../assets/home/testimonial/testmonial 2.jpg"
import testimonial3 from "../assets/home/testimonial/testmonial 3.jpg"

const useTestimonialStore = create((set) => ({
  testimonials: [
    { id: 1, name: "Harry",img:testimonial1 , city: "London", testimonial: "Smooth booking process, excellent service, and comfortable accommodations. Highly recommend this hotel for future stays. The staff was friendly and attentive, and the amenities exceeded our expectations. " },
    { id: 2, name: "Helen",img:testimonial2 , city: "NewYork", testimonial: "We had our company annual offsite at Emerald Hotel. Emerald Hotel was the perfect choice for us there are multiple large event spaces for various activities and the great staff made sure the events went smoothly." },
    { id: 3, name: "Emily Ann",img:testimonial3, city: "Australia", testimonial: "I had a wonderful experience. Everything was top-notch, from the service to the amenities.The hotel exceeded all expectations. Clean, comfortable, and great value." },
  ],
  currentIndex: 0,
  setIndex: (index) => set({ currentIndex: index }),
  nextTestimonial: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex + 1) % state.testimonials.length,
    })),
  prevTestimonial: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex - 1 + state.testimonials.length) %
        state.testimonials.length,
    })),
}));

export default useTestimonialStore;
