/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import { Video } from '../../@types/types'
import Image from "next/image";
import { useRecoilState } from 'recoil';
import { showModal } from '../../atoms/states';


const Video = ({ banner, url }: Video) => {
    const [_modal, setShowModal] = useRecoilState(showModal)
    return (
        <div onClick={() => setShowModal(true)} className="w-full relative h-96 bg-cover bg-center bg-no-repeat bg-blend-multiply flex items-center justify-center"
            style={{ backgroundImage: `linear-gradient(#51789D,#51789D),url(${banner})` }}>
            <Image src={'/icons/play_button.svg'} width={110} height={110} className="cursor-pointer" />
        </div>
    )
}

export default Video