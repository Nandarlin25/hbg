
import { create } from "zustand";
import test1 from "../assets/about-us/testimonial/1.jpg";
import test2 from "../assets/about-us/testimonial/2.jpg";
import test3 from "../assets/about-us/testimonial/3.jpg";

// import test1 from "../../../assets/about-us/testimonial/1.jpg";
// import test2 from "../../../assets/about-us/testimonial/2.jpg";
// import test3 from "../../../assets/about-us/testimonial/3.jpg";

const useSlideStore = create(() => ({
    slides : [
      {
        id: 1,
        text: "Smooth booking process, excellent service, and comfortable accommodations. Highly recommend this hotel for future stays. The staff was friendly and attentive, and the amenities exceeded our expectations.",
        name: "Harry",
        location: "London",
        img: test1, // Replace with the actual image URL
      },
      {
        id: 2,
        text: "Amazing experience! The rooms were spacious, and the view was breathtaking. The staff made sure we had everything we needed.",
        name: "Emily",
        location: "New York",
        img: test2, // Replace with the actual image URL
      },
      {
        id: 3,
        text: "A true five-star experience! Everything from the food to the service was impeccable. Can't wait to come back.",
        name: "James",
        location: "Paris",
        img: test3, // Replace with the actual image URL
      },
    ]
  }
));

export default useSlideStore;

