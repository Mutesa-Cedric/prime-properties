import React from 'react'
import { Agency } from '../../@types/types'
import AgencyComponent from './Agency'
// import Fade from "react-reveal/fade";


interface AgencyProps {
    agencies: Agency[] | null
}
const ListView = ({ agencies }: AgencyProps) => {
    return (
        // <Fade duration={2000}>
            <>
                <div className='flex flex-col w-full space-y-4'>
                    {agencies?.map((agency, i) => (
                        <AgencyComponent key={i} agency={agency} view="list" />)
                    )}
                </div>
                {!agencies &&
                    <div className="w-full text-center mt-12 text-2xl text-heading-1">
                        No agencies found! Try another Keyword
                    </div>  
                }
            </>

        // </Fade>
    )
}

export default ListView
