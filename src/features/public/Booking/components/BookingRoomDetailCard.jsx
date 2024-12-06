import React from 'react'
import { HiCalendar } from 'react-icons/hi'
import RoomDetail1 from "../../../../assets/Room/Room-details/Room 1.jpg";
import { HiUserCircle } from 'react-icons/hi2';


const BookingRoomDetailCard = () => {
  return (
    <div className="mt-16 md:mt-8 lg:mt-16">
              <div className="bg-primary py-[11px] px-6 md:py-2 lg:py-[11px]">
                <h4 className="font-body text-primary-frame text-lg md:text-[12px] lg:text-[22px] ">
                  Room Details
                </h4>
              </div>
              <div className=" bg-white p-[22px] ">
                <div className="relative my-6 md:my-1 lg:my-6">
                  <img src={RoomDetail1} alt="" className="h-52 md:h-[120px] lg:h-52" />
                  <div className="absolute font-body text-lg  md:text-[12px] lg:text-[22px]  text-primary-frame bg-primary bottom-0 left-0 px-3 py-2 md:p-1 lg:px-3 lg:py-2">
                    X1 STANDARD ROOM
                  </div>
                </div>
                <div className="pb-[22px]">
                  <h2 className="text-md md:text-[11px] lg:text-md font-heading ">BOOKING DETAILS</h2>
                  <div className="flex gap-2 md:gap-1 lg:gap-2 items-center mt-4">
                    <input
                      type="checkbox"
                      className="size-4 md:size-3 lg:size-4 rounded-full checked:bg-primary pointer-events-none"
                      checked
                    />
                    <span className="font-body text-lg  md:text-[12px] lg:text-[22px]  text-nowrap">
                      Check-in: Nov 16, 2024, Thursday
                    </span>
                  </div>
                  <div className="flex gap-2  md:gap-1 lg:gap-2 items-center mt-4 md:mt-2 lg:mt-4">
                    <input
                      type="checkbox"
                      className="size-4 md:size-3 lg:size-4  rounded-full checked:bg-primary pointer-events-none"
                      checked
                    />
                    <span className="font-body text-lg  md:text-[12px] lg:text-[22px] text-nowrap ">
                      Check-out: Nov 17, 2024, Friday.
                    </span>
                  </div>
                  <div className="flex gap-2 md:gap-1 lg:gap-2 items-center  mt-4 md:mt-2 lg:mt-4">
                   <HiUserCircle className="size-4 md:size-3 lg:size-4"/>

                    <span className="font-body text-lg  md:text-[12px] lg:text-[22px] ">
                      Guest Room #1 : 3 Persons
                    </span>
                  </div>
                  <div className="flex gap-2 md:gap-1 lg:gap-2 items-center mt-4 md:mt-2 lg:mt-4">
                    <HiCalendar className="size-4 md:size-3 lg:size-4"/>
                    <span className="font-body text-lg  md:text-[12px] lg:text-[22px] ">
                    Night: 1 Night
                    </span>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default BookingRoomDetailCard