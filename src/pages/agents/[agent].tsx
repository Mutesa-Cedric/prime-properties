import React from 'react'
import { useRouter } from "next/router";
import sanityClient from "../../lib/sanity";
import { Agent } from '../../@types/types';
import { useRecoilValue } from "recoil";
import { storedAgents } from '../../atoms/data';
import Head from 'next/head';
import Image from 'next/image';



interface AgentProps {
  agent: Agent;
}

export async function getServerSideProps({ params }: any) {
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


const ViewAgent = ({ agent }: AgentProps) => {
  return (
    <div className='w-full flex items-center justify-center'>
      <Head>
        <title>Prime Properties | {agent.name}</title>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main className='w-[55%] flex space-x-6  py-20'>
        <section className='flex flex-col space-y-5 border-[1px] p-4 border-[#D3DEE8] w-[60%]'>
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
            <div className='absolute top-2 right-2 p-2 bg-[#EEF7FF] rounded-full flex items-center justify-center'>
              <Image src={'/icons/heart_icon.svg'} width={20} height={20} />
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='flex space-y-2 flex-col'>
              <h2 className='text-lg font-semibold'>About {agent.name}</h2>
              <div className='bg-primary-light w-16 h-[5px] border-2 border-primary-light rounded-lg'></div>
            </div>
            <p className='text-gray-primary text-base'>
              {agent.about}
            </p>
            <form className='flex flex-col p-6 border-[#D3DEE8] border space-y-4'>
              <div className='space-y-2'>
                <p className='text-lg font-medium'>Contact with {agent.name.split(" ")[0]}</p>
                <div className='w-16 bg-primary-light border-2 border-primary-light rounded-xl'></div>
              </div>
              <div className='flex flex-col space-y-3'>
                <div className='flex items-center w-full space-x-5'>
                  <div className='input-wrapper'>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" id="fullname" placeholder="Type Full Name" />
                  </div>
                  <div className='input-wrapper'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Your email" />
                  </div>
                </div>

                <div className='input-wrapper'>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" name="subject" id="subject" placeholder="Type subject" />
                </div>
                <div className='input-wrapper'>
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows={4} placeholder="Type Message" />
                </div>
              </div>
              <button className='bg-primary-light px-6 py-3 w-max text-white'>
                Send Message
              </button>
            </form>
          </div>

        </section>

        <section className='w-[30%] flex flex-col space-y-8'>
          <div className='w-full bg-[#EEF7FF] p-4 flex flex-col space-y-3'>
            <div className='border-b-2 border-[#D3DEE8] pb-2'>
              <h2 className='font-medium text-lg'>Search Property</h2>
            </div>
            <div className='relative'>
              <input type='text' placeholder='Search' className="w-full bg-white py-1 outline-none placeholder:text-[#7B7B7B] placeholder:text-sm pl-6 text-gray-500" />
              <div className='h-4 w-4 absolute top-2 left-1'>
                <Image src={'/icons/search_icon.svg'} className="absolute" layout='fill' />
              </div>
            </div>
          </div>
          <div className='w-full bg-primary-light py-8 px-4 space-y-4 flex flex-col items-center'>
            <p className='text-white text-2xl text-center tracking-wide'>Find The Best Property For Rent Or Buy</p>
            <div className='bg-white w-16 border-2 border-wihte rounded-xl mt-3'></div>
            <p className='text-xs text-white/75'>Call Us Now</p>
            <p className='text-white text-lg'>+00 123 456 789</p>
          </div>
        </section>
      </main>
    </div>
  )
}


ViewAgent.innerPage = true;
ViewAgent.title = "Agent Details";

export default ViewAgent
