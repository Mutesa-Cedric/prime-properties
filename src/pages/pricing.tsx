import Head from 'next/head';
import React from 'react'
import { Plan } from '../@types/types';
import PlanComponent from '../components/pricing/plan';
import FooterBanner from '../components/ui/FooterBanner';
import sanityClient from "../lib/sanity";


interface PricingProps {
    plans: Plan[];
}

export async function getStaticProps() {
    const plans = await sanityClient.fetch(`*[_type=="plan"]`);
    plans.sort((a: Plan, b: Plan) => {
        return a.price > b.price ? 1 : -1;
    })
    return {
        props: {
            plans
        }
    }
}

const Pricing = ({ plans }: PricingProps) => {
    return (
        <div className='w-full'>
            <Head>
                <title>Prime Properties | Our Agents</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className='grid grid-cols-3 gap-x-6 py-28 lg:px-60'>
                {
                    plans.map((plan, i) => {
                        return <PlanComponent {...plan} key={i} />
                    })
                }
            </main>
            <FooterBanner/>
        </div>
    )
}


Pricing.innerPage = true;
Pricing.title = "Our Pricing Plans"

export default Pricing;