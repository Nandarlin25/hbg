import React from 'react'

const CustomerDetailCard = () => {
  return (
    <div className="col-span-7 border border-border p-4">
    <h5 className="font-heading text-2xl font-bold p-4">
      Customer Details
    </h5>
    <div className="border-t border-border grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-lg mt-4">
        Customer Name:
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-lg mt-4">
        Aung Aung
      </span>
    </div>

    <div className="grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-lg mt-4">
        Customer Name:
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-lg mt-4">
        Aung Aung
      </span>
    </div>

    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-lg mt-4">
        Address:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-lg mt-4">
        No. 10, West Shwe Taung Road,Taunggyi{" "}
      </span>
    </div>

    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-lg mt-4">
        City/ Town:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-lg mt-4">
        Taunggyi{" "}
      </span>
    </div>

    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-lg mt-4">
        State/Country:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-lg mt-4">
        Shan State{" "}
      </span>
    </div>
    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-lg mt-4">
        Country:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-lg mt-4">
        Myanmar{" "}
      </span>
    </div>
    <div className=" grid grid-cols-2 mx-4 ">
      <span className=" col-span-1 font-body text-secondary text-lg mt-4">
        Phone:{" "}
      </span>
      <span className="col-span-1 font-body text-start text-secondary text-lg mt-4">
        0928479201{" "}
      </span>
    </div>
  </div>
  )
}

export default CustomerDetailCard