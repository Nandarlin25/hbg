import React from 'react'
import Container from "../../../../components/Container";


const CTASection = () => {
  return (
    <section className=' md:bg-primary-frame px-6 py-14 md:py-24'>
        <Container>
            <div className='bg-natural-light '>
              <div className='md:flex p-[26px] md:p-[62px] md:gap-2 lg:gap-5 justify-between items-center'>
                <div >
                    <h1 className='font-heading text-2xl  lg:text-4xl font-bold '>Subscribe for Exclusive Content and Updates!</h1>
                    <p className='font-body text-[16px] md:text-[12px] lg:text-[22px] text-secondary mt-4 md:mt-8 text-wrap'>Never miss out on a great deal! Subscribe for  updates on room availability and special offers.</p>
                </div>
                <div className='mx-auto mt-10 md:mt-0'>

                    <form action="" className='bg-secondary-card flex  md:w-[253px] lg:w-[400px] h-14 rounded-md justify-between items-center  px-2'>
                        <input type="text"  className='bg-secondary-card border-secondary-card w-2/3 text-[14px] md:text-xs text-primary font-bold font-body' placeholder='Email Address...'/>
                        <button className='bg-primary text-primary-frame text-[12px] md:text-[11px] lg:text-[16px] rounded-md  py-2 m-3 px-4  '>SUBSCRIBE</button>

                    </form>
                </div>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default CTASection