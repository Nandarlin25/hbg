import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/Breadcrumb";
import ServiceSection from "../components/emeralServices/ServiceSection";

const ServicesPage = () => {
  return (
    <>
      <Container>
        {/* <BreadCrumb currentPageTitle={"Services"} /> */}

        <ServiceSection />
      </Container>
    </>
  );
};

export default ServicesPage;
