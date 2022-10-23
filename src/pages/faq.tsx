import React, { useState } from "react";
import { FAQ } from "../@types/types"
import sanityClient from "../lib/sanity";
import Head from "next/head";
import { Category, faqCategories } from "../constants/faqCategories";
import Link from "next/link";

export async function getStaticProps() {
    const faqs = await sanityClient.fetch(`*[_type=="faq"]{
        question,
        answer
    }`);
    return {
        props: {
            faqs
        }
    }
}


interface FaqProps {
    faqs: FAQ[]
}

type FAQCompProps = {
    faq: FAQ,
    i: number,
    activeAnswer: number | null,
    handleClick: (index: number | null) => void;
}
const FaqComponent: React.FC<FAQCompProps> = ({ faq: { question, answer }, i, activeAnswer, handleClick }) => {
    return (
        <div className="border rounded-[4px] p-3 border-[#D3DEE8] flex flex-col card space-y-2">
            <div className={i === activeAnswer ? "w-full flex items-center justify-between border-b pb-2" : "w-full flex items-center justify-between"}>
                <h2 className="text-base text-gray-primary/75 font-medium">{question}</h2>
                {activeAnswer !== i
                    ? <div onClick={() => handleClick(i)} className="text-gray-300  text-xl hover:text-primary-light cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>

                    </div> :
                    <div onClick={() => handleClick(null)} className="text-gray-300  text-xl hover:text-primary-light cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                        </svg>
                    </div>
                }

            </div>
            {
                activeAnswer === i && <p className="text-gray-primary/50 text-sm">
                    {answer}
                </p>
            }
        </div>
    )
}

const Faq = ({ faqs }: FaqProps) => {
    const [activeAnswer, setActiveAnswer] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<Category | null>(faqCategories[0]);
    const changeActiveAnswer = (index: number | null) => {
        if (index) {
            setActiveAnswer(index);
        } else {
            setActiveAnswer(null);
        }
    }
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | Frequently Asked Questions</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="py-28 lg:px-60 flex justify-between">
                <div className="w-[30%] flex flex-col justify-between">
                    <div className="flex flex-col space-y-1 border rounded-[4px] border-[#D3DEE8]">
                        {
                            faqCategories.map((cat, index) => (
                                <div key={index} className={index % 2 === 0 ? 'bg-[#EEF7FF] px-4  py-2 cursor-pointer ' : ' cursor-pointer bg-white px-4 py-2'} >
                                    <p className={activeCategory === cat ? 'text-primary-light font-medium' : 'text-gray-primary/50 font-medium'}>{cat.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="p-4 rounded-md bg-[#EEF7FF] text-sm">
                        if you can&apos;t find your question please
                        <Link href={'/contact'}>
                            <p className="text-primary-light underline cursor-pointer">Contact us</p>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-6 w-[65%]">
                    {
                        faqs.map((faq, i) => (
                            <FaqComponent key={i} faq={faq} i={i} activeAnswer={activeAnswer} handleClick={changeActiveAnswer} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

Faq.title = "Frequently Asked Questions";
Faq.innerPage = true;
export default Faq;