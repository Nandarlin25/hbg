import React from 'react'
import Container from "../../../../components/Container";
import line from "../../../../assets/home/Line.png"
import useHomePageOfferStore from '../../../../stores/useHomePageOfferStore';
import { Link } from 'react-router-dom';


const SpecialOfferSection = () => {
    const {offers} = useHomePageOfferStore()
  return (
    <section className=' bg-primary-frame px-6'>
        <Container>
            <div className='py-14 md:py-24 md:flex flex-col items-center justify-center'>
              <div className=''>
              <div className='flex justify-start md:justify-center items-center md:gap-3'>
                <img src={`${line}`} alt="" className='w-7 md:w-14'/>
                <h2 className='font-body text-[16px] md:text-[12px] lg:text-lg'>MAKE YOUR STAY MEMORABLE</h2>
                <img src={`${line}`} alt="" className='w-7 md:w-14'/>

                
                </div>
                <h1 className='font-heading text-2xl md:text-2xl lg:text-[40px] font-bold mt-2'>Specials Offer for You</h1>

              </div>
              
                <div className='mt-8 min-w-full md:mt-24 md:grid grid-cols-4 gap-5'>
                    {offers.map((offer,index) =>(
                         <div key={index} className=' mt-8 md:mt-0'>
                            <Link to={offer.link} className='col-span-1 relative ' >
                         <img src={offer.img} alt="" className=' md:h-[259px] lg:h-[401px] w-full' />
                         {offer.specialOffer &&
                         <div className='absolute top-0 left-0 translate-x-5 translate-y-5 bg-primary-frame rounded-md p-2 md:p-0 lg:p-2 w-[100px] h-[40px] md:w-20 md:h-6 lg:w-[100px] lg:h-[40px] text-center'>
                         <button className='text-[16px] md:text-[11px] lg:text-[16px] font-body text-primary '>{offer.specialOffer}</button>

                     </div>}
                         <div className='absolute bottom-0 left-0  translate-x-5 -translate-y-5'>
                             <h2 className='font-heading text-4xl md:text-2xl lg:text-4xl text-primary-frame font-bold'>{offer.service}</h2>
                         </div>
                     </Link>
                         </div>
                    )
)}
                    {/* <div className='col-span-1 relative'>
                        <img src={`${offer1}`} alt="" className=' h-[401px]' />
                        <div className='absolute top-0 left-0 translate-x-5 translate-y-5 bg-primary-frame rounded-md p-2 w-[100px] h-[40px] text-center'>
                            <button className='text-[16px] font-body text-primary '>30% OFF</button>

                        </div>
                        <div className='absolute bottom-0 left-0  translate-x-5 -translate-y-5'>
                            <h2 className='font-heading text-4xl text-primary-frame font-bold'>Stay</h2>
                        </div>
                    </div>
                    <div className='col-span-1 relative'>
                        <img src={`${offer2}`} alt="" className=' h-[401px]' />
                       
                        <div className='absolute bottom-0 left-0  translate-x-5 -translate-y-5'>
                            <h2 className='font-heading text-4xl text-primary-frame font-bold'>Dine</h2>
                        </div>
                    </div>
                    <div className='col-span-1 relative'>
                        <img src={`${offer3}`} alt="" className=' h-[401px]' />
                        <div className='absolute top-0 left-0 translate-x-5 translate-y-5 bg-primary-frame rounded-md p-2 w-[100px] h-[40px] text-center'>
                            <button className='text-[16px] font-body text-primary '>20% OFF</button>
                        </div>
                        <div className='absolute bottom-0 left-0  translate-x-5 -translate-y-5'>
                            <h2 className='font-heading text-4xl text-primary-frame font-bold'>Relax</h2>
                        </div>
                    </div>
                    <div className='col-span-1 relative'>
                        <img src={`${offer4}`} alt="" className=' h-[401px]' />
                      
                        <div className='absolute bottom-0 left-0  translate-x-5 -translate-y-5'>
                            <h2 className='font-heading text-4xl text-primary-frame font-bold'>Facility</h2>
                        </div>
                    </div> */}
                </div>
            </div>
         
        </Container>
        
    </section>
  )
}

export default SpecialOfferSection