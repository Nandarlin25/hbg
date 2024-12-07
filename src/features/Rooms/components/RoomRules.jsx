import React from 'react'

const RoomRules = () => {
  return (
    <div>
        <p className='lg:text-[24px] text-[12px] lg:leading-[32px] lg:tracking-[0.32px] text-secondary lg:py-[64px] md:py-[44px] py-[24px]'>Hotel room rules are essential guidelines designed to ensure a safe, comfortable, and respectful environment for all guests.</p>
        <div className='lg:flex md:flex lg:leading-[32px] lg:tracking-[0.32px]'>
            <div className='lg:w-[572px] lg:pe-32 md:pe-20'>
                <div className='lg:text-[18px] text-[12px] flex gap-2 pb-3'>
                    <p className='font-bold'>Check- in:</p>
                    <p className='text-secondary'>2.00PM</p>
                </div>
                <div className='lg:text-[18px] text-[12px] flex gap-2 pb-3'>
                    <p className='font-bold text-nowrap'>Check-out:</p>
                    <p className='text-secondary'>
                    11.00PM</p>
                </div>
                <div className='lg:text-[18px] text-[12px] font-bold hidden md:block lg:block'>
                    <p className='text-primary'>Late check-out may be available upon request and subject to availability. A fee may apply.</p>
                </div>
            </div>
            <div className='lg:w-[572px] lg:pe-20 pe-10 gap-[16px]'>
                <div className='lg:text-[18px] text-[12px] pb-3 flex gap-2'>
                    <p className='font-bold'>Lost room key </p>
                    <p className='text-secondary'>($10 Fine)</p>
                </div>
                <div className='lg:text-[18px] text-[12px] pb-3 lg:block md:block flex gap-2'>
                    <p className='font-bold text-nowrap'>Damage the items
                    </p>
                    <p className='text-secondary'>(Depending on the value of item)</p>
                </div>
                <div className='lg:text-[18px] text-[12px]  font-bold lg:hidden md:hidden visible pb-3 '>
                    <p className='lg:text-primary md:text-primary text-secondary'>Late check-out may be available upon request and subject to availability. A fee may apply.</p>
                </div>
                <div className='lg:text-[18px] text-[12px] pb-3'>
                    <p className='font-bold lg:text-primary md:text-primary text-secondary'> Guests are responsible for any damages or loss of property caused by them or their visitors.</p>
                    
                </div>
                <div className='lg:text-[18px] text-[12px] font-bold'>
                  <p className='lg:text-primary md:text-primary text-secondary'>Additional guests may be accommodated for an extra charge, subject to availability.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RoomRules