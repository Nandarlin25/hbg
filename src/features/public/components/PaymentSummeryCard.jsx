import React from 'react'
import { HiCheckCircle } from 'react-icons/hi2'

const PaymentSummeryCard = () => {
  return (
    <div className="border border-border col-span-5 p-4 ">
                <h5 className="font-heading text-2xl font-bold p-4">
                  Payment Summary
                </h5>
                <div className=" grid grid-cols-2 mx-4 ">
                  <span className=" col-span-1 font-body text-secondary text-lg mt-4">
                    Room Price per Night
                  </span>
                  <span className="col-span-1 font-body text-center text-secondary text-lg mt-4">
                    $50.00
                  </span>
                </div>
                <div className="border-b border-secondary grid grid-cols-2 mx-4 ">
                  <span className="col-span-1 font-body text-secondary text-lg mt-4">
                    Total room price (1 Night)
                  </span>
                  <span className="col-span-1 font-body text-center text-secondary text-lg my-4">
                    $50.00
                  </span>
                </div>
                <div className=" grid grid-cols-2 mx-4 ">
                  <span className="col-span-1 font-body text-primary text-lg mt-4">
                    Room Total:
                  </span>
                  <span className="col-span-1 font-body text-center text-secondary text-lg mt-4">
                    $50.00
                  </span>
                </div>
                <div className="grid grid-cols-2 mx-4 ">
                  <span className="col-span-1 font-body text-secondary text-lg mt-4">
                    Service Fee:
                  </span>
                  <span className="col-span-1  text-center font-body text-secondary text-lg mt-4">
                    $20.00
                  </span>
                </div>
                <div className="border-b border-secondary grid grid-cols-2 mx-4 pb-4">
                  <span className="col-span-1 font-body text-secondary text-lg mt-4">
                    Tax amount:
                  </span>
                  <span className="col-span-1 text-center font-body text-secondary text-lg mt-4">
                    $20.00
                  </span>
                </div>
                <div className=" grid grid-cols-2 mx-4 pb-4">
                  <span className="col-span-1 font-body text-primary text-lg mt-4">
                    Total Already Paid:
                  </span>
                  <div className="col-span-1 flex mt-4 items-center justify-center">
                    <span className="font-body text-primary text-lg ">
                      $120.00
                    </span>
                    <HiCheckCircle className="w-[27px] h-[27px] fill-orderComplete stroke-primary-frame" />
                  </div>
                </div>
              </div>
  )
}

export default PaymentSummeryCard