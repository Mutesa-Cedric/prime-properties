import React from 'react';
import Image from "next/image";
import { useRecoilValue } from 'recoil';
import { currentImage } from '../../atoms/states';
import { MuiModal } from '@mui/material';
const ImageView = () => {
    const img = useRecoilValue(currentImage);
    return (
        <MuiModal>

        </MuiModal>
    )
}

export default ImageView;