import React from 'react'
import AmeIcon from '../../../assets/Room/Booking Detail/icons/Ame.png'
import ServiceIcon from '../../../assets/Room/Booking Detail/icons/service.png'


const RoomAmenities = () => {
  return (
    <div className='grid grid-cols-8 lg:py-[64px] md:py-[44px] py-[24px]'>
            <div className='col-span-3 gap-[16px] md:gap-[8px] p-0'>
              <div className='flex lg:gap-5 md:gap-5 gap-2'>
                <div>
                  <img src={AmeIcon} alt="" className='lg:w-[66.67px] md:w-[33px] w-[27px] h-[20px] font-bold lg:h-[56.67px] md:h-[32px]'/>
                </div>
                <div className=" lg:text-[36px] md:text-[20px] text-[20px] font-heading font-bold text-center md:pt-1">
                  AMENITIES
                </div>
              </div>
              <p className='lg:text-[22px] md:text-[12px] text-[12px] lg:leading-[32px] lg:tracking-[0.32px] md:leading-[22px] md:tracking-[0.16px] leading-[20px] tracking-[0px] text-secondary lg:py-[25px] md:py-[8px] py-[5px]'>
                We bring customers many high-quality services, make sure your vacation is perfect. 
              </p>
              <div className='lg:text-[18px] md:text-[11px] text-[11px] lg:leading-[32px] lg:tracking-[0.32px] md:leading-[32px] md:tracking-[0.32px]  text-secondary'>
                <div className='md:-space-y-2 lg:space-y-0 space-y-1'>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                    Comfortable Bedding
                    </div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Private Bathroom</div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Wi-Fi Access</div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Air Conditioning or Heater</div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Towels and Linens</div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Television</div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                   <div>Hair Dryer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className='col-span-3'>
              <div className='flex lg:gap-5 md:gap-5 gap-2'>
                <div className=''>
                  <img src={ServiceIcon} alt="" className="lg:w-[71px] lg:h-[63px] md:w-[35px] md:h-[32px] w-[27px] h-[25px]"/>
                </div>
                <div className=" lg:text-[36px] md:text-[20px] text-[20px] font-bold font-heading text-center md:pt-1">
                  SERVICES
                </div>
              </div>
              <div>
                <p className='lg:text-[22px] md:text-[12px] text-[12px] lg:leading-[32px] lg:tracking-[0.32px] md:leading-[22px] md:tracking-[0.16px] text-secondary lg:py-[25px] md:py-[8px] py-[5px]'>
                  Hotel service  enhance the guest  comfort and convenience during their stay.
                </p>
              </div>
              
              <div className='lg:text-[18px] md:text-[11px] text-[11px] lg:leading-[32px] lg:tracking-[0.32px] text-secondary pt-1'>
                <div className='md:space-y-2 lg:space-y-0 space-y-1'>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>
                    Housekeeping
                  </div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Room Service</div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>24/7 Reception Desk</div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Parking</div>
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Telephone Service</div>
                    
                  </div>
                  <div className='flex lg:gap-[16px] md:gap-[8px] gap-[4px] items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-5 md:size-4 size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <div>Wake</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
  )
}

export default RoomAmenities