import React from 'react'
import SimilarRoomCard from './SimilarRoomCard'
import Container from '../../../components/Container'


const SimilarRoom = () => {
    const sRooms=[
        {
            id:1,
            title:""
        },
        {
            id:2,
            title:""
        }
    ]
  return (
    <Container>
        <div>
            <h2 className="lg:text-[40px] md:text-[20px] text-[20px] leading-[53px] font-heading font-bold text-center">Similar Rooms</h2>
        </div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:py-[40px] md:py-[20px] py-[20px]'>
            {
                sRooms.map((room)=>(<SimilarRoomCard key={room.id} room={room}/> ))
            }
        </div>
    </Container>
  )
}

export default SimilarRoom