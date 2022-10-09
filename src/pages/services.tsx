import React, { useState } from "react";
import Head from "next/head";
import FooterBanner from "../components/ui/FooterBanner";
import sanityClient from "../lib/sanity";
import { Agent, Service, Video } from "../@types/types";
import ServiceComponent from "../components/services/service";
import AgentComponent from "../components/ui/Agent";
import Image from "next/image";


interface ServicesProps {
    services: Service[];
    agents: Agent[]
}

export async function getStaticProps() {
    const services = await sanityClient.fetch(`*[_type=="service"]{
        ...,
        "banner":banner.asset->url,
        "slug":slug.current
    }`);

    const agents = await sanityClient.fetch(`*[_type=="agent"]{
        ...,
        "profileImage":image.asset->url,
        "slug":slug.current
    }`);

    return {
        props: {
            services,
            agents
        }
    }
}

const Services = ({ services, agents }: ServicesProps) => {
    const [activeAgents, setActiveAgents] = useState({
        start: 0,
        end: 3
    });

    const handleNext = () => {
        if (activeAgents.end < agents.length) {
            setActiveAgents({
                start: activeAgents.start + 1,
                end: activeAgents.end + 1
            })
        }
    }

    const handlePrev = () => {
        if (activeAgents.start > 0) {
            setActiveAgents({
                start: activeAgents.start - 1,
                end: activeAgents.end - 1
            })
        }
    }

    const video: Video = {
        banner: "/images/video-banner.png",
        url: "youtube.com/watch?v=4NRXx6U8ABQ&list=RDMM&index=3"
    }

    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | Our services</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="w-full flex flex-col space-y-16 lg:px-60 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {
                        services.map((service: Service, i) => (
                            <ServiceComponent key={i} service={service} i={i} />
                        ))
                    }
                </div>
                <div className="w-full relative h-96 bg-cover bg-center bg-no-repeat bg-blend-multiply flex items-center justify-center"
                    style={{ backgroundImage: `linear-gradient(#51789D,#51789D),url(${video.banner})` }}>
                    <Image src={'/icons/play_button.svg'} width={110} height={110} className="cursor-pointer" />
                </div>
                <div className="w-full flex flex-col items-center space-y-6">
                    <div className="flex flex-col space-y-3 items-center">
                        <h2 className="text-3xl font-semibold">Meet Our Popular Agents</h2>
                        <p className="text-center text-gray-primary/75  text-lg max-w-xl">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
                    </div>
                    <div className="flex items-center justify-between w-full space-x-3">
                        <button disabled={activeAgents.start == 0} type="button" onClick={handlePrev}
                            className={activeAgents.start > 0 ? "h-12 w-12 rounded-full border-2 border-primary-light hover:bg-primary-light hover:text-white transition duration-300 flex items-center justify-center text-primary-light" : "h-12 w-12 rounded-full border-2 border-[#7B7B7B] text-[#7B7B7B] flex items-center justify-center"}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <div className="grid grid-cols:1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%]">
                            {
                                agents.slice(activeAgents.start, activeAgents.end).map((agent: Agent, i) => (
                                    <AgentComponent key={i} {...agent} />
                                ))
                            }
                        </div>
                        <button disabled={activeAgents.end >= agents.length} onClick={handleNext}
                            className={activeAgents.end < agents.length ? "h-12 w-12 rounded-full border-2 border-primary-light hover:bg-primary-light hover:text-white transition duration-300 flex items-center justify-center text-primary-light" : "h-12 w-12 rounded-full border-2 border-[#7B7B7B] text-[#7B7B7B] flex items-center justify-center"}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </main>
            <FooterBanner />
        </div>
    )


}

Services.innerPage = true;
Services.title = "What We Do";


export default Services;