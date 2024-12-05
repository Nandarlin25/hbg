import React, { useEffect } from 'react'
import Container from '../../../components/Container'
import RoomDescription from './RoomDescription'
import RoomDetailCard from './RoomDetailCard'
import BookRoom from './BookRoom'
import SimilarRoom from './SimilarRoom'

const RoomDetailSection = () => {
    const scroll = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    useEffect(() => {
      const section1 = document.getElementById("description");
      if (section1) {
        section1.scrollIntoView({ behavior: "smooth" });
      }
    }, []);
  return (
    <div>
      <div className='py-[20px] w-full bg-secondary-card'>
        <Container>
          <section className='flex justify-between '>
              <ul className='flex gap-[40px] lg:space-x-0 md:space-x-0 sm:-space-x-4 lg:pe-0 md:pe-0 sm:me-10 font-bold font-heading lg:text-[30px] md:text-[20px] sm:text-[14px] lg:leading-[47px] md:leading-[23px] sm:leading-[18px]'>
                <li className='' onClick={() => scroll("description")}>Description</li>
                <li className='' onClick={() => scroll('detail')}>Room Detail</li>
                <li onClick={() => scroll('book')}>Book Room</li>
              </ul>
              <div className='flex items-center'>
                <p className='lg:text-[40px] md:text-[22px] font-bold lg:leading-[32px] lg:tracking-[0.32px] md:leading-[22px] md:tracking-[0.16px]'>$50 </p>
                <span className='lg:text-[22px] md:text-[12px] font-normal'>/NIGHT</span> 
              </div>
          </section>

      </Container>  
      </div>
      <div className='lg:py-[72px] md:py-[46px] bg-primary-frame'>
        <>
          <RoomDescription/>
          <RoomDetailCard/>
          <BookRoom/>
          <SimilarRoom/>
        </>
      </div>
    </div>

    
    
  )
}

export default RoomDetailSection