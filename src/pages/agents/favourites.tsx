import sanityClient from "../../lib/sanity";
import React, { useEffect, useState } from "react";
import { Agent, AppData } from "../../@types/types";
import useAth from "../../hooks/useAuth";
import { agentsQuery } from "../../utils/queries";
import Head from "next/head";
import AgentComponent from "../../components/agents/Agent";
import Link from "next/link";
import RequireLogin from "../../components/ui/RequireLogin";
import Certificates from "../../components/about/Certificates";

export async function getStaticProps() {
    const agents = await sanityClient.fetch(agentsQuery);

    return {
        props: {
            agents: agents
        }
    }
}

const Favourites = ({ agents }: AppData) => {
    const { user } = useAth();
    const [favouriteAgents, setFavouriteAgents] = useState<Agent[] | null>(null);
    const getFavouriteAgents = () => {
        return agents.filter(agent => agent.likedBy?.includes(user!.uid));
    }

    useEffect(() => {
        if (user) {
            setFavouriteAgents(getFavouriteAgents());
        } else {
            setFavouriteAgents(null);
        }
    }, []);
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | Favourite Agents</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="flex  xl:px-60 lg:px-40 md:px-12 flex-col w-full space-y-6 py-16">
                {
                    user ?
                        <>{
                            (favouriteAgents && favouriteAgents.length > 0) ?
                                <div className="grid grid-cols-2 py-8 lg:grid-cols-3 gap-6 w-full">
                                    {
                                        favouriteAgents!.map((agent, i) => (
                                            <AgentComponent {...agent} key={i} />
                                        ))
                                    }
                                </div> :
                                <div className="w-full py-16 flex flex-col items-center space-y-5">
                                    <h1 className="text-xl text-heading-1" >You have not liked any Agent!</h1>
                                    <Link href='/properties'>
                                        <button className="text-white bg-primary-light py-3 px-6 rounded">
                                            explore agents
                                        </button>
                                    </Link>
                                </div>
                        }
                        </>
                        :
                        <RequireLogin />
                }
            </main>
            <Certificates />
        </div>
    )
}

Favourites.innerPage = true;
Favourites.title = "Your Favourite Agents";

export default Favourites;