import React from "react";
import Container from "../../../components/Container";
import usePaymentMethodStore from "../../../stores/usePaymentMethodStore";
import RoomDetail1 from "../../../assets/Room/Room-details/Room 1.jpg";
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
        <div className="pt-24 pb-48 grid grid-cols-3 gap-5 ">
          <div className="col-span-2 mr-24">
            <h4 className="font-heading text-primary text-3xl font-bold">
              Billing Details
            </h4>
            <BookingDetailForm />
          </div>
          <div className="col-span-1">
            <BookingTotalCard />
            <BookingRoomDetailCard />
            <ReservationSupportCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookingDetailPage;
