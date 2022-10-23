/* eslint-disable jsx-a11y/alt-text */

import Image from 'next/image'
import React from 'react'


const certificateImages: string[] = [
    '/images/certificate.png',
    '/images/certificate.png',
    '/images/certificate.png'
]

const Certificates = () => {
    return (
        <div className="bg-[#FAF8FB] w-full py-16 lg:px-60 md:px-40 sm:px-20 px-10 flex flex-col items-center space-y-8">
            <h3 className="text-2xl font-medium text-gray-primary">Our Award Certificates</h3>
            <div className='flex items-center justify-between space-x-20'>
                {
                    certificateImages.map((img, i) => (
                        <div key={i} className='bg-white p-4'>
                            <Image src={img} height={280} width={350} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Certificates