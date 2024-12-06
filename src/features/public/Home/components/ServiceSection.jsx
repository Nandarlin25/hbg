import React from 'react'
import Container from "../../../../components/Container";
import suitcase from "../../../../assets/home/icons/suitcase-svgrepo-com.svg"
import swimmingPool from "../../../../assets/home/icons/swimming-pool-svgrepo-com.svg"
import sauna from "../../../../assets/home/icons/sauna-svgrepo-com.svg"

import exercise from "../../../../assets/home/icons/exercise-gym-svgrepo-com.svg"

import alwaysHours from "../../../../assets/home/icons/always-hours-service-svgrepo-com.svg"


const ServiceSection = () => {

  return (
   
    <section className="bg-primary-frame md:bg-secondary-card px-6">
    <Container>
    <div className="md:flex md:flex-col md:justify-center md:items-center  md:py-24">
      
       <h2 className="font-body text-[16px] md:text-[12px] lg:text-lg ">HOTEL SERVICES</h2>
        <h1 className="font-heading text-2xl md:text-2xl lg:text-4xl font-bold mt-2">AMENITIES</h1>
        <p className="font-body text-[16px] md:text-[12px] lg:text-lg text-secondary md:text-center md:mt-4 mt-8 lg:mt-8">For us a luxurious room is not enough, we bring customers many high-quality <br /> services, make sure your vacation is perfect. </p>

   
       
        <div className="md:grid grid-cols-5 mt-14 md:mt-16 gap-20 ">

          <div className=" md:col-span-1 bg-secondary-card  text-center h-48 md:h-auto flex flex-col items-center justify-center ">
            <img src={`${suitcase}`}alt="" className="w-[82px] h-[82px] md:w-[50px] md:h-[50px] lg:w-[82px] lg:h-[82px] mx-auto" />
            <p className='font-body text-secondary font-bold  text-lg md:text-[12px] lg:text-[22px] mt-4 text-nowrap'>AIRPORT SHUTTLE</p>
          </div>
          <div className=" col-span-1 bg-secondary-card  mt-10 md:mt-0 text-center h-48 md:h-auto flex flex-col items-center justify-center ">
            <img src={`${swimmingPool}`}alt="" className="w-[82px] h-[82px]  md:w-[50px] md:h-[50px] lg:w-[82px] lg:h-[82px]  mx-auto" />
            <p className='font-body text-secondary font-bold text-lg md:text-[12px] lg:text-[22px] mt-4 text-nowrap'>SWIMMING POOL</p>
          </div>
          <div className=" col-span-1 bg-secondary-card mt-10 md:mt-0 text-center h-48 md:h-auto flex flex-col items-center justify-center ">
            <img src={`${alwaysHours}`}alt="" className="w-[82px] h-[82px]  md:w-[50px] md:h-[50px] lg:w-[82px] lg:h-[82px]  mx-auto" />
            <p className='font-body text-secondary font-bold text-lg md:text-[12px] lg:text-[22px] mt-4 text-nowrap'>SERVICE 24/24</p>
          </div>
          <div className=" col-span-1 bg-secondary-card mt-10 md:mt-0 text-center  h-48 md:h-auto flex flex-col items-center justify-center">
            <img src={`${sauna}`}alt="" className="w-[82px] h-[82px]  md:w-[50px] md:h-[50px] lg:w-[82px] lg:h-[82px]  mx-auto" /> 
            <p className='font-body text-secondary font-bold text-lg md:text-[12px] lg:text-[22px]mt-4 text-nowrap'>SAUNA ROOM</p>
          </div>
          <div className=" col-span-1 bg-secondary-card mt-10 md:mt-0 text-center h-48 md:h-auto flex flex-col items-center justify-center">
            <img src={`${exercise}`}alt="" className="w-[82px] h-[82px]  md:w-[50px] md:h-[50px] lg:w-[82px] lg:h-[82px]  mx-auto" />
            <p className='font-body text-secondary font-bold text-lg md:text-[12px] lg:text-[22px] mt-4 text-nowrap'>FITNESS CENTRE</p>
          </div>

        </div>
      </div>

    </Container>
   </section>
  )
}

export default ServiceSection