import React from 'react'
import Container from "../../../components/Container";


const CTASection = () => {
  return (
    <section>
        <Container>
            <div className='bg-formColor my-24'>
              <div className='flex p-[62px] gap-5 justify-between items-center'>
                <div >
                    <h1 className='font-heading text-4xl font-bold'>Subscribe for Exclusive <br />Content and Updates!</h1>
                    <p className='font-body text-[22px] text-secondary mt-8'>Never miss out on a great deal! Subscribe for <br /> updates on room availability and special offers.</p>
                </div>
                <div className='mx-auto'>
                    <form action="" className='bg-secondary-card flex py-2 px-4 w-[400px] h-14 rounded-md justify-between'>
                        <input type="text"  className='bg-secondary-card border-secondary-card text-xs text-primary font-bold font-body' placeholder='Email Address...'/>
                        <button className='bg-primary text-primary-frame text-[16px] rounded-md  py-2 w-[120px] h-10 '>SUBSCRIBE</button>
                    </form>
                </div>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default CTASection