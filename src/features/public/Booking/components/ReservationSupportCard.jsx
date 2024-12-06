import React from 'react'

const ReservationSupportCard = () => {
  return (
    <div className="mt-16 md:mt-8 lg:mt-16">
              <div className="bg-primary py-[11px] px-6 ">
                <h4 className="font-body text-primary-frame text-lg md:text-[12px] lg:text-[22px] ">
                Reservation  Support
                </h4>
              </div>
              <div className="p-[22px] bg-white  ">
              
                <div className="w-full flex items-center gap-3  lg:mt-8">
                  <span
                    className=" font-body font-bold text-lg  md:text-[12px] lg:text-[22px]"
                  >
                    Tel:
                  </span>
                  <span
                    scope="col"
                    className=" text-secondary font-body text-lg  md:text-[12px] lg:text-[22px]"
                  >
                    +1 (555) 123-4567
                  </span>
                </div>
               
                <div className="w-full flex items-center gap-3  mt-2 md:mt-0 lg:mt-2 ">
                  <span
                    scope="col"
                    className=" font-body font-bold text-lg  md:text-[12px] lg:text-[22px] "
                  >
                    Fax:
                  </span>
                  <span
                    scope="col"
                    className=" text-secondary font-body text-lg  md:text-[12px] lg:text-[22px] "
                  >
                    (323) 555-7890
                  </span>
                </div>
                <span className="font-body text-secondary text-lg  md:text-[12px] lg:text-[22px] mt-2 ">emeraldhotel@gmail.com</span>
                <div className="mt-8 md:mt-2 lg:mt-8">
                  <span className="font-bold font-body text-[22px] md:text-[12px] lg:text-[22px]">Address</span>
                  <p className="font-body text-lg  md:text-[12px] lg:text-[22px] text-secondary mt-3 md:mt-0 lg:mt-3 tracking-wide">Kabar Aye Pagoda Rd, Yangon 11081, Myanmar (Burma)</p>
                </div>
                
              </div>
            </div>
  )
}

export default ReservationSupportCard