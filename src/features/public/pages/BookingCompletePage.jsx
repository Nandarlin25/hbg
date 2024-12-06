import React from "react";
import { HiCheck, HiCheckCircle } from "react-icons/hi2";
import OrderPrintSection from "../components/OrderPrintSection";
import Container from "../../../components/Container";
import PaymentSummeryCard from "../components/PaymentSummeryCard";
import BookedRoomInfoCard from "../components/BookedRoomInfoCard";
import CustomerDetailCard from "../components/CustomerDetailCard";
import PackageDetailSection from "../components/PackageDetailSection";

const BookingCompletePage = () => {
  return (
    <section>
      <div className="bg-secondary-card h-[600px] flex flex-col justify-center items-center">
        <HiCheckCircle className="fill-orderComplete stroke-white w-20 h-20" />
        <h1 className="text-4xl font-body font-bold mt-8">
          Your booking is completed.
        </h1>
        <p className="text-secondary font-body text-[22px] mt-2">
          Thank you for booking with us
        </p>
      </div>
      <Container>
        <div className="my-24">
          <OrderPrintSection />
          <PackageDetailSection/>
         <BookedRoomInfoCard/>
          <div className="mt-24">
            <div className="grid grid-cols-12 gap-16 ">
              <PaymentSummeryCard/>
             <CustomerDetailCard/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookingCompletePage;
