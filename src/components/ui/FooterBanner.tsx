import React from "react"
import Achievements from "./Achievements";
import { Parteners } from "./Parteners";

const FooterBanner = () => {
    return (
        <div className="flex flex-col w-full" >
            <Achievements />
            <Parteners />
        </div>
    )
}

export default FooterBanner;