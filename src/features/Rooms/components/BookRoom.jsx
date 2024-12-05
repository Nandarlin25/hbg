import React, { useState } from 'react'
import vector from '../../../assets/Room/Booking Detail/icons/vector.png'
import 'flowbite';
import Container from '../../../components/Container'




const BookRoom = () => {
  const [checkIn, setCheckIn] = useState('2024-11-16'); 
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedCheckIn = new Date(checkIn).toLocaleDateString('en-GB', options);

  const [checkOut, setCheckOut] = useState('16 Nov 2024');
  const formattedCheckOut = new Date(checkOut).toLocaleDateString('en-GB', options);

  const [rooms, setRooms] = useState(1);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);


  return (
    <section id="book">
      <div className='bg-primary-frame lg:py-[64px] md:py-[44px] py-[24px]'>
    <Container>
      <div>
      <div className='lg:grid lg:grid-cols-5 md:grid md:grid-cols-5 font-emerald'>
        <div className='lg:col-span-3 md:col-span-3 '>
          <div>
            <h3 className='font-heading lg:text-[40px] md:text-[20px] text-[24px] font-bold'>More Information</h3>
            <p className='lg:text-[18px] md:text-[12px] text-[12px] lg:leading-[32px] lg:tracking-[0.32px] leading-[20px] tracking-[0.16px] text-secondary lg:pe-5 md:pe-16 lg:mt-0 md:mt-0 py-3 pe-5'>To provide you with multiple convenient ways to reach us for assistance. Whether you have questions about your booking, need help with special requests, or require support during your stay, our dedicated customer service team is here to help. </p>
          </div>
          <div className="lg:py-[56px] md:py-[26px] py-[20px]">
            <div className="flex lg:gap-[50px] md:gap-[25px] gap-[20px] lg:pb-[40px] md:pb-[20px] pb-[20px]">
              <img src={vector} alt="" className='lg:w-[45px] lg:h-[45px] md:w-[22.56px] md:h-[22.56px] h-[19px] w-[19px]'/>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-bold lg:text-[22px] md:text-[12px]'>Address</p>
                <div className='lg:text-[18px] md:text-[12px] text-secondary lg:leading-[32px] lg:tracking-[0.32px] md:leading-[22px] md:tracking-[0.16px]'>
                  <p>
                    Kabar Aye Pagoda Rd, Yangon
                  </p>
                  <p>11081, Myanmar (Burma)</p>
                </div>
              </div>
            </div>
            <div className="flex lg:gap-[50px] md:gap-[25px] gap-[20px] lg:pb-[40px] md:pb-[20px] pb-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-[45px] lg:h-[45px] md:w-[22.56px] md:h-[22.56px] h-[19px] w-[19px] text-zinc-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-bold lg:text-[22px] md:text-[12px]'>Phones</p>
                <p className='lg:text-[18px] md:text-[12px] text-secondary lg:leading-[32px] lg:tracking-[0.32px] md:leading-[18px] md:tracking-[0.16px]'>
                +1 (555) 123-4567
                </p>
                <p className='lg:text-[18px] md:text-[12px] text-secondary lg:leading-[32px] lg:tracking-[0.32px] md:leading-[18px] md:tracking-[0.16px]'>+99 (0) 344 956 4050</p> 
              </div>
            </div> 
            <div className="flex lg:gap-[50px] md:gap-[25px] gap-[20px] lg:pb-[40px] md:pb-[20px] pb-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-[45px] lg:h-[45px] md:w-[22.56px] md:h-[22.56px] h-[19px] w-[19px] text-zinc-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <div className='flex flex-col gap-[10px]'>
                <p className='font-bold lg:text-[22px] md:text-[12px]'>Emails</p>
                <p className='lg:text-[18px] md:text-[12px] text-secondary lg:leading-[32px] lg:tracking-[0.32px] md:leading-[18px] md:tracking-[0.16px]'>
                reservations@emerald.com
                </p>
                <p className='lg:text-[18px] md:text-[12px] text-secondary lg:leading-[32px] lg:tracking-[0.32px] md:leading-[18px] md:tracking-[0.16px]'>11081, Myanmar (Burma)</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 font-emerald'>
          <div>
            <h3 className='font-heading lg:text-[40px] md:text-[20px] text-[24px] font-bold pb-4'>Book Room</h3>
          </div>
          <div className='lg:w-[464px] lg:h-[743px] md:w-[241px] md:h-[397px] lg:p-8 md:p-4 p-3 lg:space-y-6 md:space-y-4 space-y-4  bg-secondary-card'>
            <div className=''>
              <p className='font-bold lg:text-[22px] md:text-[11px] text-[18px] '>CHECK-IN</p>
              <form action="">
              <div className="relative max-w-sm">
                <div className="absolute lg:right-3 lg:top-1/2 transform lg:-translate-y-1/2 md:right-12 md:top-1/2  md:-translate-y-1/2 right-8 top-1/2 -translate-y-1/2 top-1/2 -translate-y-1/2 ">
        
                  <svg className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg> 
                  </div>
                <input type="text" value={formattedCheckIn} onChange={(e) => setCheckIn(e.target.value)} className="lg:w-[400px] lg:h-[56px] md:w-[200px] md:h-[22px] w-[332px] h-[46px] md:mt-1 bg-transparent relative lg:p-3 md:px-1 md:py-3 border border-border  text-gray-600 lg:text-[24px] md:text-[12px] focus:outline-none focus:ring-2 focus:ring-gray-200" /> 
                <input type="date" value={formattedCheckIn} onChange={(e) => setCheckIn(e.target.value)} className="lg:w-[400px] lg:h-[56px] md:w-[200px] md:h-[22px] w-[332px] h-[46px] md:mt-1 opacity-0 absolute start-0 end-0 lg:p-3 md:px-1 md:py-3 border border-border  text-gray-600 lg:text-[24px] md:text-[18px] focus:outline-none focus:ring-2 focus:ring-gray-200" /> 
              </div>
              </form>
              
            </div>
            <div>
              <p className='font-bold lg:text-[22px] md:text-[11px] text-[18px]'>CHECK-OUT</p>
              <form action="">
              <div className="relative max-w-sm">
                <div className="absolute lg:right-3 lg:top-1/2 transform lg:-translate-y-1/2 md:right-12 md:top-1/2  md:-translate-y-1/2 right-8 top-1/2 -translate-y-1/2">
                  <svg className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg> 
                  </div>
                <input type="text" value={formattedCheckOut} onChange={(e) => setCheckIn(e.target.value)} className="lg:w-[400px] lg:h-[56px] md:w-[200px] md:h-[22px] w-[332px] h-[46px] md:mt-1 bg-transparent relative lg:p-3 md:px-1 md:py-3 border border-border  text-gray-600 lg:text-[24px] md:text-[12px] focus:outline-none focus:ring-2 focus:ring-gray-200" /> 
                <input type="date" value={formattedCheckOut} onChange={(e) => setCheckOut(e.target.value)} className="lg:w-[400px] lg:h-[56px] md:w-[200px] md:h-[22px] w-[332px] h-[46px] md:mt-1 opacity-0 absolute start-0 end-0 lg:p-3 md:px-1 md:py-3 border border-border  text-gray-600 lg:text-[24px] md:text-[12px] focus:outline-none focus:ring-2 focus:ring-gray-200" /> 
              </div>
              </form>
              
            </div>
            <div> 
              <label className="block lg:text-[22px] md:text-[11px] text-[18px] font-bold mb-2">ROOMS</label> 
              <div className="relative"> 
                <input type="text" value={`${rooms<10 ? `0${rooms}`:`${rooms}`} ${rooms===1 ? 'Room': 'Rooms'}`} readOnly className="lg:w-[400px]  lg:h-[56px] md:w-[200px] md:h-[22px] w-[332px] h-[46px] md:mt-1 bg-transparent lg:p-3 md:px-1 md:py-3 border border-border text-gray-600 lg:text-[24px] md:text-[12px] focus:outline-none focus:ring-2 focus:ring-gray-200" /> 
                <div className="absolute lg:right-3 lg:top-1/2 transform lg:-translate-y-1/2 md:right-12 md:top-1/2 right-8 top-1/2 -translate-y-1/2 md:-translate-y-1/2 flex flex-col"> 
                  <button className="focus:outline-none lg:mt-0 md:mt-2" onClick={() => setRooms(prev => Math.min(prev + 1, 100))}> 
                  <svg className="lg:w-4 lg:h-4 md:w-3 md:h-3  h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /> 
                  </svg> </button>
                  <button className="focus:outline-none disabled:opacity-50 lg:mb-0 md:mb-2" disabled={rooms === 1}  onClick={() => setRooms(prev => Math.max(prev - 1, 1))}> 
                  <svg className="lg:w-4 lg:h-4 md:w-3 md:h-3  h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> </svg> </button>
                </div> 
              </div> 
            </div>
            <div> 
              <label className="block lg:text-[22px] md:text-[11px] text-[18px] font-bold mb-2">ADULTS</label> 
              <div className="relative"> 
                <input type="text" value={`${adults<10 ? `0${adults}`:`${adults}`} ${adults===1 ? 'Adult': 'Adults'}`} readOnly className="lg:w-[400px] lg:h-[56px] md:w-[200px] md:h-[22px] w-[332px] h-[46px] md:mt-1 bg-transparent lg:p-3 md:px-1 md:py-3 border border-border text-gray-600 lg:text-[24px] md:text-[12px] focus:outline-none focus:ring-2 focus:ring-gray-200" /> 
                <div className="absolute lg:right-3 lg:top-1/2 transform  lg:-translate-y-1/2 right-8 top-1/2 -translate-y-1/2 md:right-12 md:top-1/2  md:-translate-y-1/2 flex flex-col"> 
                  <button className="focus:outline-none lg:mt-0 md:mt-2 " onClick={() => setAdults(prev => Math.min(prev + 1, 100))}> 
                  <svg className="lg:w-4 lg:h-4 md:w-3 md:h-3 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /> </svg> </button>
                  <button className="focus:outline-none disabled:opacity-50 lg:mb-0 md:mb-2 " disabled={adults === 1}  onClick={() => setAdults(prev => Math.max(prev - 1, 1))}> 
                  <svg className="lg:w-4 lg:h-4 md:w-3 md:h-3 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> </svg> </button>
                </div> 
              </div> 
            </div>
            <div> 
              <label className="block lg:text-[22px] md:text-[11px] text-[18px] font-bold mb-2">CHILDREN</label> 
              <div className="relative"> 
                <input type="text" value={`${children} ${children==1 ? 'Child': 'Children'}`} readOnly className="lg:w-[400px] lg:h-[56px] md:w-[200px] md:h-[22px] w-[332px] h-[46px] md:mt-1 bg-transparent lg:p-3 md:px-1 md:py-3 border border-border text-gray-600 lg:text-[24px] md:text-[12px] focus:outline-none focus:ring-2 focus:ring-gray-200" /> 
                <div className="absolute lg:right-3  lg:top-1/2 transform lg:-translate-y-1/2 right-8 top-1/2 -translate-y-1/2 md:right-12 md:top-1/2  md:-translate-y-1/2 flex flex-col"> 
                  <button className="focus:outline-none lg:mt-0 md:mt-2 " onClick={() => setChildren(prev => Math.min(prev + 1, 100))}> 
                  <svg className="lg:w-4 lg:h-4 md:w-3 md:h-3 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /> </svg> </button>
                  <button className="focus:outline-none disabled:opacity-50 lg:mb-0 md:mb-2" disabled={children === 0}  onClick={() => setChildren(prev => Math.max(prev - 1, 0))}> 
                  <svg className="lg:w-4 lg:h-4 md:w-3 md:h-3 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> </svg> </button>
                </div> 
              </div> 
            </div>
            <button className="lg:w-[400px] md:w-[200px] rounded-md bg-black text-white w-[332px] lg:text-[20px] md:text-[12px] text-[12px] lg:py-4 md:py-2  lg:h-[56px] md:h-[32px] h-[32px]  hover:bg-gray-800 transition-colors"> BOOK NOW </button>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </div>
    </section>

  )
}

export default BookRoom