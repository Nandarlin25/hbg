import React from 'react'
import Container from "../../../../components/Container";
import blogIntro from "../../../../assets/home/blog intro.jpg"
import { Link } from 'react-router-dom';



const BlogIntroSection = () => {
  return ( 
    <section className='bg-primary-frame'>
        <Container>
            <div className='py-14 lg:py-48 px-6'>
                <div className='md:grid grid-cols-2 gap-16'>
                    <div className='md:col-span-1 my-auto '>
                        <h2 className='text-primary font-heading text-2xl md:text-2xl lg:text-[40px] font-bold leading-10'>How to Choose the Perfect Hotel for Your Next Vacation</h2>
                        <p className='font-body text-[16px] md:text-[12px] lg:text-lg text-secondary mt-8 md:mt-4 lg:mt-8 md:tracking-wide md:leading-relaxed'>Choosing the right hotel is crucial to ensuring your vacation is memorable and stress-free. Whether you're traveling for business or pleasure, here’s a guide to help you select the ideal hotel for your next getaway.</p>

                      

                        <div className='bg-primary w-1/3  rounded-md mt-10 md:mt-12  lg:px-8 lg:py-2 px-8 py-2 flex justify-center items-center '>
                            <Link to="blog" className='text-[16px] md:text-[12px] lg:text-2xl font-body text-primary-frame text-nowrap '>Read More</Link>


                        </div>
                    </div>
                    <div className='md:col-span-1 mt-14 md:mt-0'>
                        <img src={`${blogIntro}`} alt="" className='h-[405px] md:h-[286px] lg:h-[405px] ms-auto' />

                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default BlogIntroSection