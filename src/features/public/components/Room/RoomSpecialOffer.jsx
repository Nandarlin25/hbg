import React from 'react'
import RoomSpecialOfferCard from './RoomSpecialOfferCard'
import useSpecialOffer from '../../../../stores/useSpecialOffer';


const RoomSpecialOffer = () => {
  const {specialOffer}=useSpecialOffer();
  
  return (
    <section>
        <div className='flex flex-col gap-[8px] '>
            <h2 className='lg:text-[40px] lg:text-center md:text-center text-left font-bold font-heading md:text-[24px] text-[24px] sm:text-left'>SPECIAL OFFER</h2>
            <p className=' lg:text-lg text-[#71717A] lg:text-center md:text-center text-left  md:px-11 md:text-[12px] lg:py-0 md:py-0 py-3 text-[18px] lg:px-36 lg:leading-[32px] md:leading-[22px]'>
              Escape to comfort and style in our luxurious rooms, where every 
              detail is designed for your ultimate relaxation and convenience</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-[16px] md:gap-[17px]  lg:py-5 md:py-3 font-emerald">
            {
              specialOffer.map((tt)=><RoomSpecialOfferCard key={tt.id} name={tt.name} specialOffer={tt}/>)
            }
        </div>
    </section>
  )
}

export default RoomSpecialOffer