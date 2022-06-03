import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div>
         <nav className="bg-white h-20 overflow-hidden flex  shadow-md lg:px-12 md:px-8 pr-4 pl-3 w-full">
          <div className="flex items-center justify-between w-full">
            <div>
              <Image
                objectFit='cover'
                height={'100px'}
                width={'100px'}
                src={'/logo-small.png'} alt="logo"
              />
            </div>
            <div className='flex space-x-12'>
              <button className='bg-green-200 text-green-700 px-5 capitalize text-lg  rounded-md py-1'>register</button>
              <button className='bg-green-200 text-green-700 px-5 capitalize text-lg  rounded-md py-1'>login</button>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar