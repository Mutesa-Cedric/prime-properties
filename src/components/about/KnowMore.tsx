/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import Image from "next/image"
const KnowMore = () => {
  return (
    <div className='w-full pb-24 flex  flex-col md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-6  justify-between'>
      <div className="relative ">
        <div className='relative h-96 w-80'>
          <Image src='/images/about-1.png' layout='fill' objectFit='cover' />
        </div>
        <div className="absolute top-40 left-32 h-72 xl:w-72 md:w-64">
          <Image src='/images/about-2.png' layout='fill' objectFit='cover' />
        </div>
      </div>
      <div className="flex flex-col space-y-6 w-2/4 ">
        <div className='flex space-x-3'>
          <div className='relative'>
              <div className='bg-[#D3DEE8] h-6 w-6'></div>
              <div className='bg-primary-light h-6 w-6 top-1 left-1 absolute'></div>
          </div>
          <p>Know more about us</p>
        </div>
        <h3 className='text-gray-primary text-2xl font-medium'>Are You Looking Best Property Near You? Contact Us</h3>
        <div className='flex flex-col space-y-4 text-gray-primary/75'>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking layout.</p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
        </div>
        <div className='bg-primary-light text-white px-4 py-2 flex items-center space-x-2 w-72'>
          <Image src={'/icons/phone-ring_icon.svg'} height={40} width={30} />
          <div className='flex flex-col space-y-1'>
            <p className='text-base'>Call us now</p>
            <p className="font-medium text-lg">+00 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowMore
