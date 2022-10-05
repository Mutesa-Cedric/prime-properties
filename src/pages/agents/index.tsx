import Head from 'next/head'
import React from 'react'
import { Agent } from '../../@types/types'
import AgentComponent from '../../components/ui/Agent'
import sanityClient from "../../lib/sanity"

interface AgentsProps{
    agents:Agent[]
}
const Agents=({agents}:AgentsProps)=> {
    return (
        <div className="w-full flex items-center justify-center">
            <Head>
                <title>Prime Properties | Our Agents</title>
            </Head>
            <main className="w-3/5 min-h-[70vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-20 ">
              {
                agents.map(agent=>(
                  <AgentComponent {...agent} key={agent._key}/> 
                ))
              }
            </main>
        </div>
    )
}

const agentsQuery = `*[_type=="agent"]`;

export async function getStaticProps() {
    const agents =await sanityClient.fetch(agentsQuery);
    return {
        props: {
            agents:agents
        }
    }
}


Agents.innerPage=true;
Agents.title="Our talented Agents"

export default Agents;