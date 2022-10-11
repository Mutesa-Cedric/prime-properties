import Image from 'next/image';
import React from 'react'
import { Agency } from '../../@types/types'

interface AgencyProps {
    agency: Agency;
    view: 'grid' | 'list'
}
const Agency: React.FC<AgencyProps> = ({ agency, view }) => {

    return (
        <div className={view === 'grid' ? ' agencyCard flex-col space-y-3 items-center ' : 'agencyCard space-x-3 w-full'}>
            <Image src={agency.image} height={200} width={300} />
            <div className='flex flex-col space-y-3'>
                <h2 className={view === "grid" ? 'text-xl text-gray-primary font-medium self-center' : 'text-xl text-gray-primary font-medium'}>{agency.name}</h2>
                <p className={view==="grid"?'text-base text-gray-primary/50 text-center':'text-base text-gray-primary/50'}>{agency.description}</p>
            </div>
        </div>
    )
}

export default Agency
