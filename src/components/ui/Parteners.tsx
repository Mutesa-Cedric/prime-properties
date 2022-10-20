import React from 'react'
import { Partener } from '../../@types/types'
import Image from "next/image";


const parteners:Partener[]=[
     {
       logo:"/images/company1.png",
       name:"Company 1"
     },
     {
        logo:"/images/company2.png",
        name:"Company 2"
      },
      {
        logo:"/images/company3.png",
        name:"Company 2"
      },
      {
        logo:"/images/company4.png",
        name:"Company 2"
      }
]

export const Parteners = () => {
  return (
    <div className='flex w-full items-center py-16 xl:px-60 lg:px-40 md:px-12 justify-between'>
    {
        parteners.map((partener, index) => (
            <div key={index} className="flex flex-col space-y-1 items-center">  
                <Image src={partener.logo} height={120} width={150} />
            </div>
        ))
    }
</div>
  )
}
