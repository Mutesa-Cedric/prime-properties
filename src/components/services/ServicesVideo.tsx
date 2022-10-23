/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import { Video } from '../../@types/types'
import Image from "next/image";


const video: Video = {
    banner: "/images/video-banner.png",
    url: "youtube.com/watch?v=4NRXx6U8ABQ&list=RDMM&index=3"
}

const ServicesVideo = () => {
    return (
        <div className="w-full relative h-96 bg-cover bg-center bg-no-repeat bg-blend-multiply flex items-center justify-center"
            style={{ backgroundImage: `linear-gradient(#51789D,#51789D),url(${video.banner})` }}>
            <Image src={'/icons/play_button.svg'} width={110} height={110} className="cursor-pointer" />
        </div>
    )
}

export default ServicesVideo