import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../public/components/Breadcrumb'
import RoomDetailSection from '../components/RoomDetailSection'

const RoomDetail = () => {
  return (
    <div className=''>
        <BreadCrumb currentPageTitle={"Rooms"} />
        <RoomDetailSection/>
    </div>
  )
}

export default RoomDetail