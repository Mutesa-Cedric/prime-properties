import Link from "next/link";
import React, { useRef, useState } from "react";
import { Property } from "../../@types/types";
import PropertyCardWide from "./PropertyCardWide";


export interface PropertiesProps {
    properties: Property[]
}
const FeaturedProperties = ({ properties }: PropertiesProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction: string) => {
        setIsMoved(true)
        if (sliderRef.current) {
            const { scrollLeft, clientWidth } = sliderRef.current

            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth
            sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }
    return (
        // <Fade>
            <div className="bg-[#FAF8FB] py-10 flex justify-between md:h-auto space-y-12 flex-col  overflow-hidden">

                {/* header */}
                <div className="flex w-full justify-between items-center xl:px-60 lg:px-40 md:px-12 ">
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-heading-1 font-semibold ">Our Featured Properties</h2>
                        <p className="text-gray-primary/75 max-w-xl">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
                    </div>
                    <Link href={'/properties'}>
                        <button className="py-4 text-sm text-white px-6 bg-primary-light">
                            See More Properties
                        </button>
                    </Link>
                </div>

                {/* carousel */}
                <div ref={sliderRef} className="grid gap-x-8 auto-cols-auto grid-flow-col w-screen scrollbar-hide overflow-x-scroll xl:pl-60 lg:pl-40 md:pl-12" >
                    {
                        properties.map((property, i) => (
                            <PropertyCardWide key={i} {...property} />
                        ))
                    }
                </div>

                {/* carousel controller */}

                <div className="flex w-full items-center justify-between xl:px-60 lg:px-40 md:px-12">
                    <p className="text-base text-gray-primary/50 max-w-xl">If you not find property there are many variations of passages of lorem Ipsum available but the majority have suffered
                        <Link href={'/contact'}>
                            <span className="text-primary-light cursor-pointer pl-1">Contact Us</span>
                        </Link>
                    </p>
                    <div className="flex space-x-3">
                        <button type="button" onClick={() => handleClick('left')}
                            className={`h-12 w-12 rounded-full border-2 border-primary-light hover:bg-primary-light hover:text-white transition duration-300 flex items-center justify-center text-primary-light ${!isMoved && 'hidden'
                                }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>

                        <button onClick={() => handleClick('right')}
                            className={`h-12 w-12 rounded-full border-2 border-primary-light hover:bg-primary-light hover:text-white transition duration-300 flex items-center justify-center text-primary-light }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        // </Fade>

    )

}

export default FeaturedProperties;