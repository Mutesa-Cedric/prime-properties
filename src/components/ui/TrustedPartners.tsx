import React from "react";
import { Parteners } from "./Parteners";

const TrustedPartners = () => {
    return (
        <div className="w-full flex flex-col items-center space-y-3 text-heading-1 py-6">
            <div className="flex flex-col space-y-3 items-center">
                <h2 className="text-3xl font-semibold">Our Trusted Parteners</h2>
                <p className="text-center text-gray-primary/75  text-lg max-w-xl">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <Parteners />
        </div>
    )
}


export default TrustedPartners;