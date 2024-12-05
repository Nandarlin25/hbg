import React from 'react'
import RoomSection from '../components/Room/RoomSection'
import Container from '../../../components/Container'
import BreadCrumb from '../components/Breadcrumb'

const Rooms = () => {
  return (
    <div className='lg:bg-primary-frame md:bg-primary-frame bg-secondary-card'> 
      <Container>
        <BreadCrumb currentPageTitle={"Rooms"} />
        <RoomSection/>
      </Container>
    </div>
  )
}

export default Rooms
