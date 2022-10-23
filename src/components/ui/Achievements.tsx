/* eslint-disable jsx-a11y/alt-text */

import Image from 'next/image'
import React from 'react'
import { Achievement } from '../../@types/types'

const achievements: Achievement[] = [

    {
        icon: "/icons/like_icon.svg",
        title: "650+",
        description: "Project Done"
    },
    {
        icon: "/icons/property_icon.svg",
        title: "80k+",
        description: "Properties Sold",
    },
    {
        icon: "/icons/clients_icon.svg",
        title: "480+",
        description: "Happy Clients",
    },
    {
        icon: "/icons/agents_icon.svg",
        title: "200+",
        description: "Quality Agents",
    },
]
const Achievements = () => {
    return (
        <div className='flex w-full items-center py-12 px-60 justify-between bg-primary-light'>
            {
                achievements.map((achievement, index) => (
                    <div key={index} className="flex flex-col space-y-1 items-center text-white">
                        <Image src={achievement.icon} height={35} width={35} />
                        <p className='text-2xl font-medium'>{achievement.title}</p>
                        <p className='text-white/75'>{achievement.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Achievements;