import React from "react";
import { Parteners } from "./Parteners";

const TrustedPartners = () => {
    return (
        <div className="w-full flex flex-col items-center text-heading-1 py-6 md:py-20">
            <div className="flex flex-col xl:space-y-3 md:space-y-8 items-center">
                <h2 className="text-3xl font-semibold">Our Trusted Parteners</h2>
                <p className="text-center text-gray-primary/75  text-lg max-w-xl">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <Parteners />
        </div>
    )
}


export default TrustedPartners;