import React from 'react'
import img1 from '../../../assets/Room/r2.jpg'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import bed from '../../../assets/Room/Booking Detail/icons/bed.png'
import bath from '../../../assets/Room/Booking Detail/icons/bath.png'
import width from '../../../assets/Room/Booking Detail/icons/width.png'



const SimilarRoomCard = () => {
  return (
    <div>
        <div className="col-span-1 border p-[10px] border-border">
            <img src={img1} alt=""  className='lg:h-[414px] md:h-[210px] md:w-full'/>
            <div className='p-3'>
                <div className='flex justify-between items-center pt-[10px]'>
                    <h2 className='lg:text-[40px] md:text-[20px] text-[20px] font-heading font-bold'>King Bed Room</h2>
                    <p className='font-emerald lg:text-[22px] md:text-[12px] text-[12px]'>
                        <span className="font-bold">$150</span>
                        <span className='lg:tracking-[0.32px] lg:leading-[32px] md:tracking-[0.16px] md:leading-[22px]'>/NIGHT</span>
                    </p>
                </div>
                <div className="py-[10px] flex lg:gap-[30px] md:gap-[15px] gap-[12px]">
                        <div className='flex items-center justify-between gap-1'>
                            <img src={width} alt="" className='w-[24px] h-[24px]'/>
                            <p className='xl:text-lg md:text-[11px] text-[11px] lg:tracking-[0.32px] lg:leading-[32px]  md:tracking-[0.16px] md:leading-[22px]'>
                                30 m<sup>2</sup>
                            </p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={bed} alt="" className='w-[22.5px] h-[22.5px]'/>
                            <p className='xl:text-lg md:text-[11px] text-[11px] lg:tracking-[0.32px] lg:leading-[32px]  md:tracking-[0.16px] md:leading-[22px]'>
                                2 Beds
                            </p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <HiOutlineUserCircle className='w-[22.5px] h-[22.5px]'/>
                            <p className='xl:text-lg md:text-[11px] text-[11px] lg:tracking-[0.32px] lg:leading-[32px]  md:tracking-[0.16px] md:leading-[22px]'>
                                4 Guests
                            </p>
                        </div>
                </div>
                <p className='text-secondary lg:py-5 md:py-5 py-3 lg:tracking-[0.32px] lg:leading-[32px]  md:tracking-[0.16px] md:leading-[22px] xl:text-lg md:text-[11px] text-[11px]'>A King Bed Room offers spacious comfort with a luxurious king-sized bed, modern amenities, and a cozy atmosphere perfect for relaxation or a restful night's sleep.</p>
                <div className=' flex flex-grow items-center xl:text-lg md:text-[12px] text-[12px]'>
                    <button className=' xl:w-[200px] xl:h-[48px] md:w-[119px] md:h-[32px] bg-primary text-white rounded-md'>Room Detail</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SimilarRoomCard