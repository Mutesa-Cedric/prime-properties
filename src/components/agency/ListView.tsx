import React from 'react'
import { Agency } from '../../@types/types'
import AgencyComponent from './Agency'
import Fade from "react-reveal/fade";


interface AgencyProps {
    agencies: Agency[]
}
const ListView = ({ agencies }: AgencyProps) => {
    return (
        <Fade duration={2000}>
            <div className='flex flex-col w-full space-y-4'>
                {agencies.map((agency, i) => (
                    <AgencyComponent key={i} agency={agency} view="list" />)
                )}
            </div>
        </Fade>

    )
}

export default ListView
