import React from 'react'

const ReservationSupportCard = () => {
  return (
    <div className="mt-16">
              <div className="bg-primary py-[11px] px-6 ">
                <h4 className="font-body text-primary-frame text-[22px] ">
                Reservation  Support
                </h4>
              </div>
              <div className="p-[22px] bg-white ">
              
                <div className="w-full flex items-center gap-3 mt-8">
                  <span
                    className=" font-body font-bold text-lg "
                  >
                    Tel:
                  </span>
                  <span
                    scope="col"
                    className=" text-secondary font-body text-lg "
                  >
                    +1 (555) 123-4567
                  </span>
                </div>
               
                <div className="w-full flex items-center gap-3  mt-2 ">
                  <span
                    scope="col"
                    className=" font-body font-bold text-lg  "
                  >
                    Fax:
                  </span>
                  <span
                    scope="col"
                    className=" text-secondary font-body text-lg  "
                  >
                    (323) 555-7890
                  </span>
                </div>
                <span className="font-body text-secondary text-lg mt-2 ">emeraldhotel@gmail.com</span>
                <div className="mt-8">
                  <span className="font-bold font-body text-[22px] ">Address</span>
                  <p className="font-body text-lg text-secondary mt-3 tracking-wide">Kabar Aye Pagoda Rd, Yangon 11081, Myanmar (Burma)</p>
                </div>
                
              </div>
            </div>
  )
}

export default ReservationSupportCard