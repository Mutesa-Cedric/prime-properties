import React, { useState } from 'react'
import { Testimonial } from '../../@types/types'
import TestimonialSliderComponent from './TestimonialSliderComponent'

interface TestimonialProps {
    testimonials: Testimonial[]
}
const TestimonialSlider = ({ testimonials }: TestimonialProps) => {
    const sliderTestimonials = testimonials.slice(3, 6);
    const [activeTestimonial, setActiveTestimonial] = useState<number>(1)
    return (
        <div className="xl:px-60 lg:px-40 md:px-12 px-10 flex flex-col items-center py-10 bg-white relative">
            <div className="flex flex-col space-y-3 items-center pb-10">
                <h2 className='font-medium text-2xl text-heading-1'>What our Clients say  </h2>
                <p className="text-gray-primary/75 text-base max-w-lg text-center">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <TestimonialSliderComponent {...sliderTestimonials[activeTestimonial]} />
            <div className='absolute bottom-9 left-[40.5%] flex space-x-2'>
                {
                    new Array(3).fill(1).map((_el, i) => (
                        <div onClick={() => setActiveTestimonial(i)} key={i} className={i === activeTestimonial ? "h-3 w-3 bg-primary-light rounded-full" : "h-3 w-3 bg-[#D3DEE8] rounded-full"}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default TestimonialSlider