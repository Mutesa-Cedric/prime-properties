import Head from "next/head";
import React from "react";
import { Contact } from "../@types/types";
import Image from "next/image";
import Map from "../components/ui/Map"
const contacts: Contact[] = [
    {
        icon: "/icons/phone_icon.svg",
        title: "Telephone",
        contacts: [
            '+00 123 456 789',
            '+00 987 654 321'
        ]
    },
    {
        icon: "/icons/email_icon_white.svg",
        title: "Email Address",
        contacts: [
            'mutesacedric@gmail.com',
            "sales@primeproperties.com"
        ]
    },
    {
        icon: "/icons/address_icon_white.svg",
        title: "Our Address",
        contacts: [
            '4517 Washington Ave. Manchester, Kentucky 39495'
        ]
    }
]

export default function ContactPage() {
    return (
        <div>
            <Head>
                <title>Prime Properties | Contact us</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className='xl:px-60 lg:px-40 md:px-12 py-20 flex flex-col space-y-5'>
                <div className="flex flex-col space-y-5">
                    <div className='space-y-2'>
                        <p className='text-xl font-medium'>Get In Touch</p>
                        <div className='w-16 bg-primary-light border-2 border-primary-light rounded-xl'></div>
                    </div>
                    <p className="max-w-2xl text-gray-primary/50">
                        There are many variations of passages of lorem Ipsum available but the majority have suffered alteration in some form injected is a humour randomised words which look slightly believable.
                    </p>

                </div>
                <div className="flex space-x-10">
                    <form className='flex flex-col p-6 border-[#D3DEE8] border w-2/3 space-y-6 justify-center'>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex items-center w-full space-x-5'>
                                <div className='input-wrapper contact-form'>
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" name="fullname" id="fullname" placeholder="Type Full Name" />
                                </div>
                                <div className='input-wrapper contact-form'>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email" placeholder="Your email" />
                                </div>
                            </div>

                            <div className='input-wrapper contact-form'>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder="Type subject" />
                            </div>
                            <div className='input-wrapper contact-form'>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows={8} placeholder="Type Message" />
                            </div>
                        </div>
                        <button className='bg-primary-light px-6 py-3 w-max text-white'>
                            Submit Request
                        </button>
                    </form>
                    <div className="flex flex-col space-y-5 border border-[#D3DEE8] rounded-sm p-5">
                        {
                            contacts.map((contact, i) => (
                                <div className={i!==contacts.length-1?"flex flex-col items-center py-4 space-y-3 border-b-2":"flex flex-col items-center py-4 space-y-3"} key={i}>
                                    <div className="rounded-full w-12 flex items-center justify-center h-12 bg-primary-light">
                                        <Image src={contact.icon} height={20} width={20} />
                                    </div>
                                    <p className="font-medium">{contact.title}</p>
                                    <div className="flex flex-col items-center">
                                        {
                                            contact.contacts.map((con, i) => (
                                                <p key={i} className="text-center text-base">{con}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
            <Map height={'55vh'} />
        </div>
    )
};

ContactPage.innerPage = true;
ContactPage.title = "Contact Us"
