import React from 'react'
import Image from "next/image"
import { Fact } from '../../@types/types'


const facts: Fact[] = [
    {
        title: "650+",
        desc: "Projects Done"
    },
    {
        title: "20k+",
        desc: "Properties Sold"
    },
    {
        title: "480+",
        desc: "Happy Clients"
    },
    {
        title: "200+",
        desc: "Quality Agents"
    }
]

const SomeFacts = () => {
    return (
        <div className='w-full bg-primary-light py-2 lg:px-60 relative h-[40vh]'>
            <div className='h-full relative w-[35%]'>
                <Image src="/images/some-facts.png" layout='fill' objectFit='cover' />
            </div>
            <div className="bg-white z-50 flex flex-col space-y-4 p-8 w-[50%] absolute bottom-[22%] left-[30%] ">
                <h2 className='text-base font-medium text-primary-light'>Some Facts</h2>
                <div className='flex items-center w-full justify-between'>
                    {
                        facts.map((fact, i) => (
                            <div key={i} className="flex flex-col space-y-2">
                                <h2 className='text-2xl font-semibold'>{fact.title}</h2>
                                <p className="text-sm text-gray-primary/50">{fact.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SomeFacts