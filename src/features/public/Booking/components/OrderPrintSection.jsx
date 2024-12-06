import React from 'react'
import Container from '../../../../components/Container'
import { HiOutlinePrinter, HiPrinter } from 'react-icons/hi'

const OrderPrintSection = () => {
  return (
    <div className='border block md:flex md:gap-[92px] lg:gap-[195px] items-center p-4 md:p-8 bg-primary-frame lg:bg-white my-12 lg:my-0'>
      <p className='font-body text-[12px] lg:text-[22px] text-secondary'>We Recommend that you print this page now, and bring it with you for check-in at the hotel. You have been sent an email with a copy of these confirmed reservation details.</p>
      <div className='flex items-center gap-4 md:gap-8 mt-6 md:mt-0'>
      <HiOutlinePrinter className='size-8 lg:size-24'/>

        <button className='text-nowrap rounded-md text-primary-frame text-[12px] lg:text-xl bg-primary px-4 lg:px-8 py-2 lg:h-14'>Print this page</button>
      </div>
    </div>
  )
}

export default OrderPrintSection