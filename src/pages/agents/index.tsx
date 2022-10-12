import Head from 'next/head'
import React from 'react'
import { Agent } from '../../@types/types'
import AgentComponent from '../../components/agents/Agent'
import sanityClient from "../../lib/sanity"
import { useRecoilState } from "recoil";
import { storedAgents } from "../../atoms/data"

interface AgentsProps {
    agents: Agent[]
}
const Agents = ({ agents }: AgentsProps) => {
    const [currentAgents, setAgents] = useRecoilState<Agent[] | null>(storedAgents);
    setAgents(agents);

    return (
        <div className="w-full flex items-center justify-center">
            <Head>
                <title>Prime Properties | Our Agents</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="w-3/5 min-h-[70vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-20 ">
                {
                    agents.map(agent => (
                        <AgentComponent {...agent} key={agent._key} />
                    ))
                }
            </main>
        </div>
    )
}

const agentsQuery = `*[_type=="agent"]{
    ...,
    "slug":slug.current,
    
}`;

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