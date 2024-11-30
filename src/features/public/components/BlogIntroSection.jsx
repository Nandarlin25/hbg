import React from 'react'
import Container from "../../../components/Container";
import blogIntro from "../../../assets/home/blog intro.jpg"
import { Link } from 'react-router-dom';



const BlogIntroSection = () => {
  return ( 
    <section>
        <Container>
            <div className='py-48'>
                <div className='grid grid-cols-2 gap-16'>
                    <div className='col-span-1 my-auto'>
                        <h2 className='text-primary font-heading text-[40px] font-bold'>How to Choose the Perfect Hotel for Your Next Vacation</h2>
                        <p className='font-body text-lg text-secondary mt-8 tracking-wide text-nowrap leading-relaxed'>Choosing the right hotel is crucial to ensuring your vacation is memorable <br /> and stress-free. Whether you're traveling for business or pleasure, here’s a <br />guide to help you select the ideal hotel for your next getaway.</p>
                        <div className='bg-primary w-[200px] h-[56px] rounded-md mt-12 text-center px-8 py-2 '>
                            <Link to="blog" className='text-2xl font-body text-primary-frame  '>Read More</Link>

                        </div>
                    </div>
                    <div className='col-span-1 '>
                        <img src={`${blogIntro}`} alt="" className='w-[511px] h-[405px] ms-auto' />

                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default BlogIntroSection