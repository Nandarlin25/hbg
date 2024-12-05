import React from 'react'

const RoomPrice = () => {
  return (
    <div>
        <p className='lg:text-[24px] text-[12px] lg:leading-[32px] lg:tracking-[0.32px] text-secondary lg:py-[64px] md:py-[44px] py-[24px]'>
        A luxurious room exudes elegance and comfort, featuring premium furnishings, sophisticated decor, and high-end amenities designed for an indulgent experience.
        </p>
        <div className='lg:flex md:flex lg:leading-[32px] lg:tracking-[0.32px]'>
            <div className='lg:w-[572px] md:w-[572px] sm:w-full lg:pe-60 md:pe-50 '>
                <div className='lg:text-[18px] text-[12px] flex lg:gap-2 md:gap-2 gap-16 pb-3'>
                    <p className='font-bold'>Price:</p>
                    <p className='text-secondary'>$50/ night</p>
                </div>
                <div className='lg:text-[18px] text-[12px] flex lg:gap-2 md:gap-2 gap-11 pb-3'>
                    <p className='font-bold'>Included:</p>
                    <p className='text-secondary'>
                    $6-Registration Ticket Fees
                    (per room *night)</p>
                </div>
                <div className='lg:text-[18px] text-[12px] flex lg:gap-2 md:gap-2 gap-11'>
                    <p className='font-bold'>Included:</p>
                    <p className='text-secondary'>$8 Adults, $5 Children-City Tax
                    (person *night)</p>
                </div>
            </div>
            <div className='lg:w-[572px] md:w-[572px] lg:pe-20 md:pe-10 lg:mt-0 md:mt-0 mt-2'>
                <div className='lg:text-[18px] text-[12px] flex lg:gap-2 md:gap-2 gap-0 pb-3'>
                    <p className='font-bold'>Security Deposit : </p>
                    <p className='text-secondary'>$50</p>
                </div>
                <div className='lg:text-[18px] text-[12px] flex lg:gap-2 md:gap-2 gap-12  pb-3'>
                    <p className='font-bold text-nowrap'>Not Incl:</p>
                    <p className='text-secondary'>$5 Adults, $4 Children-Boat Transfer Fees(person *night)</p>
                </div>
                <div className='lg:text-[18px] text-[12px] flex lg:gap-2 md:gap-2 gap-11'>
                    <p className='font-bold'>Included:</p>
                    <p className='text-secondary'>10% -Value Added Tax
                    (per room)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomPrice