import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { Agent } from '../../@types/types'
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../../lib/sanity"


const socialMediaIcons = {
  linkedIn: "/icons/linkedin_icon.svg",
  instagram: "/icons/instagram_icon.svg",
  skype: "/icons/skype_icon.svg",
  pinterest: "/icons/pinterest_icon.svg"
}

function AgentComponent({ name, profileImage, slug, socialMedia, role, likedBy }: Agent) {
  const imageProps = useNextSanityImage(
    sanityClient,
    profileImage
  )
  return (
    <Link href={`/${slug}`}>
      <div className="py-8 flex flex-col items-center space-y-2 border border-[#D3DEE8]  shadow-sm hover:border-primary-light cursor-pointer rounded-[4px]">
        <div className='h-16 w-16 relative rounded-full'>
          <Image {...imageProps} objectFit='cover' layout='fill' className="rounded-full" />
        </div>
        <h2 className='font-semibold text-base'>{name}</h2>
        <p className='text-sm text-[#7B7B7B]'>{role}</p>
        <div className='flex items-center space-x-2'>
          {
            socialMedia.map((social, i) => (
              <div key={i} className="h-5 w-5 relative">
                <Image src={socialMediaIcons.instagram} layout="fill" objectFit="cover" />
              </div>
            ))
          }
        </div>
      </div>
    </Link>

  )
}

export default AgentComponent