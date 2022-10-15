import React from "react";
import Image from "next/image"
import { City } from "../../@types/types";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../../lib/sanity";

interface CitiesProps {
    cities: City[]
}

const PropertiesInCities = ({ cities }: CitiesProps) => {
    return (
        <div className=" lg:h-screen h-auto w-full bg-bg-1 lg:px-60 py-12">
            <div className="flex flex-col space-y-2">
                <h2 className="text-heading-1 font-semibold text-2xl">Find Properties In These Cities</h2>
                <p className="text-gray-primary/75 text-center max-w-lg text-base">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>

            <div className="grid gap-3 w-full">
                {
                    cities.map((city, i) => {
                        const imageProps = useNextSanityImage(sanityClient, city.banner);
                        console.log(imageProps)
                        return (
                            <Image key={i} {...imageProps} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PropertiesInCities;