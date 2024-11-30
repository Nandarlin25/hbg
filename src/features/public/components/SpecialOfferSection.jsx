import React from 'react'
import Container from "../../../components/Container";
import line from "../../../assets/home/Line.png"
import useHomePageOfferStore from '../../../stores/useHomePageOfferStore';

const SpecialOfferSection = () => {
    const {offers} = useHomePageOfferStore()
  return (
    <section>
        <Container>
            <div className='py-24 flex flex-col items-center justify-center'>
                <div className='flex justify-center items-center gap-3'>
                <img src={`${line}`} alt="" />
                <h2 className='font-body text-lg'>MAKE YOUR STAY MEMORABLE</h2>
                <img src={`${line}`} alt="" />

                
                </div>
                <h1 className='font-heading text-[40px] font-bold mt-2'>Specials Offer for You</h1>

              
                <div className='mt-24 grid grid-cols-4 gap-5'>
                    {offers.map((offer,index) =>(
                         <div className='col-span-1 relative' key={index}>
                         <img src={offer.img} alt="" className=' h-[401px]' />
                         {offer.specialOffer &&
                         <div className='absolute top-0 left-0 translate-x-5 translate-y-5 bg-primary-frame rounded-md p-2 w-[100px] h-[40px] text-center'>
                         <button className='text-[16px] font-body text-primary '>{offer.specialOffer}</button>

                     </div>}
                         <div className='absolute bottom-0 left-0  translate-x-5 -translate-y-5'>
                             <h2 className='font-heading text-4xl text-primary-frame font-bold'>{offer.service}</h2>
                         </div>
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