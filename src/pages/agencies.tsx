import sanityClient from '../lib/sanity';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { Agency, AppData } from '../@types/types';
import GridView from '../components/agency/GridView';
import ListView from '../components/agency/ListView';
import Image from 'next/image';
import { agenciesQuery } from '../utils/queries';

export async function getStaticProps() {
    const agencies = await sanityClient.fetch(agenciesQuery)
    return {
        props: {
            agencies
        }
    }
}

const AgenciesPage = ({ agencies }: AppData) => {
    const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
    const [selectedAgencies, setSelectedAgencies] = useState<Agency[] | null>(agencies);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        if (searchTerm === '') {
            setSelectedAgencies(agencies);
        } else {
            const filteredAgencies = agencies.filter(agency => agency.name.toLowerCase().includes(searchTerm.toLowerCase()));
            filteredAgencies.length === 0 ?
                setSelectedAgencies(null) :
                setSelectedAgencies(filteredAgencies)
        }
    }, [searchTerm]);
    return (
        <div className='w-full'>
            <Head>
                <title>Prime Properties | Agencies</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className='flex flex-col w-full py-20 space-y-8 xl:px-60 lg:px-40 md:px-12'>
                <div className='flex items-center justify-between w-full pb-4 border-b-2 border-b-[#D3DEE8]'>
                    <div className='relative rounded-[4px] border-2 border-[#D3DEE8] pl-6 py-1'>
                        <input
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text" className='outline-none p-2 placeholder:text-gray-primary/75' placeholder='Search Agency' />
                        <div className='absolute top-3.5 left-2'>
                            <Image src={'/icons/search_icon.svg'} width={16} height={16} />
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <div onClick={() => setActiveView('list')} className={activeView === "list" ? "border-2  p-2 border-primary-light bg-primary-light text-white" : "border-[#D3DEE8] border-2  p-2 hover:border-primary-light hover:bg-primary-light hover:text-white text-[#7B7B7B]"} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 12H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <div onClick={() => setActiveView("grid")} className={activeView === "grid" ? " border-2  p-2 border-primary-light bg-primary-light text-white" : "border-[#D3DEE8] border-2  p-2 hover:border-primary-light hover:bg-primary-light hover:text-white text-[#7B7B7B]"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                {activeView === "grid" ? <GridView agencies={selectedAgencies} /> : <ListView agencies={selectedAgencies} />}
            </main>
        </div>
    )
}

AgenciesPage.innerPage = true;
AgenciesPage.title = "Agencies We Work With";

export default AgenciesPage