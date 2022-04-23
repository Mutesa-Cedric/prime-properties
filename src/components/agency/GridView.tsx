import React from 'react'
import { Agency } from '../../@types/types'
import AgencyComponent from './Agency'
// import Fade from "react-reveal/fade";

interface AgencyProps {
    agencies: Agency[] | null
}

const GridView = ({ agencies }: AgencyProps) => {

    return (
        // <Fade duration={2000}>
            <>
                <div className="w-full grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        agencies?.map((agency, i) => (
                            <AgencyComponent key={i} agency={agency} view="grid" />)
                        )
                    }
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

export default GridView
