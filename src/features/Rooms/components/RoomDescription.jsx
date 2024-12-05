import React from 'react'
import RoomPhoto from './RoomPhoto'
import Container from '../../../components/Container'
import bed from '../../../assets/Room/Booking Detail/icons/bed.png'
import bath from '../../../assets/Room/Booking Detail/icons/bath.png'
import width from '../../../assets/Room/Booking Detail/icons/width.png'





const RoomDescription = () => {

    

  return (
    <section className='font-emerald lg:pb-[30px] md:pb-[10px] ' id="description">
        <Container>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1'>
                <div className="lg:col-span-2 md:col-span-2 col-span-1 lg:pe-52 md:pe-52 pe-10 xl:text-[24px] lg:text-[24px] md:text-[12px] text-zinc-500 leading-[32px] tracking-[0.32px]">
                    <p className='pb-9'>
                        A luxury standard room offers an elegant blend of comfort and sophistication, featuring
                        high-end furnishings and exquisite decor. Guests can expect plush bedding, premium amenities, and spacious layouts designed for relaxation.
                    </p>
                    <p>
                        The room often includes modern technology, such as smart controls and high-speed Wi-Fi, along with beautiful views or a serene ambiance. Attention to detail 
                        in both design and service ensures an indulgent, memorable stay.
                    </p>
                </div>
                
                <div className='col-span-1 leading-[32px] tracking-[0.32px] lg:my-0 md:my-0 my-3'>
                    <h2 className="lg:text-[40px] md:text-[12px] text-[24px] font-heading font-bold">Features:</h2>
                    <div className='lg:text-[18px] md:text-[12px] text-[16px] text-primary lg:space-y-4 md:space-y-3 space-y-2'>
                        <div className='flex gap-4 items-center'>
                            <img src={width} alt="" className='w-[37px] h-[37px] pt-2'/>
                            <p className='pb-2 pt-3'>Size: 30m <sup>2</sup> </p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img src={bed} alt="" className='w-[30px] h-[30px] pb-2'/>
                            <p className='pb-2'>Bed Type: King Bed</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-[30px]  text-secondary pb-2'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <p className='pb-2'>Capacity : 4 Adults,3 Children</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img src={bath} alt="" className='w-[30px] pb-1'/>
                            <p className='pb-2'>Bathroom :  Mirror  separate  bathroom</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-[30px] text-secondary pb-2'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <p className='pb-2'>View : Night Market View</p>
                        </div>
                
                    </div>
                </div>
                <RoomPhoto/>
            </div>
        </Container>
    </section>
  )
}

export default RoomDescription