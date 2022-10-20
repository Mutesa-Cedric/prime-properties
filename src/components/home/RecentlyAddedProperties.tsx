import React from "react";
import { PropertiesProps } from "../properties/FeaturedProperties";
import PropertyCard from "../properties/PropertyCard";


const RecentlyAddedProperties = ({ properties }: PropertiesProps) => {
    return (
        <div className="xl:h-[90vh] md:h-auto py-20 flex flex-col space-y-10 overflow-hidden">
            <div className="flex flex-col space-y-3 xl:pl-60 lg:pl-40 md:pl-12">
                <h2 className="text-2xl text-heading-1 font-medium">Recently Added Properties</h2>
                <p className="max-w-xl text-lg text-gray-primary/75">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <div
                className="grid auto-cols-auto grid-flow-col w-screen scrollbar-hide  items-center space-x-0.5 overflow-x-scroll overflow-y-hidden  md:space-x-5 md:p-2 xl:pl-60 lg:pl-40 md:pl-12"
            >
                {
                    properties.map((property, i) => (
                        <PropertyCard key={i} {...property} />
                    ))
                }

            </div>
        </div>
    )
}

export default RecentlyAddedProperties;