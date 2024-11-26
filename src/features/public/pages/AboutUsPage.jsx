import React from 'react'
import BreadCrumb from '../components/Breadcrumb'
import AboutUsIntro from '../components/AboutUsIntro'


const AboutUsPage = () => {
  return (
    <main>
      <BreadCrumb  currentPageTitle={"About Us"}/>
      <AboutUsIntro />
    </main>
  )
}

export default AboutUsPage