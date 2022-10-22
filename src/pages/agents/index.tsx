import Head from 'next/head'
import React from 'react'
import {AppData } from '../../@types/types'
import AgentComponent from '../../components/agents/Agent'
import sanityClient from "../../lib/sanity"
import { agentsQuery } from '../../utils/queries'

const Agents = ({ agents }: AppData) => {

    return (
        <div className="w-full flex items-center justify-center">
            <Head>
                <title>Prime Properties | Our Agents</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="xl:w-3/5 md:w-full lg:w-4/5  md:px-12 lg:px-0 min-h-[70vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-20 ">
                {
                    agents.map(agent => (
                        <AgentComponent {...agent} key={agent._id} />
                    ))
                }
            </main>
        </div>
    )
}


export async function getStaticProps() {
    const agents = await sanityClient.fetch(agentsQuery);

    return {
        props: {
            agents: agents
        }
    }
}

Agents.innerPage = true;
Agents.title = "Our talented Agents"

export default Agents;