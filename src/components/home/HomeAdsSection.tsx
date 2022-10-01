import Image from 'next/image'
import React from 'react'
import { ServiceAd } from '../../@types/types'


const serviceAds: ServiceAd[] = [
    {
        icon: "/icons/buy_sell_icon.svg",
        title: "Buy & Sell Properties",
        description: "There are many variations of passages of Lorem Ipsum available but the majority suffered."
    },
    {
        icon: "/icons/location_icon.svg",
        title: "Perfect Location",
        description: "There are many variations of passages of Lorem Ipsum available but the majority suffered."
    },
    {
        icon: "/icons/faster_service_icon.svg",
        title: "Faster Service",
        description: "There are many variations of passages of Lorem Ipsum available but the majority suffered."
    }

]
function HomeAdsSection() {
    return (
        <div className='flex justify-between lg:px-60 px-12 py-16 flex-col w-full'>
            <div className="flex pb-16 border-b border-[#D3DEE8]  w-full justify-between">
                <div className='relative bg-cover bg-center bg-no-repeat w-2/5'
                    style={{ backgroundImage: `url(/images/family.png)` }}>
                    <div className='absolute flex justify-end w-full h-full left-6 top-6 border-4 border-primary-light'>
                        <div className='w-32 h-32 bg-primary-light flex text-center items-center text-white self-end'>
                            38+ years of experience
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-3 w-[46%]'>
                    <p className='text-2xl font-semibold max-w-sm'>Are You Looking Best Property Near You? Contact Us</p>
                    <div className='flex flex-col'>
                        <h3 className='text-base text-primary-light font-semibold'>Who are we?</h3>
                        <div className='text-gray-primary space-y-2 text-base'>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className='w-full flex space-x-8 pt-12 items-center'>
                {
                    serviceAds.map(service => (
                        <div key={service.title} className="flex space-x-2">
                            <div className='bg-[#EEF7FF] flex items-center justify-center p-3 h-12 w-12'>
                                <div className="w-8 h-8 relative">
                                    <Image src={service.icon} layout="fill" objectFit='cover' />
                                </div>
                            </div>
                            <div className='flex flex-col space-y-3'>
                                <p className='text-lg font-semibold'>{service.title}</p>
                                <p className='text-[#333333] text-base'>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeAdsSection
