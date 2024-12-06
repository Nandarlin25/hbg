import React from "react";
import Container from "../../../components/Container";
import {
  HiCalendar,
  HiCalendarDays,
  HiChevronUpDown,
  HiMinus,
  HiOutlineCalendar,
  HiOutlineCalendarDays,
  HiPlus,
} from "react-icons/hi2";

const CheckAvailabilityBox = () => {
  return (
    <div className="block  md:absolute  bottom-0 md:translate-y-1/2 w-full bg-secondary-card md:bg-transparent">
    <Container>
    
      

      <div className="block md:flex md:justify-center lg:gap-10 md:items-center max-w-full   md:bg-primary-frame md:border-b-4 border-zinc-900 px-6 py-14 md:p-0 ">

       <div className="py-2 md:py-0 mt-8 md:mt-0">
       <div className="bg-natural-light md:bg-primary-frame md:border-r-2 border-secondary  p-[30px] md:py-0 md:px-4 flex md:block items-center justify-between">
            <p className="text-2xl md:text-[11px]  lg:text-lg text-secondary  ">CHECK IN</p>
            <div className="flex items-center gap-6 md:mt-2 lg:mt-8">
              <span className="text-nowrap text-[22px]  lg:text-[22px] md:text-xs font-bold hidden md:flex">16 Nov 2024</span>
              <span>
                {" "}
                <HiOutlineCalendarDays className="w-8 h-8" />
              </span>
            </div>
          </div>
          
       </div>
       <div className="py-2 mt-8 md:mt-0">
       <div className="py-2 md:py-0 mt-8 md:mt-0">
       <div className="bg-natural-light md:bg-primary-frame md:border-r-2 border-secondary  p-[30px] md:py-0 md:px-4 flex md:block items-center justify-between">
            <p className="text-2xl  md:text-[11px]  lg:text-lg text-secondary ">CHECK OUT</p>
            <div className="flex items-center gap-6 md:mt-2 lg:mt-8">
              <span className="text-nowrap text-[22px] lg:text-[22px] md:text-xs font-bold hidden md:flex">16 Nov 2024</span>
              <span>
                {" "}
                <HiOutlineCalendarDays className="w-8 h-8" />
              </span>
            </div>
          </div>
          
       </div>
          
       </div>
       <div className="py-2 mt-8 md:mt-0">
       <div className=" bg-natural-light md:bg-primary-frame md:border-r-2 border-secondary p-[30px] md:px-6 md:py-0 flex md:block items-center justify-between">
            <p className="text-2xl text-secondary md:text-[11px] lg:text-xl">ADULTS</p>
            <div className="flex items-center justify-center lg:mt-8  md:mt-2">
              <span className="text-nowrap lg:text-[22px] md:text-xs font-bold hidden md:flex">1</span>
              <span>
                {" "}
                <HiChevronUpDown className="w-8 h-8" />
              </span>
            </div>
          </div>
          
       </div>

       <div className="py-2 mt-8 md:mt-0">
           <div className="bg-natural-light md:bg-primary-frame p-[30px] md:px-6 lg:px-4 flex md:block items-center justify-between">
           <p className="text-2xl text-secondary md:text-[11px] lg:text-xl ">CHILDREN</p>
            <div className="flex items-center justify-center lg:mt-8  md:mt-2">
              <span className="text-nowrap  lg:text-[22px] md:text-xs font-bold hidden md:flex">0</span>
              <span>
                {" "}
                <HiChevronUpDown className="w-8 h-8" />
              </span>
            </div>
           </div>
          </div>
       <div className=" hidden md:block py-9  mt-8 md:mt-auto">
        <button className=" md:p-2 lg:p-4 bg-primary md:text-[11px] lg:text-xl text-primary-frame rounded-md"> CHECK AVAILABILITY </button>

      </div>
      <div className="md:hidden mt-10">
          <button className="p-4 bg-primary text-primary-frame w-full rounded-md text-2xl ">Book Now</button>
      </div>
      </div>
    </Container>
  </div>
    
  );
};

export default CheckAvailabilityBox;
