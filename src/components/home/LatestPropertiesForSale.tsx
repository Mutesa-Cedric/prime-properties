import React from 'react'
import { Property } from '../../@types/types'
import Image from "next/image";
import { PropertyFeature } from '../properties/PropertyCard';
// import Fade from "react-reveal/fade";
import Link from 'next/link';
interface PropertyProps {
    properties: Property[]
}

const PropertyForSale: React.FC<Property> = ({ features, overview, price, bannerImage, name, slug }) => {
    return (
        <Link href={`/${slug}`}>
            <div className='w-[500px] relative h-[350px] bg-cover bg-no-repeat bg-center group flex items-center justify-center cursor-pointer'>
                <Image src={bannerImage} layout="fill" objectFit='cover' />
                {/* <Fade> */}
                    <div className=' bg-white hidden group-hover:flex p-6 flex-col space-y-2 max-w-md'>
                        <h2 className='text-lg font-semibold text-heading-2'>{name}</h2>
                        <h3 className='text-lg font-semibold text-primary-light'>${price}</h3>
                        <p className='text-gray-primary/75 overflow-hidden text-sm h-24'>{overview}</p>
                        <div className="w-full justify-between transition duration-all items-center flex py-4">
                            {
                                features.slice(0, 3).map((feature, i) => (
                                    <PropertyFeature key={i} feature={feature} i={i} />
                                ))
                            }
                        </div>
                    </div>
                {/* </Fade> */}
            </div>
        </Link>
    )
}

const LatestPropertiesForSale = ({ properties }: PropertyProps) => {
    return (
        <div className='flex overflow-hidden  items-center flex-col  bg-bg-1 pt-40  space-y-4 pb-12'>
            <div className='flex flex-col space-y-2 items-center pb-12'>
                <h2 className='text-2xl text-heading-1 font-semibold'>Latest Properties For Sale</h2>
                <p className='text-lg text-gray-primary/50 max-w-xl text-center'>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <div
                className="grid auto-cols-auto grid-flow-col w-screen scrollbar-hide  items-center space-x-0.5 overflow-x-scroll  md:space-x-5 md:p-2"
            >
                {
                    properties.map((property, i) => (
                        <PropertyForSale key={i} {...property} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default LatestPropertiesForSale