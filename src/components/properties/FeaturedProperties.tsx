import Link from "next/link";
import React, { useState } from "react";
import { Property } from "../../@types/types";
import PropertyCardWide from "./PropertyCardWide";

interface PropertiesProps {
    properties: Property[]
}
const FeaturedProperties = ({ properties }: PropertiesProps) => {
    const [activeProperties, setActiveProperties] = useState({
        start: 0,
        end: 3
    });

    const handleNext = () => {
        if (activeProperties.end < properties.length) {
            setActiveProperties({
                start: activeProperties.start + 1,
                end: activeProperties.end + 1
            })
        }
    }

    const handlePrev = () => {
        if (activeProperties.start > 0) {
            setActiveProperties({
                start: activeProperties.start - 1,
                end: activeProperties.end - 1
            })
        }
    }
    return (
        <div className="bg-[#FAF8FB] py-10 flex justify-between h-screen flex-col ">

            {/* header */}
            <div className="flex w-full justify-between items-center lg:px-60">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-heading-1 font-semibold text-2xl ">Our Featured Properties</h2>
                    <p className="text-gray-primary/75 max-w-xl">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
                </div>
                <Link href={'/properties'}>
                    <button className="py-4 text-sm text-white px-6 bg-primary-light">
                        See More Properties
                    </button>
                </Link>
            </div>

            {/* carousel */}
            <div className="grid grid-cols-1 py-8 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full lg:px-60" >
                {
                    properties.map((property, i) => (
                        <PropertyCardWide key={i} {...property} />
                    ))
                }
            </div>

            {/* carousel controller */}

            <div className="flex w-full items-center justify-between lg:px-60">
                <p className="text-base text-gray-primary/50 max-w-xl">If you not find property there are many variations of passages of lorem Ipsum available but the majority have suffered
                    <Link href={'/contact'}>
                        <span className="text-primary-light cursor-pointer pl-1">Contact Us</span>
                    </Link>
                </p>
                <div className="flex space-x-3">
                    <button disabled={activeProperties.start == 0} type="button" onClick={handlePrev}
                        className={activeProperties.start > 0 ? "h-12 w-12 rounded-full border-2 border-primary-light hover:bg-primary-light hover:text-white transition duration-300 flex items-center justify-center text-primary-light" : "h-12 w-12 rounded-full border-2 border-[#7B7B7B] text-[#7B7B7B] flex items-center justify-center"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>

                    <button disabled={activeProperties.end >= properties.length} onClick={handleNext}
                        className={activeProperties.end<properties.length?"h-12 w-12 rounded-full border-2 border-primary-light hover:bg-primary-light hover:text-white transition duration-300 flex items-center justify-center text-primary-light":"h-12 w-12 rounded-full border-2 border-[#7B7B7B] text-[#7B7B7B] flex items-center justify-center"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default FeaturedProperties;