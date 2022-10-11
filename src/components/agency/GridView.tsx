import React from 'react'
import { AgenciesProps } from '../../pages/agencies'
import Agency from './Agency'

const GridView: React.FC<AgenciesProps> = ({ agencies }) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                agencies.map((agency, i) => (
                    <Agency key={i} agency={agency} view="grid" />)
                )
            }
        </div>
    )
}

export default GridView
