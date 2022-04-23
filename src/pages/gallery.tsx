import Head from 'next/head';
import React from 'react';
import Image from "next/image";
import sanityClient from "../lib/sanity";
// import Fade from "react-reveal/fade";
import { currentImage, showImageModal } from '../atoms/states';
import { useRecoilState } from 'recoil';


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

const GalleryImage = ({ bannerImage }: { bannerImage: string }) => {
    const [_img, setCurrentImage] = useRecoilState(currentImage);
    const [_showImg, setShowImageModal] = useRecoilState(showImageModal);
    return (
        <div className="relative w-full h-72 group flex items-center justify-center cursor-pointer">
            <Image src={bannerImage} layout="fill" objectFit="cover" className="shadow-md rounded bg-[#C4C4C4]" />
                <div className="hidden group-hover:flex absolute w-[85%]  items-center justify-center h-[85%] bg-primary-light opacity-90 rounded" onClick={() => {
                    setCurrentImage(bannerImage);
                    setShowImageModal(true);
                }}>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.6693 1.75195H6.33372C2.84058 1.75195 0 4.5916 0 8.08886V47.9168C0 51.41 2.84058 54.2466 6.33372 54.2466H49.6691C53.1622 54.2466 55.9998 51.41 55.9998 47.9168V8.08886C56 4.5916 53.1624 1.75195 49.6693 1.75195ZM36.2124 11.1761C39.5905 11.1761 42.33 13.9159 42.33 17.2937C42.33 20.6716 39.5903 23.4113 36.2124 23.4113C32.8335 23.4113 30.0949 20.6716 30.0949 17.2937C30.0949 13.9159 32.8335 11.1761 36.2124 11.1761ZM47.6829 48.3919H27.9994H9.19286C7.50328 48.3919 6.75082 47.1694 7.51247 45.6613L18.0114 24.8664C18.7721 23.3584 20.2219 23.2238 21.2486 24.5655L31.8056 38.3618C32.8323 39.7037 34.6269 39.8178 35.8147 38.6156L38.3973 36.0004C39.5841 34.7982 41.3327 34.947 42.3013 36.3307L48.989 45.8835C49.9557 47.2692 49.3725 48.3919 47.6829 48.3919Z" fill="white" />
                    </svg>
                </div>
        </div>
    )
}

const Gallery = ({ propertyImages }: GalleryProps) => {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | Properties</title>
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