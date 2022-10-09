import React from "react";
import Head from "next/head";
import sanityClient from "../lib/sanity";
import { Testimonial } from "../@types/types";
import TestimonialComponent from "../components/testimonials/testimonial";

export async function getStaticProps() {
    const testimonials = await sanityClient.fetch(`*[_type=="testimonial"]{
        ...,
        "profileImage":profileImage.asset->url
    }`);
    return {
        props: {
            testimonials
        }
    }
}

interface TestimonialProps {
    testimonials: Testimonial[]
}

const Testimonials = ({ testimonials }: TestimonialProps) => {
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