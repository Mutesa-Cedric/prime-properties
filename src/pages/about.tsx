import Head from "next/head";
import React from "react";
import { Agent, Testimonial, Video } from "../@types/types";
import Certificates from "../components/about/Certificates";
import KnowMore from "../components/about/KnowMore";
import MissionVision from "../components/about/MissionVision";
import SomeFacts from "../components/about/SomeFacts";
import AgentsSlider from "../components/agents/AgentsSlider";
import GalleryImages from "../components/gallery/GalleryImages";
import VideoComponent from "../components/ui/Video";
import TestimonialSlider from "../components/ui/TestimonialSlider";
import TrustedPartners from "../components/ui/TrustedPartners";
import sanityClient from "../lib/sanity";
import { agentsQuery, propertyImagesQuery, testimonialsQuery } from "../utils/queries";

export async function getStaticProps() {
    const agents = await sanityClient.fetch(agentsQuery);

    const testimonials = await sanityClient.fetch(testimonialsQuery);

    const propertyImages = await sanityClient.fetch(propertyImagesQuery);

    return {
        props: {
            agents: agents,
            testimonials: testimonials,
            propertyImages: propertyImages
        }
    }
}

interface AboutPageProps {
    agents: Agent[];
    testimonials: Testimonial[];
    propertyImages: { bannerImage: string }[];
}

const video: Video = {
    banner: "/images/video-banner.png",
    url: "youtube.com/watch?v=4NRXx6U8ABQ&list=RDMM&index=3"
}

const AboutPage = ({ agents, testimonials, propertyImages }: AboutPageProps) => {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | About Us</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="flex flex-col  pb-12 pt-24 space-y-12">
                <div className="flex flex-col relative xl:px-60 lg:px-40 md:px-12 px-4 space-y-12">
                    <KnowMore />
                    <MissionVision />
                    <VideoComponent {...video} />
                    <AgentsSlider agents={agents} />
                </div>
                <TrustedPartners />
                <SomeFacts />
                <GalleryImages propertyImages={propertyImages} />
                <Certificates />
                <TestimonialSlider testimonials={testimonials} />
            </main>
        </div>
    )
}

AboutPage.innerPage = true;
AboutPage.title = "About Prime Properties"

export default AboutPage;