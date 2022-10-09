import React from "react";
import { Testimonial } from "../../@types/types";
import Image from "next/image";


const TestimonialComponent = ({ name, profileImage, role, testimonial, stars }: Testimonial) => {
    return (
        <div className="card border border-[#D3DEE8] rounded-[4px] p-5 flex flex-col space-y-4 hover:border-primary-light cursor-pointer">
            <div className="w-full flex space-x-7 border-b-2 border-[#D3DEE8] pb-3">
                <Image src={profileImage} height={50} width={50} className="rounded-full" />
                <div className="flex flex-col space-y-1">
                    <h2 className="text-lg font-medium">{name}</h2>
                    <p className="text-gray-primary/50 text-sm font-medium">{role}</p>
                </div>
                <div className="flex flex-col justify-between">
                    <Image src="/icons/star_icon.svg" width={18} height={18}/>
                    <p className="text-gray-primary/75">({stars})</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="bg-primary-light h-8 w-24 rounded-[4px] quote-container p-1">
                    <Image src="/icons/quote_icon.svg" width={30} height={30} className="quote-icon" />
                </div>
                <p className="text-gray-primary/50 pl-2">
                    {testimonial}
                </p>
            </div>
        </div>
    )
}

export default TestimonialComponent;