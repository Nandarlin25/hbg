import React from 'react'


const RoomSpecialOfferCard = ({specialOffer}) => {
  
  return (
    <div className='lg:p-2 md:p-2 lg:pb-0 md:pb-0 pb-4'>
        <div className='lg:py-2 md:py-1'>
            <img src={specialOffer.image} alt="" className='md:w-[420px] '/>
        </div>
        <div className='lg:tracking-[0.32px] md:tracking-normal lg:py-2 md:py-0 py-0 lg:leading-[32px] md:leading-[22px]'>
            <p className=' font-[700] lg:text-[22px] md:text-[12px] text-[18px] md:leading-[22px] lg:leading-[32px]'>{specialOffer.title}</p>
            <p className='lg:text-lg text-zinc-600 md:text-[12px] text-[18px] md:leading-[20px] lg:leading-[32px]'>{specialOffer.offer}</p>
        </div>
    </div>
  )
}

export default RoomSpecialOfferCard