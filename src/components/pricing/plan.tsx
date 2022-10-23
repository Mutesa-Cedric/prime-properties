/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import { Plan, PlanFeature } from '../../@types/types'
import Image from "next/image"
import Link from "next/link"

const Feature = ({ title, isAvailable }: PlanFeature) => {
    return (
        <div className="flex space-x-2">
            {isAvailable ?
                <Image src="/icons/check_icon.svg" height={20} width={20} /> :
                <Image src="/icons/cancel_icon.svg" height={20} width={20} />
            }
            <p>{title}</p>
        </div>
    )
}

const PlanComponent: React.FC<Plan> = ({ title, price, features }) => {
    return (
        <div className='card flex flex-col border border-[#D3DEE8] rounded py-12 px-8 space-y-5'>
            <div className="flex flex-col space-y-2">
                <h2 className="text-lg font-medium">{title}</h2>
                <div className="w-20 h-[3px] rounded-xl bg-primary-light"></div>
            </div>
            <div className='flex flex-col space-y-4 text-[#7B7B7B]'>
                {
                    features.map((feature, i) => (
                        <Feature {...feature} key={i} />
                    ))
                }
            </div>
            <div className='flex justify-between w-full items-center'>
                <div className="flex flex-col">
                    <span className="text-sm text-[#7B7B7B]">start from</span>
                    <p className="font-medium text-lg">${price}</p>
                </div>
                <Link href="/signup">
                    <button className="capitalize text-white bg-primary-light h-10 w-24 rounded text-sm mr-2">
                        buy now
                    </button>
                </Link>

            </div>
        </div>
    )
}


export default PlanComponent;