import Image from 'next/image'
import React from 'react'
import { Testimonial } from '../../@types/types'

const TestimonialSliderComponent: React.FC<Testimonial> = ({profileImage, testimonial, name, role }) => {
    return (
        <div className="flex  space-x-5">
            <div className='relative w-36 h-36'>
                <Image src={'/images/testimonial.png'} layout="fill" objectFit='cover'
                    className="rounded-full" />
                <div className='absolute bottom-3 -right-1 rounded-full w-8 h-8 text-white flex items-center justify-center bg-primary-light'>
                    <svg width="18" height="18" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.00680363 20.2051C0.00680363 24.4122 3.41715 27.8225 7.62422 27.8225C11.8314 27.8225 15.2417 24.4122 15.2417 20.2051C15.2417 15.9979 11.8314 12.5876 7.62422 12.5876C6.7596 12.5876 5.93196 12.7384 5.15716 13.004C6.87141 3.17233 14.5382 -3.16797 7.43111 2.05022C-0.449598 7.83662 -0.00163658 19.9723 0.00718155 20.1947C0.00718155 20.1981 0.00680363 20.2012 0.00680363 20.2051Z" fill="white" />
                        <path d="M16.7651 20.2051C16.7651 24.4122 20.1755 27.8225 24.3826 27.8225C28.5897 27.8225 32.0001 24.4122 32.0001 20.2051C32.0001 15.9979 28.5897 12.5876 24.3825 12.5876C23.5179 12.5876 22.6903 12.7384 21.9155 13.004C23.6297 3.17233 31.2965 -3.16797 24.1894 2.05022C16.3087 7.83662 16.7566 19.9723 16.7655 20.1947C16.7655 20.1981 16.7651 20.2012 16.7651 20.2051Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <p className='italic text-base text-gray-primary/75 max-w-md '>{testimonial}</p>
                <div className='flex flex-col'>
                    <h3 className='text-base text-gray-primary font-medium'>{name}</h3>
                    <p className="text-[13px] text-gray-primary/50">{role}</p>
                </div>

            </div>

        </div>
    )
}

export default TestimonialSliderComponent