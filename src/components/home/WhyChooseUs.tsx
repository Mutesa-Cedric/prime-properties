import React from "react";
import { Achievement } from "../../@types/types"
import Image from "next/image";

const achievements: Achievement[] = [
    {
        icon: "/icons/person_icon.svg",
        title: "Find An Agent",
        description: "There are many variations of passages of Lorem Ipsum available but the majority.",
    },
    {
        icon: "/icons/home_icon.svg",
        title: "Find future home",
        description: "There are many variations of passages of Lorem Ipsum available but the majority.",
    },
    {
        icon: "/icons/customer_icon.svg",
        title: "Easy buy or rent",
        description: "There are many variations of passages of Lorem Ipsum available but the majority.",
    },
]
const WhyChooseUs = () => {
    return (
        <div className="w-full xl:h-[42vh] lg:h-[50vh] md:h-[60vh] bg-cover bg-no-repeat bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url(/images/why-choose-us.png)` }}>
            <div className="flex flex-col pb-20 space-y-3 text-white items-center">
                <h2 className="font-semibold text-2xl">Why Choose Us</h2>
                <p className="text-base  max-w-lg text-center text-white/75">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <div className="absolute xl:w-3/5 lg:w-4/5 w-full bg-white shadow-lg flex items-center space-x-4 z-50  h-52 top-[65%] py-8 px-4 spcae-x-5">
                {
                    achievements.map((achievement, i) => {
                        return <div key={i} className={i < 2 ? "flex flex-col items-center space-y-2 h-full w-full border-r-2" : "flex flex-col items-center space-y-2 h-full w-full"}>
                            <div className="p-3 bg-[#EEF7FF]">
                                <Image src={achievement.icon} width={30} height={20} />
                            </div>
                            <h2 className="text-lg font-semibold text-heading-2">{achievement.title}</h2>
                            <p className="text-sm text-gray-primary/50 text-center ">There are many variations of passages of Lorem Ipsum available but the majority.</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default WhyChooseUs;
