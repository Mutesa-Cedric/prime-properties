/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Property } from "../../@types/types";
import { PropertyFeature } from "./PropertyCard";

const PropertyCardWide = (
    {
        overview, name, price, bannerImage, address, features, status, slug
    }: Property
) => {
    return (
        <Link href={`/${slug}`}>
            <div className="flex flex-col space-y-3  border border-white  transition duration-300 cursor-pointer rounded xl:w-[450px] lg:w-[420px] md:w-[400px] h-auto shadow-md hover:shadow-xl">
                <div className="relative w-full h-48 rounded">
                    <Image src={bannerImage} layout="fill" objectFit="cover" className="rounded" />
                </div>
                <div className="flex flex-col space-y-2 p-4">
                    <h2 className="font-medium text-xl truncate">{name}</h2>
                    <div className="flex items-center space-x-2">
                        <Image src='/icons/address_icon.svg' height={20} width={20} />
                        <p className="text-sm text-gray-primary/75">address</p>
                    </div>
                    <p className="text-base text-gray-primary/75 h-12 overflow-hidden">{overview}</p>
                    <div className="w-full justify-between items-center flex py-3 border-b-2 border-t-2">
                        {
                            features.map((feature, i) => (
                                <PropertyFeature key={i} feature={feature} i={i} />
                            ))
                        }
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-lg">${price}</p>
                        <button className=" py-2 px-6 hover:text-white hover:bg-primary-light border border-primary-light/75 text-sm">
                            See Details
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PropertyCardWide;