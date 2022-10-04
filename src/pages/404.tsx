import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link"

const NotFound: NextPage = () => {
    return (
        <div className="w-full">
            <Head>
                <title>prime properties | page not fount</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="bg-[#EEF7FF] w-full     flex items-center justify-center flex-col pt-12 pb-16">
                <section className="relative flex flex-col">
                    <div className="text-[#263048] text-[200px] font-bold z-50 px-6">
                        404
                    </div>
                    <div className="absolute bg-primary-light bottom-12 h-[30%] w-full"></div>
                </section>
                <section className="flex flex-col items-center space-y-3 pb-8">
                    <h2 className="text-[#2A2C30] font-medium text-2xl">Sorry Page Not Found :(</h2>
                    <p className="text-gray-primary text-center max-w-md text-[18px]">We are sorry. The Page you are looking for does not exist. It might have been moved or delete.</p>
                </section>
                <Link href="/">
                    <button className="text-white bg-primary-light py-3 px-8 text-lg">
                        Back To Home Page
                    </button>
                </Link>
            </main>
        </div>
    )
}

export default NotFound;