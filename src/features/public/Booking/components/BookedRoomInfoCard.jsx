import React from 'react';
import bookingRoom from "../../../../assets/Room/R1.jpg";


const BookedRoomInfoCard = () => {
  return (
    <div className="mt-14 lg:mt-[88px] ">
    <div className="py-7 px-4 md:px-[33px] md:flex  border bg-primary-frame md:gap-10 lg:gap-[116px]">
      <div className=" ">
        <h4 className="font-heading text-xs md:text-[16px] lg:text-3xl  font-bold text-nowrap">
          Standard Double Room- Non Refundable
        </h4>
        <p className="mt-[18px] lg:mt-[30px] font-body text-secondary text-[12px] md:text-[11px] lg:text-[22px]">
          A luxury hotel room offers high-end amenities such as premium
          bedding, elegant furnishings, and spacious layouts. It often
          includes extras like a private balcony, personalized service,
          and exclusive access to facilities like spas or lounges.
        </p>
        <div className="mt-[18px] lg:mt-[30px]">
          <div className="flex gap-7 items-center ">
            <span className="font-body text-[12px] lg:text-[22px] font-bold text-primary text-nowrap">
              Service :
            </span>

            <span className="font-body text-[12px] lg:text-[22px]  text-secondary md:text-nowrap">
              Free Breakfast, Free Wifi, Free Water
            </span>
          </div>
          <div className="flex gap-7 items-center ">
            <span className="font-body text-[12px] lg:text-lg font-bold text-primary text-nowrap">
              Special :
            </span>

            <span className="font-body  text-[12px] lg:text-lg text-secondary text-wrap">
              Feature beds, Egyptian cotton bed linen, Voya toiletries,
              Urndown service
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-0">
        <img src={bookingRoom} className="h-full " alt="" />
      </div>
    </div>
  </div>
  )
}

export default BookedRoomInfoCard