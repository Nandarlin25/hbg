import React from 'react'
import Container from '../../../components/Container'
import { HiOutlinePrinter, HiPrinter } from 'react-icons/hi'

const OrderPrintSection = () => {
  return (
    <div className='border flex gap-[195px] items-center p-8'>
      <p className='font-body text-[22px] text-secondary'>We Recommend that you print this page now, and bring it with you for check-in at the hotel. You have been sent an email with a copy of these confirmed reservation details.</p>
      <div className='flex items-center gap-8'>
      <HiOutlinePrinter className='size-24'/>

        <button className='text-nowrap rounded-md text-primary-frame text-xl bg-primary px-8  h-14'>Print this page</button>
      </div>
    </div>
  )
}

export default OrderPrintSection