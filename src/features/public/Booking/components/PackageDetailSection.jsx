import React from 'react'

const PackageDetailSection = () => {
  return (
    <div className="lg:mt-[88px]  md:flex md:gap-[50px] md:items-center ">
    <div className="border p-4 lg:p-8 rounded-[3px] md:rounded-md bg-primary-frame lg:bg-white">
      <h4 className="font-heading text-center md:text-start mt-2 md:mt-0 text-2xl md:text-[16px] lg:text-4xl text-primary font-bold border-b  bg-secondary-card md:bg-primary-frame lg:bg-white border-border py-3 md:py-2">
        Package Details
      </h4>
      <div className="md:flex text-center md:text-start mt-4 md:mt-5 md:mb-1 lg:mb-0 lg:mt-8">
        <div className="md:pr-8 lg:pr-[72px] py-3 md:py-0 border-border border-b md:border-none text-nowrap">
          <p className="font-body text-lg md:text-[14px] lg:text-[22px] text-secondary">
            Check in
          </p>
          <p className="font-primary text-lg md:text-[14px] lg:text-[22px] font-body mt-0 lg:mt-4">
            16 November 2024
          </p>
        </div>
        <div className="border-b md:border-x md:border-b-0 md:px-8 lg:px-[72px] py-3 md:py-0  border-border text-nowrap mt-2 md:mt-0">
          <p className="font-body text-lg md:text-[14px] lg:text-[22px] text-secondary">
            Check out
          </p>
          <p className="font-primary text-lg md:text-[14px] lg:text-[22px] font-body mt-0 lg:mt-4">
            17 November 2024
          </p>
        </div>
        <div className="  md:pl-8 lg:pl-[72px] py-2 md:py-0 border-border text-nowrap mt-1 md:mt-0">
          <p className="font-body text-lg md:text-[14px] lg:text-[22px] text-secondary">
            Total Nights
          </p>
          <p className="font-primary text-lg md:text-[14px] lg:text-[22px] font-body mt-0 lg:mt-4">1</p>
        </div>
      </div>
    </div>
    <div className="md:flex md:flex-col items-center  w-full justify-center md:gap-2 lg:gap-4  mt-12 md:mt-0 ">
      <div className="p-4  md:p-2 lg:p-8  bg-primary-frame text-center w-full lg:bg-white border border-dashed border-secondary    rounded-md md:rounded-none">
        <p className="font-body  text-2xl md:text-[14px] lg:text-2xl text-secondary text-nowrap">
          Booking Reference
        </p>
        <p className="font-body font-bold text-2xl md:text-[14px] lg:text-[22px] mt-2 md:mt-0  lg:mt-2">
          No. #249589
        </p>
      </div>
      <div className="font-body text-secondary text-2xl md:text-[14px] lg:text-[22px] flex flex-col gap-4 md:gap-0 lg:block items-center justify-center mt-4 md:mt-0 text-nowrap">
       <span> Date Booked :</span> <span className='font-bold text-primary lg:font-normal lg:text-secondary'>14 November, 2024</span>
      </div>
    </div>
  </div>
  )
}

export default PackageDetailSection