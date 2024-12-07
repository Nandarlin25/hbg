import React from 'react'
import RoomSection from '../components/Room/RoomSection'
import Container from '../../../components/Container'

const Rooms = () => {
  return (
    <div className='lg:bg-primary-frame md:bg-primary-frame bg-secondary-card'> 
      <Container>
        <RoomSection/>
      </Container>
    </div>
  )
}

export default Rooms