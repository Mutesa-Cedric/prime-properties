import Head from "next/head";
import React from "react";
import { Contact } from "../@types/types";
import { toast } from 'react-toastify';
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Map from "../components/ui/Map";
import sanityClient from "../lib/sanity";

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


type Inputs = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}


export default function ContactPage() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<Inputs>();
    const [enableSubmit, setEnableSubmit] = React.useState(false);

    const onSubmit: SubmitHandler<Inputs> = async data => {
        setLoading(true);
        const doc = { ...data, _type: "message" };
        await sanityClient.create(doc).then(() => {
            toast.success("Your Message was recieved", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });

            reset({
                fullName: '',
                email: '',
                subject: '',
                message: ''
            })
        }).catch((err: any) => {
            toast.error('An error occured', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            })  
        }).finally(() => {
            setLoading(false);
        })
    }

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {

            if (value.email && value.fullName && value.subject && value.message) {
                setEnableSubmit(true);
            } else {
                setEnableSubmit(false);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);


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
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-6 border-[#D3DEE8] border w-2/3 space-y-6 justify-center'>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex  w-full space-x-5'>
                                <div className='input-wrapper contact-form'>
                                    <label htmlFor="fullname">Full Name</label>

                                    <input type="text" id="fullname" placeholder="Type Full Name"
                                        {...register("fullName", { required: true, min: 2, max: 50 })} />
                                    {
                                        errors.fullName && <p className="text-sm font-medium text-red-400">Enter a valid name!</p>
                                    }
                                </div>

                                <div className='input-wrapper contact-form'>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" placeholder="Your email"
                                        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                                    />
                                    {
                                        errors.email && <p className="text-sm font-medium text-red-400">Enter a valid email!</p>
                                    }
                                </div>

                            </div>

                            <div className='input-wrapper contact-form'>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Type subject"
                                    {...register("subject", { required: true })} />
                            </div>
                            <div className='input-wrapper contact-form'>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={8} placeholder="Type Message"
                                    {...register("message", { required: true })} />
                            </div>
                        </div>
                        {loading ?
                            <button disabled type="button" className='bg-gray-400 cursor-not-allowed px-6 py-3 w-max text-white'>
                                <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Loading...
                            </button> :
                            <button disabled={!enableSubmit} className={!enableSubmit ? 'bg-gray-400 cursor-not-allowed px-6 py-3 w-max text-white' : 'bg-primary-light px-6 py-3 w-max text-white'}>
                                Submit Message
                            </button>
                        }

                    </form>
                    <div className="flex flex-col space-y-5 border border-[#D3DEE8] rounded-sm p-5">
                        {
                            contacts.map((contact, i) => (
                                <div className={i !== contacts.length - 1 ? "flex flex-col items-center py-4 space-y-3 border-b-2" : "flex flex-col items-center py-4 space-y-3"} key={i}>
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
