import Head from 'next/head';
import React from 'react';
import Image from "next/image";
import sanityClient from "../lib/sanity";
// import Fade from "react-reveal/fade";
import { currentImage, showModal } from '../atoms/states';
import { useRecoilState } from 'recoil';
import GalleryImage from '../components/gallery/GalleryImage';


export async function getStaticProps() {
    const propertyImages = await sanityClient.fetch(`*[_type=="property"]{
        "bannerImage":bannerImage.asset->url
    }`);

    return {
        props: {
            propertyImages
        }
    }
}

interface GalleryProps {
    propertyImages: { bannerImage: string }[];
}

const Gallery = ({ propertyImages }: GalleryProps) => {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | Gallery</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:px-60 lg:px-40 md:px-12 py-20">
                {
                    propertyImages.map((img, i) => (
                        <GalleryImage key={i} bannerImage={img.bannerImage} />
                    ))
                }
            </main>
        </div>
    )
}


Gallery.innerPage = true;
Gallery.title = "Our Gallery";

export default Gallery