import React from 'react'

const CustomerDetailCard = () => {
  return (
    <div className="col-span-7 border border-border p-4 order-2">
    <h5 className="font-heading text-[16px] md:text-2xl font-bold md:p-4 py-[11px] border-b md:border-none mx-4 md:mx-0 border-border">
      Customer Details
    </h5>
    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Customer Name:
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Aung Aung
      </span>
    </div>

    <div className="grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Customer Name:
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Aung Aung
      </span>
    </div>

    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Address:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-xs md:text-[11px] lg:text-lg mt-4 md:text-nowrap">
        No. 10, West Shwe Taung Road,Taunggyi{" "}
      </span>
    </div>

    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        City/ Town:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Taunggyi{" "}
      </span>
    </div>

    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        State/Country:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Shan State{" "}
      </span>
    </div>
    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Country:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Myanmar{" "}
      </span>
    </div>
    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        Phone:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-xs md:text-[11px] lg:text-lg mt-4">
        0928479201{" "}
      </span>
    </div>
  </div>
  )
}

export default CustomerDetailCard