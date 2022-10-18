import React from 'react'
import Image from "next/image";

interface Props {
    propertyImages: {
        bannerImage: string;
    }[]
}
const GalleryImages = ({ propertyImages }: Props) => {
    return (
        <div className="lg:px-60 md:px-40 sm:px-20 px-10 flex flex-col items-center space-y-12">
            <div className='flex flex-col items-center space-y-3'>
                <h2 className="text-2xl font-medium text-gray-primary">Our Gallery Images</h2>
                <p className='text-center max-w-lg text-gray-primary/50 text-base'>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    propertyImages.slice(0, 6).map((img, i) => (
                        <Image key={i} src={img.bannerImage} height={270} width={350} />
                    ))
                }
               
            </div>
        </div>
    )
}

export default GalleryImages
