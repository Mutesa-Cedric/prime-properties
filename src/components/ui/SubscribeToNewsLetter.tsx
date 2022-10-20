import React from "react";
import Image from "next/image";

const socials: { name: string, href: string, Icon: string }[] = [
    {
        name: "Facebook",
        href: "#",
        Icon: '/icons/facebook.svg'
    },
    {
        name: "pinterest",
        href: "#",
        Icon: '/icons/pinterest.svg'
    },
    {
        name: "email",
        href: "#",
        Icon: '/icons/email.svg'
    },
    {
        name: "email",
        href: "#",
        Icon: '/icons/email.svg'
    },
    {
        name: "instagram",
        href: "#",
        Icon: '/icons/instagram.svg'
    },
    {
        name: "linkedin",
        href: "#",
        Icon: '/icons/linkedin.svg'
    },
    {
        name: "skype",
        href: "#",
        Icon: '/icons/skype.svg'
    },
    {
        name: "whatsapp",
        href: "#",
        Icon: '/icons/whatsapp.svg'
    },

]

const SubscribeToNewsLetter = () => {
    return (
        <div className="absolute bg-primary-light shadow-md xl:p-12 md:p-4  flex items-center xl:w-[68%] lg:w-[80%] md:w-[90%] xl:-top-28 md:-top-20">
            <div className="text-white flex flex-col w-full space-y-5">
                <h2 className="text-2xl font-medium">Subscribe to get daily updates.</h2>
                <div className="relative w-full">
                    <input type="text" placeholder="Enter Your Email Address " className=" py-5 placeholder:text-xl w-[90%] pl-8 pr-40 text-gray-primary/75 bg-white outline-none " />
                    <button className="absolute bg-primary-light rounded-sm text-white right-20 top-2 px-6 py-3">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {
                    socials.map((social, i) => (
                        <div key={i} className="bg-white p-3 text-primary-light rounded-md flex items-center justify-center cursor-pointer">
                            <Image src={social.Icon} alt={social.name} width={50} height={50} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SubscribeToNewsLetter;