import Image from 'next/image'
import React, { useState, useEffect } from 'react'


function ImageSlider() {

    const images = [
        '/luxury.jpg',
        '/home1.jpg',
        '/home2.jpg',
        '/home3.jpg',
    ]

    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        let myInterval = setInterval(() => {
            let random = Math.floor(Math.random() * images.length);
            setCurrentImage(images[random])
        }, 3000)
        return () => {
            clearInterval(myInterval)
        }
    }, [])

    return (
        <div className='lg:w-[90%] w-full lg:mt-0 mt-8 border-[6px] relative border-gray-100 h-[420px] rounded-xl flex items-center'>
            <Image src={currentImage} 
            layout="fill" alt='house' 
            className=' rounded-lg ' id='imageContainer' />
        </div>
    )
}

export default ImageSlider