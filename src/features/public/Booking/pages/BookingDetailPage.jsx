import React from "react";
import Container from "../../../../components/Container";
import usePaymentMethodStore from "../../../../stores/usePaymentMethodStore";
import RoomDetail1 from "../../../../assets/Room/Room-details/Room 1.jpg";
import { HiCalendar } from "react-icons/hi2";
import { HiUser, HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import PaymentMethodSection from "../components/PaymentMethodSection";
import ReservationSupportCard from "../components/ReservationSupportCard";
import BookingRoomDetailCard from "../components/BookingRoomDetailCard";
import BookingTotalCard from "../components/BookingTotalCard";
import BookingDetailForm from "../components/BookingDetailForm";

const BookingDetailPage = () => {
  const { paymentMethods } = usePaymentMethodStore();
  const handleCheckBox = () => {};
  return (
    <section className="bg-primary-frame">
      <Container>
        <div className="pt-24 pb-14 md:pb-48 md:grid md:grid-cols-3 gap-2 px-6 ">
          <div className="w-full md:col-span-2 pr-0 lg:pr-24 md:pr-10 ">
            <h4 className="font-heading text-primary text-2xl md:text-[20px] lg:text-3xl font-bold">
              Billing Details
            </h4>
            <BookingDetailForm />
          </div>
          <div className="hidden md:col-span-1 md:block ">
            <BookingTotalCard />
            <BookingRoomDetailCard />
            <ReservationSupportCard/>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookingDetailPage;
