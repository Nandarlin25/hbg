import React from "react";
import { HiCheck, HiCheckCircle } from "react-icons/hi2";
import OrderPrintSection from "../components/OrderPrintSection";
import Container from "../../../../components/Container";
import PaymentSummeryCard from "../components/PaymentSummeryCard";
import BookedRoomInfoCard from "../components/BookedRoomInfoCard";
import CustomerDetailCard from "../components/CustomerDetailCard";
import PackageDetailSection from "../components/PackageDetailSection";

const BookingCompletePage = () => {
  return (
    <section className="md:bg-primary-frame lg:bg-white">
      <div className="bg-secondary-card h-[300px] lg:h-[600px] flex flex-col justify-center items-center">
        <HiCheckCircle className="fill-orderComplete stroke-white w-[38px] h-[38px] md:w-20 md:h-20 md:mt-8 lg:mt-0 " />
        <h1 className="text-[14px] lg:text-4xl  font-body font-bold mt-2 lg:mt-8">
          Your booking is completed.
        </h1>
        <p className="text-secondary font-body text-[14px] md:text-[12px] lg:text-[22px] md:mt-2">
          Thank you for booking with us
        </p>
      </div>
      <Container>
        <div className="lg:my-24 px-6 ">
          <OrderPrintSection />
          <PackageDetailSection/>
         <BookedRoomInfoCard/>
          <div className="my-14 m lg:mt-24 md:mb-0">
            <div className="md:grid md:grid-cols-12 md:gap-6 lg:gap-16 ">
            <CustomerDetailCard/>

              <PaymentSummeryCard/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookingCompletePage;
