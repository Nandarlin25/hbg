import React from 'react'
import { HiCalendar } from 'react-icons/hi'
import RoomDetail1 from "../../../assets/Room/Room-details/Room 1.jpg";
import { HiUserCircle } from 'react-icons/hi2';


const BookingRoomDetailCard = () => {
  return (
    <div className="mt-16">
              <div className="bg-primary py-[11px] px-6 ">
                <h4 className="font-body text-primary-frame text-[22px] ">
                  Room Details
                </h4>
              </div>
              <div className=" bg-white px-[22px]">
                <div className="relative my-6">
                  <img src={RoomDetail1} alt="" className="h-52" />
                  <div className="absolute font-body text-lg text-primary-frame bg-primary bottom-0 left-0 px-3 py-2">
                    X1 STANDARD ROOM
                  </div>
                </div>
                <div className="pb-[22px]">
                  <h2 className="text-md font-heading ">BOOKING DETAILS</h2>
                  <div className="flex gap-2 items-center mt-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-full checked:bg-primary pointer-events-none"
                      checked
                    />
                    <span className="font-body text-lg ">
                      Check-in: Nov 16, 2024, Thursday
                    </span>
                  </div>
                  <div className="flex gap-2 items-center mt-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-full checked:bg-primary pointer-events-none"
                      checked
                    />
                    <span className="font-body text-lg ">
                      Check-out: Nov 17, 2024, Friday.
                    </span>
                  </div>
                  <div className="flex gap-2 items-center  mt-4">
                   <HiUserCircle className="w-5 h-5"/>

                    <span className="font-body text-lg ">
                      Guest Room #1 : 3 Persons
                    </span>
                  </div>
                  <div className="flex gap-2 items-center mt-4">
                    <HiCalendar className="w-5 h-5"/>
                    <span className="font-body text-lg ">
                    Night: 1 Night
                    </span>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default BookingRoomDetailCard