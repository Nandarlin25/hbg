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

const BookingForm = () => {
  return (
     <div className="absolute  bottom-0 -translate-y-1/2 w-full">
       <Container>
       
         
         <div className="flex justify-center gap-10 items-center max-w-full bg-zinc-50 border-b-4 border-zinc-900 p-8  ">
          <div className="py-2">
          <div className="border-r-2 border-zinc-500 px-4">
               <p className="text-lg text-zinc-500 ">CHECK IN</p>
               <div className="flex items-center gap-6 mt-8">
                 <span className="text-nowrap text-[22px]">16 Nov 2024</span>
                 <span>
                   {" "}
                   <HiOutlineCalendarDays className="w-8 h-8" />
                 </span>
               </div>
             </div>
             
          </div>
          <div className="py-2">
          <div className="border-r-2 border-zinc-500 px-4">
               <p className="text-lg text-zinc-500 ">CHECK IN</p>
               <div className="flex items-center gap-6 mt-8 ">
                 <span className="text-nowrap text-[22px]">16 Nov 2024</span>
                 <span>
                   {" "}
                   <HiOutlineCalendarDays className="w-8 h-8" />
                 </span>
               </div>
             </div>
             
          </div>
          <div className="py-2 ">
          <div className="border-r-2 border-zinc-500 px-6">
               <p className="text-lg text-zinc-500 ">ADULTS</p>
               <div className="flex items-center justify-center mt-8">
                 <span className="text-nowrap text-[22px]">1</span>
                 <span>
                   {" "}
                   <HiChevronUpDown className="w-8 h-8" />
                 </span>
               </div>
             </div>
             
          </div>

          <div className="py-2">
              <div className="px-4">
              <p className="text-lg text-zinc-500 ">CHILDREN</p>
               <div className="flex items-center justify-center mt-8">
                 <span className="text-nowrap text-[22px]">0</span>
                 <span>
                   {" "}
                   <HiChevronUpDown className="w-8 h-8" />
                 </span>
               </div>
              </div>
             </div>
          <div className="mt-auto ">
           <button className="p-4 bg-zinc-900 text-zinc-50 rounded-md"> CHECK AVAILABILITY </button>

         </div>
         </div>
       </Container>
     </div>
  // 
  );
};

export default BookingForm;
