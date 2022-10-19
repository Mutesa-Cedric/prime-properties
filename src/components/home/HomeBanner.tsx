import React from 'react'
import Image from 'next/image';


const HomeBanner: React.FC = () => {
    return (
        <div className="bg-[#F9FCFF] flex items-center justify-between lg:pl-60 w-full justify-between lg:h-[85vh] space-x-12">
            <div className="flex flex-col space-y-10">
                <h1 className="text-heading-1 font-semibold text-5xl max-w-md leading-[65px]">We Help You To Find Best Propery For Living</h1>
                <p className="text-lg text-gray-primary/75 leading-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
                <button className="text-white py-4 text-lg leading-[30px] bg-primary-light w-60">
                    Find Property
                </button>
            </div>
            <div className="relative h-full w-full bg-gray-300">
                <Image src={'/images/home_banner.png'} layout="fill" objectFit="cover" />
            </div>

        </div>
    )
}

export default HomeBanner