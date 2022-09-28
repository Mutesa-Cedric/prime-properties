import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='justify-self-end bg-primary-dark text-white w-full pt-16 pb-4 flex flex-col px-32'>

      {/* main */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10'>
        <div className='footer-section space-y-8'>
          <div className="footer-section-title flex items-center space-x-4">
             <Image src={'/icons/logo_white.svg'} height={30} width={20}/>
             <p className='text-xl'>Prime Properties</p>
          </div>
          <div className='footer-section-main space-y-5'>
            <p className="text-[#D5E0EA]">
              There are many variations of passages Lorem Ipsum available, but the majority is have suffered alteration.
            </p>
            <div className='flex flex-col space-y-2'>
              <p className='text-medium text-lg'>Business hours</p>
              <p className='text-[#D5E0EA]'>Monday - Friday 10:00am - 06:00pm</p>
            </div>
          </div>
        </div>
        <div className='footer-section space-y-8'>
          <div className="footer-section-title">
             <p className='text-xl'>Important Links</p>
          </div>
          <div className='footer-section-main space-y-5'>
            <p className="text-[#D5E0EA]">
              There are many variations of passages Lorem Ipsum available, but the majority is have suffered alteration.
            </p>
            <div className='flex flex-col space-y-2'>
              <p className='text-medium text-lg'>Business hours</p>
              <p className='text-[#D5E0EA]'>Monday - Friday 10:00am - 06:00pm</p>
            </div>
          </div>
        </div>
        <div className='footer-section space-y-8'>
          <div className="footer-section-title flex items-center">
             <p className='text-xl'>Follow our instagram</p>
          </div>
          <div className='footer-section-main space-y-5'>
            <p className="text-[#D5E0EA]">
              There are many variations of passages Lorem Ipsum available, but the majority is have suffered alteration.
            </p>
            <div className='flex flex-col space-y-2'>
              <p className='text-medium text-lg'>Business hours</p>
              <p className='text-[#D5E0EA]'>Monday - Friday 10:00am - 06:00pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className='border-t border-[#33628D] w-full pt-4'>
        <p className='text-center text-[#D5E0EA]'>© {new Date().getFullYear()} Mutesa Cedric. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer