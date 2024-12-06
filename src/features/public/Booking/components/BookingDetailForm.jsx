import React from 'react'
import PaymentMethodSection from '../../components/PaymentMethodSection'
import usePaymentMethodStore from '../../../../stores/usePaymentMethodStore';
import { Link } from 'react-router-dom';
import BookingTotalCard from './BookingTotalCard';
import BookingRoomDetailCard from './BookingRoomDetailCard';
import ReservationSupportCard from './ReservationSupportCard';

const BookingDetailForm = () => {
    const { paymentMethods } = usePaymentMethodStore();

  return (
  
  <form action="">
    <div className="mt-8 flex gap-2 md:gap-[19px] items-center w-full ">
      <div className="flex flex-col w-1/2">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px]  lg:text-[22px] mb-3">
          First Name
        </label>
        <input
          type="text"
          className="h-14 border-border  text-secondary font-body text-[14px] md:text-[11px] md:text-[11px] lg:text-lg rounded-md"
          placeholder="First Name"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px] lg:text-[22px] mb-3">
          Last Name
        </label>
        <input
          type="text"
          className="h-14 border-border text-secondary font-body text-[14px] md:text-[11px] lg:text-lg rounded-md "
          placeholder="Last Name"
        />
      </div>
    </div>
    <div className="mt-10 w-full">
      <div className="flex flex-col ">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px] lg:text-[22px] mb-3">
          Company Name
        </label>
        <input
          type="text"
          className="h-14 border-border  text-secondary font-body text-[14px] md:text-[11px] lg:text-lg rounded-md"
          placeholder="company Name"
        />
      </div>
    </div>
    <div className="mt-10 w-full">
      <div className="flex flex-col ">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px] lg:text-[22px] mb-3">
          Address
        </label>
        <input
          type="text"
          className="h-14 border-border  text-secondary font-body text-[14px] md:text-[11px] lg:text-lg rounded-md"
          placeholder="Street Address"
        />
        <input
          type="text"
          className="mt-4 h-14 border-border  text-secondary font-body text-[14px] md:text-[11px] lg:text-lg rounded-md"
          placeholder="Apartment,etc...(Optional)"
        />
      </div>
    </div>
    <div className="mt-10 flex gap-2 md:gap-[19px]">
      <div className="flex flex-col w-1/2">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px] lg:text-[22px] mb-3">
          Town / City
        </label>
        <input
          type="text"
          className="h-14 border-border  text-secondary font-body text-[14px] md:text-[11px] lg:text-lg rounded-md"
          placeholder="Town/city"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px] lg:text-[22px] mb-3">
          Country
        </label>
        <input
          type="text"
          className="h-14 border-border  text-secondary font-body text-[14px] md:text-[11px] lg:text-lg rounded-md"
          placeholder="Country"
        />
      </div>
    </div>
    <div className="mt-10 flex gap-2 md:gap-[19px]">
      <div className="flex flex-col w-1/2">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px] lg:text-[22px] mb-3">
          Email Address
        </label>
        <input
          type="text"
          className="h-14 border-border  text-secondary font-body text-[14px] md:text-[11px] lg:text-lg rounded-md"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px] lg:text-[22px] mb-3">
          Phone
        </label>
        <input
          type="text"
          className="h-14 border-border  text-secondary font-body text-[14px] md:text-[11px] lg:text-lg rounded-md"
          placeholder="Phone"
        />
      </div>
    </div>
    <div className="mt-10 w-full">
      <div className="flex flex-col ">
        <label htmlFor="" className="text-primary text-[14px] md:text-[12px] lg:text-[22px] mb-3">
          Request
        </label>
        <textarea
          type="text"
          rows="4"
          className="resize-none border-border my-3 text-secondary font-body text-[14px] lg:text-lg rounded-md focus:border-secondary focus:ring-secondary active:border-secondary active:ring-secondary ring-border"
          placeholder="Notes about your order, eg.special notes for delivery"
        />
        <p className="text-secondary font-body text-[12px] lg:text-lg">
          Special requests cannot be guaranteed but we will do our
          best to meet your needs
        </p>
      </div>
    </div>
    <div className="mt-16">
      <h4 className="text-primary font-heading font-bold text-2xl md:text-3xl ">
        Select Payment Method:
      </h4>
      {paymentMethods.map((method) => (
        <PaymentMethodSection key={method.id} method={method}/>
       
      ))}
    </div>
    <div className='md:hidden mt-14 md:mt-0'>
    <BookingTotalCard />
            <BookingRoomDetailCard />
            <ReservationSupportCard />
    </div>
    <div className="flex items-center gap-2 mt-8 ">
      <Link to="/rooms/room-details/booking-completed" className="text-xl font-body text-primary-frame bg-primary px-8 py-2 md:px-4 lg:px-8 lg:py-2 rounded-md">
        Book Now
      </Link>
      <button className="text-xl font-body text-primary border border-primary px-8 py-2 md:px-4 lg:px-8 lg:py-2 rounded-md">
        Cancel
      </button>
    </div>
  </form>
  )
}

export default BookingDetailForm