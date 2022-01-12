import Link from "next/link";
import React from "react";
import { Property } from "../../@types/types";

const FeaturedProperties: React.FC<Property[]> = (properties) => {
    return (
        <div className="bg-[#FAF8FB] py-20 flex flex-y space-y-12">

            {/* header */}
            <div className="flex w-full justify-between items-center lg:px-60">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-heading-1 font-semibold text-2xl">Our Featured Properties</h2>
                    <p className="text-gray-primary/75">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
                </div>
                <Link href={'/properties'}>
                    <button className="py-2 text-white px-6">
                        See More Properties
                    </button>
                </Link>
            </div>

            {/* carousel */}
            <div>

            </div>

            {/* carousel controller */}

            <div className="flex w-full items-center justify-between lg:px-60">
                <p className="text-base text-gray-primary/50">If you not find property there are many variations of passages of lorem Ipsum available but the majority have suffered
                    <Link href={'/contact'}>
                        <span className="text-primary-light">Contact Us</span>
                    </Link>
                </p>
                <div className="flex space-x-3">
                    
                </div>
            </div>

        </div>
    )
}

export default FeaturedProperties;