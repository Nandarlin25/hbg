import React, { useState } from 'react'
import Container from '../../../components/Container'
import RoomAmenities from './RoomAmenities'
import RoomPrice from './RoomPrice'
import RoomRules from './RoomRules'
import useRoomDetail from '../../../stores/useRoomDetail'
import RoomDetailBtn from './RoomDetailBtn'


const RoomDetailCard = () => {

  const {roomDetailBtn}=useRoomDetail();
  

  return (

    <section id="detail">
      <div className='bg-secondary-card min-h-[550px]'>
        <Container>
          <div className='lg:py-[64px] md:py-[32px] py-[20px] font-emerald '>
          <div className='font-heading lg:text-[40px] md:text-[20px] text-[24px] font-bold lg:pe-96 md:pe-80 pe-20 lg:pb-[64px] md:pb-[32px] pb-[25px]'>
            We always want to give our customer the perfect room 
          </div>
          <div className='grid grid-cols-3 gap-[15px]' >
            {
              roomDetailBtn.map((btn)=> (<RoomDetailBtn key={btn.id} btn={btn}/>))
            }
          </div>
          <hr className='border-b-secondary border-b-[1px] lg:py-[64px] md:py-[32px] py-[18px]'/>
          <div>
            {
              roomDetailBtn.filter((btn)=> btn.id== 1 && btn.isActive==true ).map((btn)=> (<RoomAmenities key={btn.id} />))
            }
            {
              roomDetailBtn.filter((btn)=> btn.id== 2 && btn.isActive==true ).map((btn)=> (<RoomPrice key={btn.id}/>))
            }
            {
              roomDetailBtn.filter((btn)=> btn.id== 3 && btn.isActive==true ).map((btn)=> (<RoomRules key={btn.id}/>))
            }
    
          </div>
        </div>
        </Container>
        </div>
    </section>
    )
}

export default RoomDetailCard


