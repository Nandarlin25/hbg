import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../components/Breadcrumb'
import BlogSection from '../components/BlogCardSection'

const BlogPage = () => {
  return (
    <>
    <Container>
      <BreadCrumb currentPageTitle={"Blog"} />
      <BlogSection/>
    </Container>
    </>
  )
}

export default BlogPage
