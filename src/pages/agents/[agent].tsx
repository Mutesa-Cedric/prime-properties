import React, { useEffect, useState } from 'react'
import sanityClient from "../../lib/sanity";
import { Agent } from '../../@types/types';
import Head from 'next/head';
import Image from 'next/image';
import FooterBanner from '../../components/ui/FooterBanner';
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from 'react-hook-form';

interface AgentProps {
  agent: Agent;
}

export async function getStaticPaths() {
  const agents = await sanityClient.fetch(`*[_type=="agent"]{
    slug
  }`);
  const paths = agents.map((agent: any) => ({
    params: { agent: agent.slug.current.slice(7) }
  }));
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params }: any) {
  const agent = await sanityClient.fetch(`*[_type == "agent" && slug.current == "agents/${params.agent}"][0]{
    ...,
  "profileImage":profileImage.asset->url
  }`);

  return {
    props: {
      agent
    }
  }
}


type Inputs = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}


const ViewAgent = ({ agent }: AgentProps) => {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState<boolean>(false);
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

  // function for updating likes
  const updateLikes = async () => {
    //  update sanity
    await sanityClient.patch(agent._id).set({
      likedBy: isLiked ? agent.likedBy!.filter((id: string) => id !== user!.uid) : [...agent.likedBy || [], user!.uid]
    }).commit()
      .then(() => {
        setIsLiked(!isLiked);
        toast.success("Your favourite list was updated");
      }).catch(err => {
        toast.error("An error occured");
      });
  }

  const toggleIsLiked = () => {
    user ? updateLikes() : toast.error("You must be logged in to like an agent");
  }

  useEffect(() => {
    if (user) {
      agent.likedBy?.includes(user.uid) ? setIsLiked(true) : setIsLiked(false);
    }
  }, [user]);

  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <Head>
        <title>Prime Properties | {agent.name}</title>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main className='w-full px-60 flex space-x-20  py-20'>
        <section className='flex flex-col space-y-5 border-[1px] p-4 border-[#D3DEE8] w-2/3'>
          <div className='flex space-x-8 relative'>
            <div className='w-52 h-52 relative'>
              <Image src={agent.profileImage} layout="fill" objectFit='cover' />
            </div>
            <div className='flex flex-col space-y-2'>
              <h2 className='font-semibold text-lg'>{agent.name}</h2>
              <p className='text-[#7B7B7B] text-base'>{agent.role}</p>
              <div className='w-16 my-2 border rounded-xl bg-[#D3DEE8]'></div>
              <div className='flex space-x-2 items-center'>
                <Image src="/icons/telephone_icon.svg" height={20} width={20} />
                <p className='text-gray-primary text-base'>{agent.phoneNumber}</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <Image src="/icons/email_icon.svg" height={20} width={20} />
                <p className='text-gray-primary text-base'>{agent.email}</p>
              </div>
              <div className='flex space-x-2 items-center'>
                <Image src="/icons/whatsapp_icon.svg" height={20} width={20} />
                <p className='text-gray-primary text-base'>{agent.whatsappNumber}</p>
              </div>
            </div>
            <div className='absolute top-2 right-2 p-2 bg-[#EEF7FF] rounded-full flex items-center justify-center cursor-pointer' onClick={toggleIsLiked}>
              {
                !isLiked ?
                  <Image src={'/icons/heart_icon.svg'} width={20} height={20} />
                  :
                  <Image src={'/icons/heart_icon_filled.svg'} width={20} height={20} />
              }
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='flex space-y-2 flex-col'>
              <h2 className='text-lg font-semibold'>About {agent.name}</h2>
              <div className='bg-primary-light w-16 h-[5px] border-2 border-primary-light rounded-lg'></div>
            </div>
            <p className='text-gray-primary/50 text-base'>
              {agent.about}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-6 border-[#D3DEE8] border space-y-4'>
              <div className='space-y-2'>
                <p className='text-lg font-medium'>Contact with {agent.name.split(" ")[0]}</p>
                <div className='w-16 bg-primary-light border-2 border-primary-light rounded-xl'></div>
              </div>
              <div className='flex flex-col space-y-3'>
                <div className='flex items-center w-full space-x-5'>
                  <div className='input-wrapper contact-form'>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Type Full Name"      {...register("fullName", { required: true, min: 2, max: 50 })} />
                    {
                      errors.fullName && <p className="text-sm font-medium text-red-400">Enter a valid name!</p>
                    }
                  </div>
                  <div className='input-wrapper contact-form'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Your email"    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                    />
                    {
                      errors.email && <p className="text-sm font-medium text-red-400">Enter a valid email!</p>
                    }
                  </div>
                </div>

                <div className='input-wrapper contact-form'>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Type subject" {...register("subject", { required: true })} />
                </div>
                <div className='input-wrapper contact-form'>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} placeholder="Type Message" {...register("message", { required: true })} />
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
          </div>

        </section>

        <section className='w-[30%] flex flex-col space-y-8'>
          <div className='w-full bg-[#EEF7FF] px-4 py-6 flex flex-col space-y-5'>
            <div className='border-b-2 border-[#D3DEE8] pb-4'>
              <h2 className='font-medium text-lg'>Search Property</h2>
            </div>
            <div className='relative'>
              <input type='text' placeholder='Search' className="w-full bg-white py-2 outline-none placeholder:text-[#7B7B7B] placeholder:text-sm pl-6 text-gray-500" />
              <div className='h-4 w-4 absolute top-3 left-1'>
                <Image src={'/icons/search_icon.svg'} layout='fill' />
              </div>
            </div>
          </div>
          <div className='w-full bg-primary-light py-8 px-4 space-y-4 flex flex-col items-center h-auto'>
            <p className='text-white text-2xl text-center tracking-wide px-3 leading-20'>Find The Best Property For Rent Or Buy</p>
            <div className='bg-white w-16 border-2 border-wihte rounded-xl mt-3'></div>
            <p className='text-xs text-white/75'>Call Us Now</p>
            <p className='text-white text-lg'>+00 123 456 789</p>
          </div>
        </section>
      </main>
      <FooterBanner />
    </div>
  )
}


ViewAgent.innerPage = true;
ViewAgent.title = "Agent Details";

export default ViewAgent
