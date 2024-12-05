import React from 'react'

const PackageDetailSection = () => {
  return (
    <div className="mt-[88px]  flex gap-[69px] items-center ">
    <div className="border p-8 rounded-md">
      <h4 className="font-heading text-4xl text-primary font-bold border-b border-border py-2">
        Package Details
      </h4>
      <div className="flex  mt-8">
        <div className="  pr-[72px] border-border text-nowrap">
          <p className="font-body text-[22px] text-secondary">
            Check in
          </p>
          <p className="font-primary text-[22px] font-body mt-4">
            16 November 2024
          </p>
        </div>
        <div className=" border-x px-[72px] border-border text-nowrap">
          <p className="font-body text-[22px] text-secondary">
            Check out
          </p>
          <p className="font-primary text-[22px] font-body mt-4">
            17 November 2024
          </p>
        </div>
        <div className="  pl-[72px] border-border text-nowrap">
          <p className="font-body text-[22px] text-secondary">
            Total Nights
          </p>
          <p className="font-primary text-[22px] font-body mt-4">1</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-4 ">
      <div className="p-8  border border-dashed border-secondary w-[360px] text-center">
        <p className="font-body text-2xl text-secondary text-nowrap">
          Booking Reference
        </p>
        <p className="font-body font-bold text-[22px] mt-2">
          No. #249589
        </p>
      </div>
      <p className="font-body text-secondary text-[22px] ">
        Date Booked : 14 November, 2024
      </p>
    </div>
  </div>
  )
}

export default PackageDetailSection