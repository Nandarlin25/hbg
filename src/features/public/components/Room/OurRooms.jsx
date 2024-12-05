import React from 'react'
import RoomsCard from './RoomsCard'
import  useRoomStore  from '../../../../stores/useRoomStore'

const OurRooms = () => {
  const {rooms}=useRoomStore();
  return (
    <section className=' xl:mt-24 md:mt-5 mt-6 font-emerald '>
      <div className='text-center mb-8'>
        <h1 className='xl:text-[40px] md:text-[24px] text-[24px] font-bold lg:text-center md:text-center text-left font-heading py-2 md:py-1'>Our Rooms</h1>
          <p className='xl:text-lg lg:text-center md:text-center text-left text-[#71717A] md:text-[12px] xl:px-40 md:px-16 xl:leading-[32px] md:leading-[22px]'>
          A luxurious room exudes elegance and comfort, featuring premium furnishings, 
          sophisticated decor, and high-end amenities designed for an indulgent experience
          </p>
      </div>
      <div>
        {
          rooms.map((room,index)=><RoomsCard key={room.id} index={index+1} room={room} />)
        }
      </div>
    </section>
  )
}

export default OurRooms