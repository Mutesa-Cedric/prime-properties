import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import bannerImage from "../../../public/images/home_banner.png"

const HomeBanner: React.FC = () => {
    return (
        <div className="bg-[#F9FCFF] flex flex-col-reverse md:flex-row items-center justify-between xl:pl-60 lg:pl-40 md:pl-12  w-full h-[85vh] space-x-5 md:space-x-8 xl:space-x-12">
            <div className="flex flex-col items-center md:items-start py-4 md:py-0 space-y-10">
                <h1 className="text-heading-1 font-semibold xl:text-5xl md:text-3xl lg:text-4xl max-w-md leading-[65px]">We Help You To Find Best Property For Living</h1>
                <p className="text-lg text-gray-primary/75 leading-[30px] text-center md:text-start">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
                <Link href={'/properties'}>
                    <button className="text-white py-4 text-lg leading-[30px] bg-primary-light w-60">
                        Explore Properties
                    </button>
                </Link>
            </div>
            <div className="relative h-full w-full">
                <Image src={bannerImage} placeholder="blur" layout="fill" objectFit="cover" alt="home banner" />
            </div>
        </div>
    )
}

export default HomeBanner