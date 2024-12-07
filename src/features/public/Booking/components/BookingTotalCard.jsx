import React from 'react'

const BookingTotalCard = () => {
  return (
    <div className=''>
    <div className="bg-primary py-[11px] md:py-2 lg:py-[11px] px-6 ">
      <h4 className="font-body text-primary-frame text-lg md:text-[12px] lg:text-[22px] ">
        Total
      </h4>
    </div>
    <div className="p-[22px] bg-white  ">
      <span className="text-lg  md:text-[12px] lg:text-[22px] font-bold font-body text-primary">
        Standard Room #1: $50
      </span>
      <div className="w-full flex justify-between items-center mt-6 md:mt-[10px] lg:mt-8">
        <span
          scope="col"
          className=" font-body font-bold text-lg md:text-[12px] lg:text-[22px] w-full"
        >
          Room Subtotal:
        </span>
        <span
          scope="col"
          className=" text-secondary font-body text-lg md:text-[12px] lg:text-[22px] w-full text-end "
        >
          $50.00
        </span>
      </div>
      <div className="w-full flex justify-between items-center mt-4 md:mt-2 lg:mt-4">
        <span
          scope="col"
          className=" font-body font-bold text-lg md:text-[12px] lg:text-[22px] w-full"
        >
          Tax amount:
        </span>
        <span
          scope="col"
          className=" text-secondary font-body text-lg md:text-[12px] lg:text-[22px] w-full text-end"
        >
          $50.00
        </span>
      </div>
      <div className="w-full flex justify-between items-center mt-4 md:mt-2 lg:mt-4">
        <span
          scope="col"
          className=" font-body font-bold text-lg md:text-[12px] lg:text-[22px] w-full"
        >
          Service Fee:
        </span>
        <span
          scope="col"
          className=" text-secondary font-body text-lg md:text-[12px] lg:text-[22px] w-full text-end"
        >
          $20.00
        </span>
      </div>
      <div className="w-full flex justify-between items-center mt-4 border-t pt-4 md:mt-[10px] lg:mt-4">
        <span
          scope="col"
          className=" font-body font-bold text-lg md:text-[12px] lg:text-[22px] w-full"
        >
          TOTAL:
        </span>
        <span
          scope="col"
          className=" text-secondary font-body text-lg md:text-[12px] lg:text-[22px] w-full text-end"
        >
          $120.00
        </span>
      </div>
    </div>
  </div>
  )
}

export default BookingTotalCard