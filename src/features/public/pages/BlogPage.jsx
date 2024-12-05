import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/Breadcrumb";
import BlogSection from "../components/Blog/BlogCardSection";

const BlogPage = () => {
  return (
    <>
      <Container className="mt-6">
        {/* <BreadCrumb currentPageTitle={"Blog"} /> */}
        <BlogSection />
      </Container>
    </>
  );
};

export default BlogPage;
