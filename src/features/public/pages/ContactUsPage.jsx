import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../components/Breadcrumb'
import ContactUs from '../components/ContactUs'

const ContactUsPage = () => {
  return (
    <>
    <Container>
      {/* <BreadCrumb currentPageTitle={"Contact Us"} /> */}
      <ContactUs/>
    </Container>
    </>
  )
}

export default ContactUsPage