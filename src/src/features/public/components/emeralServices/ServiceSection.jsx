// import React from "react";
// import { Link } from "react-router-dom";
// import { useServiceStore } from "../../../../stores/useServiceStore";

// import RestaurantSection from "./RestaurantSection";
// import SpaSection from "./SpaSection";
// import PoolSection from "./PoolSection";
// import FitnessSection from "./FitnessSection";


// const ServiceSection = () => {
//   const { services, selectService, selectedService } = useServiceStore();

//   return (
//     <>
//       <section className="container mx-auto px-4 py-16 mb-6 mt-6">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold leading-9 font-heading text-primary mb-2">
//             OUR SERVICES
//           </h2>
//           <h3 className="text-5xl font-bold leading-10 font-heading text-primary mb-6">
//             HOTEL FACILITIES
//           </h3>
//           <p className="text-2xl font-normal leading-8 text-secondary max-w-3xl mx-auto mb-8">
//             With 24/7 customer support and a best-price guarantee, we're
//             committed to making your booking experience smooth and stress-free.
//           </p>

//           <Link
//             to="/rooms"
//             className="inline-flex items-center justify-center bg-primary text-white py-2 px-8 rounded-md min-w-52 h-14 font-emerald font-normal text-xl leading-6 text-center mb-12"
//           >
//             Book Now
//           </Link>
//         </div>

//         {/* Service Tabs */}
//         <div className="flex items-center justify-center gap-8 w-full mt-12">
//           {services.map((service) => (
//             <button
//               key={service.id}
//               onClick={() => selectService(service)}
//               className={`${
//                 selectedService?.id === service.id
//                   ? "active bg-secondary-card border text-primary py-2 px-8 font-emerald font-normal text-3xl w-[316px] h-[117px] leading-6 text-center"
//                   : "border text-primary py-2 px-8 font-emerald font-normal text-3xl w-[316px] h-[117px] leading-6 text-center"
//               }`}
//             >
//               {service.title}
//             </button>
//           ))}
//         </div>

//         {/* Dynamic Content Rendering */}
//         <div className="service-details mt-12">
//           {selectedService?.id === 1 && <RestaurantSection />}
//           {selectedService?.id === 2 && <SpaSection />}
//           {selectedService?.id === 3 && <PoolSection/>}
//           {selectedService?.id === 4 && <FitnessSection />} 
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceSection;
import React from "react";
import { Link } from "react-router-dom";
import { useServiceStore } from "../../../../stores/useServiceStore";
import RestaurantSection from "./RestaurantSection";
import SpaSection from "./SpaSection";
import PoolSection from "./PoolSection";
import FitnessSection from "./FitnessSection";


const ServiceSection = () => {
  
  const { services, selectService, selectedService } = useServiceStore();

  // Default to the first service if none is selected
  const currentService = selectedService || services[0];

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-8 sm:leading-9 font-heading text-primary mb-4 lg:mb-6">
            {currentService.title}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-9 sm:leading-10 font-heading text-primary mb-4 lg:mb-6">
            HOTEL FACILITIES
          </h3>

          <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-7 sm:leading-8 text-secondary max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-6 lg:mb-8">
            With 24/7 customer support and a best-price guarantee, we're
            committed to making your booking experience smooth and stress-free.
          </p>

          <Link
            to="/rooms"
            className="inline-flex items-center justify-center bg-primary text-white py-2 px-6 sm:px-8 rounded-md w-full sm:w-auto min-w-[10rem] h-12 sm:h-14 font-emerald font-medium text-base sm:text-xl leading-6 text-center"
          >
            Book Now
          </Link>
        </div>

        {/* Service Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 lg:mt-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => selectService(service)}
              className={`${
                currentService.id === service.id
                  ? "active bg-secondary-card border text-primary py-3 lg:py-4 px-6 lg:px-8 font-emerald font-medium lg:font-semibold text-lg lg:text-xl w-full h-[80px] lg:h-[100px] leading-6 text-center"
                  : "border text-primary py-3 lg:py-4 px-6 lg:px-8 font-emerald font-medium lg:font-semibold text-lg lg:text-xl w-full h-[80px] lg:h-[100px] leading-6 text-center"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Dynamic Content Rendering */}
        <div className="service-details mt-8 lg:mt-12">
          {currentService.id === 1 && <RestaurantSection />}
          {currentService.id === 2 && <SpaSection />}
          {currentService.id === 3 && <PoolSection />}
          {currentService.id === 4 && <FitnessSection />}
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
