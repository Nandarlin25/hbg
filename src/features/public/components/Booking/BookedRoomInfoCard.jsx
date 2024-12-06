import React from 'react'
import bookingRoom from "../../../assets/Room/R1.jpg";

const BookedRoomInfoCard = () => {
  return (
    <div className="mt-[88px] ">
    <div className="py-7 px-[33px] flex  border  gap-[116px]">
      <div className=" ">
        <h4 className="font-heading text-3xl font-bold">
          Standard Double Room- Non Refundable
        </h4>
        <p className="mt-[30px] font-body text-secondary text-[22px]">
          A luxury hotel room offers high-end amenities such as premium
          bedding, elegant furnishings, and spacious layouts. It often
          includes extras like a private balcony, personalized service,
          and exclusive access to facilities like spas or lounges.
        </p>
        <div className="mt-[30px]">
          <div className="flex gap-7 items-center">
            <span className="font-body text-[22px] font-bold text-primary">
              Service :
            </span>

            <span className="font-body text-lg text-secondary">
              Free Breakfast, Free Wifi, Free Water
            </span>
          </div>
          <div className="flex gap-7 items-center ">
            <span className="font-body text-[22px] font-bold text-primary text-nowrap">
              Special :
            </span>

            <span className="font-body text-lg text-secondary text-wrap">
              Feature beds, Egyptian cotton bed linen, Voya toiletries,
              Urndown service
            </span>
          </div>
        </div>
      </div>

      <div className="">
        <img src={bookingRoom} className="h-full " alt="" />
      </div>
    </div>
  </div>
  )
}

export default BookedRoomInfoCard
