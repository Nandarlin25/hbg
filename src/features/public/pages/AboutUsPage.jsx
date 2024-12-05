import React from "react";
import BreadCrumb from "../components/Breadcrumb";
import AboutUsIntro from "../components/AboutUsIntro";

const AboutUsPage = () => {
  return (
    <div className="relative">
        <BreadCrumb 
        currentPageTitle={"About Us"} />
      <AboutUsIntro />
    </div>
  );
};

export default AboutUsPage;
