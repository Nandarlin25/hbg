import React from 'react'
import { HiCheckCircle } from 'react-icons/hi2'

const PaymentSummeryCard = () => {
  return (
    <div className="border border-border mt-14 md:mt-0  col-span-5 p-[11px] md:p-4 ">
                <h5 className="font-heading text-[16px] lg:text-2xl font-bold mx-4 md:mx-0 py-[11px] md:p-4  border-b md:border-none">
                  Payment Summary
                </h5>
                <div className=" grid grid-cols-2 mx-4 mt-[11px] md:mt-0">
                  <span className=" col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
                    Room Price per Night
                  </span>
                  <span className="col-span-1 font-body text-center text-secondary text-xs md:text-[11px] lg:text-lg text-nowrap mt-4">
                    $50.00
                  </span>
                </div>
                <div className="border-b border-secondary grid grid-cols-2 mx-4  mt-[11px] md:mt-0">
                  <span className="col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg text-nowrap mt-4">
                    Total room price (1 Night)
                  </span>
                  <span className="col-span-1 font-body text-center text-secondary text-xs md:text-[11px] lg:text-lg text-nowrap my-4">
                    $50.00
                  </span>
                </div>
                <div className=" grid grid-cols-2 mx-4 mt-[11px] md:mt-0">
                  <span className="col-span-1 font-body text-primary text-xs md:text-[11px] lg:text-lg text-nowrap mt-4">
                    Room Total:
                  </span>
                  <span className="col-span-1 font-body text-center text-secondary text-xs md:text-[11px] lg:text-lg text-nowrap mt-4">
                    $50.00
                  </span>
                </div>
                <div className="grid grid-cols-2 mx-4 mt-[11px] md:mt-0 ">
                  <span className="col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg text-nowrap mt-4">
                    Service Fee:
                  </span>
                  <span className="col-span-1  text-center font-body text-secondary text-xs md:text-[11px] lg:text-lg text-nowrap mt-4">
                    $20.00
                  </span>
                </div>
                <div className="border-b border-secondary grid grid-cols-2   mx-4 mt-[11px] md:mt-0 pb-4">
                  <span className="col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg text-nowrap mt-4">
                    Tax amount:
                  </span>
                  <span className="col-span-1 text-center font-body text-secondary text-xs md:text-[11px] lg:text-lg text-nowrap mt-4">
                    $20.00
                  </span>
                </div>
                <div className=" grid grid-cols-2 mx-4  md:mt-0 pb-4">
                 <div className='mt-4 '>
                 <span className="col-span-1 font-body text-primary text-xs md:text-[11px] lg:text-lg text-nowrap font-bold">
                    Total Already Paid:
                  </span>
                 </div>
                  <div className="col-span-1 flex mt-4 items-center justify-center">
                    <span className="font-body text-primary text-xs md:text-[11px] lg:text-lg text-nowrap ">
                      $120.00
                    </span>
                    <HiCheckCircle className="w-[27px] h-[27px] fill-orderComplete stroke-primary-frame" />
                  </div>
                </div>
              </div>
  )
}

export default PaymentSummeryCard