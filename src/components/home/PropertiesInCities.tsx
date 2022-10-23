import React from "react";
import { City } from "../../@types/types";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../../lib/sanity";

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
        <div className="group flex items-center justify-center relative bg-[#465F78] blend-n-multiply bg-cover bg-center bg-no-repeat bg-blend-multiply cursor-pointer overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(#a8b5c2,#a8b5c2),url(${imageProps.src})`,
                height: i === 3 ? `34.5vh` : `${imageProps.height - 50}px`,
                width: i === 3 ? `32vw` : `${imageProps.width - 20}px`,
            }}
        >
            {/* <Fade> */}
                <div className="hidden group-hover:flex flex-col space-y-2 items-center justify-center p-4  bg-white  w-2/3 h-2/3">
                    <h2 className=" text-2xl font-semibold text-primary-light">{city.name}</h2>
                    <p className="text-gray-primary text-base">10 Properties</p>
                </div>
            {/* </Fade> */}
        </div>
    )
}


const PropertiesInCities = ({ cities }: CitiesProps) => {
    return (
        <div className=" h-auto w-full bg-bg-1 xl:px-60 lg:px-40 md:px-12 py-12 space-y-12">
            <div className="flex flex-col space-y-2 md:items-center xl:items-start">
                <h2 className="text-heading-1 font-semibold text-3xl">Find Properties In These Cities</h2>
                <p className="text-gray-primary/75  max-w-xl text-start text-base md:text-center xl:text-left">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>

            <div className="relative w-full flex flex-col space-y-3">
                <div className="flex justify-between">
                    {
                        cities.slice(0, 3).map((city, i) => (
                            <City i={i} key={i} city={city} />
                        ))
                    }
                </div>
                <div className="absolute top-[30%] right-0">
                    <City i={3} city={cities[3]} />
                </div>
                <div className="flex justify-between">
                    {
                        cities.slice(4, 8).map((city, i) => (
                            <City i={i} key={i} city={city} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertiesInCities;