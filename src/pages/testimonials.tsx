import React from "react";
import Head from "next/head";
import sanityClient from "../lib/sanity";
import { AppData } from "../@types/types";
import TestimonialComponent from "../components/testimonials/testimonial";
import { testimonialsQuery } from "../utils/queries";

export async function getStaticProps() {
    const testimonials = await sanityClient.fetch(testimonialsQuery);
    return {
        props: {
            testimonials
        }
    }
}

const Testimonials = ({ testimonials }: AppData) => {

    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | testimonials</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className=" lg:px-60 py-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
                {
                    testimonials.map((testimonial, index) => (
                        <TestimonialComponent key={index} {...testimonial} />
                    ))
                }
            </main>
        </div>
    )
}

Testimonials.innerPage = true;
Testimonials.title = "Testimonials";


export default Testimonials;