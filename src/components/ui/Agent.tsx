import Image from 'next/image'
import React from 'react'
import { Agent } from '../../@types/types'
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../../lib/sanity"


const socialMediaIcons={
  linkedIn:"/icons/linkedIn_icon.svg",
  instagram:"/icons/instagram_icon.svg",
  skype:"/icons/skype_icon.svg",
  pinterest:"/icons/pinterest_icon.svg"
}

function AgentComponent({ name, profileImage, socialMedia, role }: Agent) {
  const imageProps = useNextSanityImage(
    sanityClient,
    profileImage
  )
  return (
    <div className="py-8 flex flex-col items-center space-y-2 border border-[#D3DEE8]  shadow-sm hover:border-primary-light cursor-pointer rounded-[4px]">
      <div className='h-16 w-16 relative rounded-full'>
        <Image {...imageProps} objectFit='cover' layout='fill' className="rounded-full" />
      </div>
      <h2 className='font-semibold text-lg'>{name}</h2>
      <p className='text-base text-[#7B7B7B]'>{role}</p>
      <div className='flex items-center space-x-2'>
        {
          socialMedia.map((social, i) => (
            <div key={i}>
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AgentComponent