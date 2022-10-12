import Head from "next/head";
import React from "react";
import { Agent } from "../@types/types";
import KnowMore from "../components/about/KnowMore";
import MissionVision from "../components/about/MissionVision";
import SomeFacts from "../components/about/SomeFacts";
import AgentsSlider from "../components/agents/AgentsSlider";
import ServicesVideo from "../components/services/ServicesVideo";
import { Parteners } from "../components/ui/Parteners";
import sanityClient from "../lib/sanity";


export async function getStaticProps() {
    const agents = await sanityClient.fetch(`*[_type=="agent"]{
        ...,
        "profileImage":image.asset->url,
        "slug":slug.current
    }`);

    return {
        props: {
            agents: agents,
        }
    }
}

interface AboutPageProps {
    agents: Agent[]
}
const AboutPage = ({ agents }: AboutPageProps) => {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | About Us</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="flex flex-col  py-12 space-y-12">
                <div className="flex flex-col relative lg:px-60 space-y-12">
                    <KnowMore />
                    <MissionVision />
                    <ServicesVideo />
                    <AgentsSlider agents={agents} />
                </div>
                <div className="w-full flex flex-col items-center space-y-3">
                    <div className="flex flex-col space-y-3 items-center">
                        <h2 className="text-3xl font-semibold">Our Trusted Parteners</h2>
                        <p className="text-center text-gray-primary/75  text-lg max-w-xl">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
                    </div>
                    <Parteners />
                </div>
                <SomeFacts />
            </main>
        </div>
    )
}

AboutPage.innerPage = true;
AboutPage.title = "About Prime Properties"

export default AboutPage;