import React from 'react'
import Container from "../../../components/Container";
import suitcase from "../../../assets/home/icons/suitcase-svgrepo-com.svg"
import swimmingPool from "../../../assets/home/icons/swimming-pool-svgrepo-com.svg"
import sauna from "../../../assets/home/icons/sauna-svgrepo-com.svg"

import exercise from "../../../assets/home/icons/exercise-gym-svgrepo-com.svg"

import alwaysHours from "../../../assets/home/icons/always-hours-service-svgrepo-com.svg"


const ServiceSection = () => {

  return (
   
    <section className="bg-secondary-card">
    <Container>
    <div className="flex flex-col justify-center items-center bg-secondary-card py-24">
        <h2 className="font-body text-lg ">HOTEL SERVICES</h2>
        <h1 className="font-heading text-4xl font-bold mt-2">AMENITIES</h1>
        <p className="font-body text-lg text-secondary text-center mt-8">For us a luxurious room is not enough, we bring customers many high-quality <br /> services, make sure your vacation is perfect. </p>
        <div className="grid grid-cols-5 mt-16 gap-20">

          <div className="col-span-1">
            <img src={`${suitcase}`}alt="" className="w-[82px] h-[82px] mx-auto" />
            <p className='font-body text-[22px] mt-4'>AIRPORT SHUTTLE</p>
          </div>
          <div className="col-span-1">
            <img src={`${swimmingPool}`}alt="" className="w-[82px] h-[82px] mx-auto" />
            <p className='font-body text-[22px] mt-4'>SWIMMING POOL</p>
          </div>
          <div className="col-span-1">
            <img src={`${alwaysHours}`}alt="" className="w-[82px] h-[82px] mx-auto" />
            <p className='font-body text-[22px] mt-4'>SERVICE 24/24</p>
          </div>
          <div className="col-span-1">
            <img src={`${sauna}`}alt="" className="w-[82px] h-[82px] mx-auto" />
            <p className='font-body text-[22px] mt-4'>SAUNA ROOM</p>
          </div>
          <div className="col-span-1">
            <img src={`${exercise}`}alt="" className="w-[82px] h-[82px] mx-auto" />
            <p className='font-body text-[22px] mt-4'>FITNESS CENTRE</p>
          </div>

        </div>
      </div>

    </Container>
   </section>
  )
}

export default ServiceSection