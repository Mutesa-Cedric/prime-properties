import React from 'react'
import { AgenciesProps } from '../../pages/agencies'
import Agency from './Agency'

const ListView: React.FC<AgenciesProps> = ({ agencies }) => {
    return (
        <div className='flex flex-col w-full space-y-4'>
            {agencies.map((agency, i) => (
                <Agency key={i} agency={agency} view="list" />)
            )}
        </div>
    )
}

export default ListView
