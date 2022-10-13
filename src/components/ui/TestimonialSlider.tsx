import React, { useState } from 'react'
import { Testimonial } from '../../@types/types'

interface TestimonialProps {
    testimonials: Testimonial[]
}
const TestimonialSlider = ({ testimonials }: TestimonialProps) => {
    const [activeTestimonial,setActiveTestimonial]=useState<number>(0)
    return (
        <div className="lg:px-60 md:px-40 sm:px-20 px-10 ">
           
        </div>
    )
}

export default TestimonialSlider