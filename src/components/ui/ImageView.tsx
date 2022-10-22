import React from 'react';
import Image from "next/image";
import { useRecoilValue } from 'recoil';
import { currentImage } from '../../atoms/states';
// import { MuiModal } from '@mui/material';
const ImageView = () => {
    const img = useRecoilValue(currentImage);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false)
    }
    return (
      <div className="">

      </div>
    )
}

export default ImageView;