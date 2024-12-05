import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../public/components/Breadcrumb'
import RoomDetailSection from '../components/RoomDetailSection'

const RoomDetail = () => {
  return (
    <>
        <BreadCrumb currentPageTitle={"Rooms"} />
        <RoomDetailSection/>
    </>
  )
}

export default RoomDetail