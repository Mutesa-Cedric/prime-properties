import React, { useState } from "react";
import Head from "next/head";
import FooterBanner from "../components/ui/FooterBanner";
import sanityClient from "../lib/sanity";
import { AppData, Service } from "../@types/types";
import ServiceComponent from "../components/services/service";
import ServicesVideo from "../components/services/ServicesVideo";
import AgentsSlider from "../components/agents/AgentsSlider";
import { agentsQuery, servicesQuery } from "../utils/queries";


export async function getStaticProps() {
    const services = await sanityClient.fetch(servicesQuery);

    const agents = await sanityClient.fetch(agentsQuery);

    return {
        props: {
            services,
            agents
        }
    }
}

const Services = ({ services, agents }: AppData) => {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | Our services</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="w-full flex flex-col space-y-16 xl:px-60 lg:px-40 md:px-12 py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {
                        services.map((service: Service, i) => (
                            <ServiceComponent key={i} service={service} i={i} />
                        ))
                    }
                </div>
                <ServicesVideo />
                <AgentsSlider agents={agents} />
            </main>
            <FooterBanner />
        </div>
    )


}

Services.innerPage = true;
Services.title = "What We Do";


export default Services;