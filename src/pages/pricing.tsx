import Head from 'next/head';
import React from 'react'
import { AppData, Plan } from '../@types/types';
import PlanComponent from '../components/pricing/plan';
import FooterBanner from '../components/ui/FooterBanner';
import sanityClient from "../lib/sanity";
import { plansQuery } from '../utils/queries';

export async function getStaticProps() {
    const plans = await sanityClient.fetch(plansQuery);
    plans.sort((a: Plan, b: Plan) => {
        return a.price > b.price ? 1 : -1;
    })
    return {
        props: {
            plans
        }
    }
}

const Pricing = ({ plans }: AppData) => {
    return (
        <div className='w-full'>
            <Head>
                <title>Prime Properties | Our Agents</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className='grid xl:grid-cols-3 grid-cols-2 gap-6 py-28 xl:px-60 lg:px-40 md:px-12'>
                {
                    plans.map((plan, i) => {
                        return <PlanComponent {...plan} key={i} />
                    })
                }
            </main>
            <FooterBanner />
        </div>
    )
}


Pricing.innerPage = true;
Pricing.title = "Our Pricing Plans"

export default Pricing;