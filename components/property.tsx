import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoLocation } from 'react-icons/go'
import { property } from '../typings'

function Property({ name, price, location, description, image, onSale }: property) {
  return (
    <div className='shadow-lg md:my-14 md:mx-0 w-[290px] rounded-md m-auto'>
      <div className='relative'>
        <Image src={image} objectFit="cover" width={290} height={190} className="rounded-t-md" />
        {/* {onSale && <p
          className='absolute top-2 letf-2 bg-white 
          text-green-900  py-1 px-2 border-2 border-1 border-green-700 rounded-lg font-medium opacity-80 ml-2 capitalize'
        >on sale</p>} */}
      </div>
      <div className='px-4'>
        <div className='flex items-center justify-between my-3'>
          <h1 className='font-medium text-gray-600 text-lg'>{name}</h1>
          <div className='flex items-center'>
            <GoLocation fontSize={"medium"} className="mr-1"/>
            <p className='text-gray-600' >{location}</p>
          </div>
        </div>
        <p className='my-2 text-gray-500 text-[15px]'>{description}</p>
        <p className='text-green-800 font-medium mb-2'>${price}</p>
      </div>
      <div className='px-4 mb-4 mt-2'>
        <Link href={'/signup'}>
          <button className='w-full bg-green-200 text-green-900 py-2 rounded-sm'>
            View Property
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Property