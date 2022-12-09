import React from "react";
import { City } from "../../@types/types";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../../lib/sanity";
import Link from "next/link";

interface CitiesProps {
    cities: City[]
}

interface CityProps {
    city: City,
    i: number
}


const City = ({ city, i }: CityProps) => {
    const imageProps = useNextSanityImage(sanityClient, city.banner);
    return (
        <Link href={'/properties'}>
            <div className="group w-full h-80  flex items-center justify-center relative bg-[#465F78] blend-n-multiply bg-cover bg-center bg-no-repeat bg-blend-multiply cursor-pointer "
                style={{ backgroundImage: `linear-gradient(#a8b5c2,#a8b5c2),url(${imageProps.src})` }}
            >
                {/* <Fade> */}
                <div className="hidden group-hover:flex flex-col space-y-2 items-center justify-center p-4  bg-white  w-2/3 h-2/3">
                    <h2 className=" text-2xl font-semibold text-primary-light">{city.name}</h2>
                    <p className="text-gray-primary text-base">10 Properties</p>
                </div>
                {/* </Fade> */}
            </div>
        </Link>

    )
}


const PropertiesInCities = ({ cities }: CitiesProps) => {
    return (
        <div className="w-full bg-bg-1 xl:px-60 lg:px-40 md:px-12 py-12 space-y-12">
            <div className="flex flex-col space-y-2 md:items-center xl:items-start">
                <h2 className="text-heading-1 font-semibold text-3xl">Find Properties In These Cities</h2>
                <p className="text-gray-primary/75  max-w-xl text-start text-base md:text-center xl:text-left">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6  grid-cols-1 sm:grid-cols-2">
                {
                    cities.slice(0, 6).map((city, i) => (
                        <City i={i} key={i} city={city} />
                    ))
                }
            </div>
        </div>
    )
}

export default PropertiesInCities;