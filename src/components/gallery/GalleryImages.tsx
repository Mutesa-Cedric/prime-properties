import React from 'react'
import Image from "next/image";
import Link from 'next/link';

interface Props {
    propertyImages: {
        bannerImage: string;
    }[]
}
const GalleryImages = ({ propertyImages }: Props) => {
    return (
        <div className="xl:px-60 lg:px-40 md:px-12 px-10 flex flex-col items-center space-y-12">
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
            <Link href={'/gallery'}>
                <button className="bg-primary-light text-white py-2 px-6">
                    View More Images
                </button>
            </Link>

        </div>
    )
}

export default GalleryImages
