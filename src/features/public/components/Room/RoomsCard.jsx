import React from 'react'

import { HiOutlineUserCircle } from 'react-icons/hi2'
import bed from '../../../../assets/Room/icon/Bed.svg'
import width from '../../../../assets/Room/icon/width.svg'
import { Link } from 'react-router-dom'



const RoomsCard = ({index,room}) => {
  return (
    <div className={`lg:flex lg:flex-row md:flex md:flex-row lg:w-full md:w-full font-emerald ${index%2 == 0 && 'lg:flex-row-reverse md:flex-row-reverse'} lg:pb-[192px] md:pb-[180px] pb-[50px]`}>
        <div className={` lg:max-w-[731px] md:max-w-[436.35px] max-w-[403px]`}>
            <img src={room.image} alt=""  className='lg:h-[779px] md:h-[465px] h-[425px]'/>
        </div>
        <div className={`flex items-center lg:pt-0 md:pt-0 pt-3 flex-1 end-0  ${index%2 == 0 ? 'lg:-me-20 md:-me-20' : 'lg:-ml-20 md:-ml-20'}`}>
            <div className={`lg:p-7 md:p-5 md:py-3 py-2 pb-0 flex flex-col bg-zinc-100 lg:h-[620px] md:h-[380px] lg:shadow-sm md:first-letter:shadow-sm lg:-z-0 md:-z-0 `}>
                <div className="lg:gap-6 md:gap-3">
                    <div className='lg:text-[22px] md:text-[12px] text-[16px]  font-bold lg:py-2 md:py-1'>
                        {room.price}<span className='lg:tracking-[0.32px] font-normal lg:leading-[32px] md:leading-[22px]'>/NIGHT</span>
                    </div>
                    <div className='lg:text-[40px] md:text-[24px] text-[24px] font-bold lg:even:py-2 font-heading md:py-1'>
                        <h2>{room.name}</h2>
                    </div>
                    <div className='lg:gap-[30px] md:gap-[15px] gap-[10px] flex lg:py-2 md:py-1'>
                        <div className='flex items-center justify-between gap-1'>
                            <img src={width} alt="" className='w-[22.5px] h-[22.5px]'/>
                            <p className='lg:text-lg md:text-[12px] text-[12px] lg:tracking-[0.32px]  lg:leading-[32px] tracking-[0.16px]  leading-[22px]'>
                                {room.size} m<sup>2</sup>
                            </p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={bed} alt="" className='w-[22.5px] h-[22.5px]'/>
                            <p className='lg:text-lg md:text-[12px] text-[12px] tracking-[0.32px] leading-[32px]'>
                                {room.bed} Beds
                            </p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <HiOutlineUserCircle className='w-[22.5px] h-[22.5px]'/>
                            <p className='lg:text-lg md:text-[12px] text-[12px] tracking-[0.32px] leading-[32px]'>
                                {room.guest} Guests
                            </p>
                        </div>
                    </div>
                    <div className='text-secondary md:text-[12px] text-[12px] lg:pt-6 md:pt-1 lg:pb-8 md:pb-2 pb-2 lg:text-lg  font-normal lg:tracking-[0.32px]  lg:leading-[32px] tracking-[0.16px]  leading-[22px] md:leading-[22px]'>
                        <p>
                        {room.description}
                        </p>
                    </div>
                    <div className='lg:text-lg lg:gap-[28px] md:gap-[0px] lg:pb-6 md:pb-2 pb-2'>
                        <table className="w-full"> 
                            <thead>
                                <tr className=" lg:pb-7 md:pb-0"> 
                                <th className="text-left pe-6 lg:text-lg font-bold lg:text-[22px] md:text-[12px] text-[12px] lg:leading-[28.3px] md:leading-[15.4px]">Service:</th> 
                                <td className="text-left pe-6 lg:text-lg md:text-[12px] text-[12px] md:leading-[22px]">Free Breakfast, Free Wifi, Free Water</td> 
                                </tr> 
                            </thead>
                            <tbody>
                                <tr> 
                                    <th className="text-left font-bold text-[12px] lg:text-[22px] md:text-[12px] lg:leading-[28.3px] md:leading-[22px]">Special:</th> 
                                    <td className="text-left lg:pt-2 md:pt-0 pe-14 md:pe-7 lg:text-lg md:text-[12px] text-[12px] md:leading-[22px]">
                                        Feature beds, Egyptian cotton bed linen, Voya toiletries, Urndown service
                                    </td> 
                                </tr>
                            </tbody> 
                        </table>
                    </div>
                    <hr className=' border-zinc-300'/>
                    
                </div>
                <div className=' flex flex-grow items-center lg:text-lg md:text-[12px] text-[12px] md:pt-2 pt-2'>
                    <Link to={`/rooms/room-details`} className=' lg:w-[200px] lg:h-[48px] md:w-[119px] md:h-[32px] w-[127px] h-[32px] bg-primary text-white text-center py-3 rounded-md'>Room Detail</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomsCard