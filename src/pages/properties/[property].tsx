import React from 'react'
import sanityClient from "../../lib/sanity";
import { Property } from '../../@types/types';
import Head from 'next/head';
import Image from "next/image";
import Map from '../../components/ui/Map';
import useAuth from "../../hooks/useAuth";


export async function getStaticPaths() {
  const properties = await sanityClient.fetch(`*[_type=="property"]{
    slug
  }`);
  const paths = properties.map((property: any) => ({
    params: { property: property.slug.current.slice(11) }
  }));
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params }: any) {
  const property = await sanityClient.fetch(`*[_type=="property" && slug.current == "properties/${params.property}"][0]{
    ...,
    "bannerImage":bannerImage.asset->url,
    gallery[]{
      _type=="image"=>{
      "image":asset->url
      }
    },
    videos[]{
      url,
      "banner":banner.asset->url
    }
  }`);
  return {
    props: {
      property
    }
  }
}

interface PropertyProps {
  property: Property
}

function PropertyDetails({ property }: PropertyProps) {
  return (
    <div className="w-full lg:px-60">
      <Head>
        <title>Prime Properties | {property.name}</title>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main className="w-full flex flex-col space-y-10 py-28">
        <div className="flex flex-col space-y-4 border-b-2 pb-4 relative">
          <div className="w-full h-[55vh] relative">
            <Image src={property.bannerImage} layout="fill" objectFit="cover" />
          </div>
          <div className="w-full flex items-center justify-between text-xl font-medium">
            <p>{property.name}</p>
            <p className="text-primary-light">${property.price}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-medium">Property Overview</h2>
          <p className="text-base text-gray-primary/50">{property.overview}</p>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-medium">Property Features</h2>
          <div className="w-full flex items-center justify-between space-x-4">
            {
              property.features.map((feature, i) => (
                <div key={i} className="flex items-center border-2 space-x-2 py-5 px-16 justify-center  text-gray-primary font-medium">
                  <Image src={`/icons/${feature.icon}.svg`} width={25} height={25} />
                  <p>{feature.value}</p>
                  <p>{feature.name}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-medium">Property Gallery</h2>
          <div className="grid grid-cols-3 gap-8">
            {
              property.gallery.map((image, i) => (
                <Image src={image.image} key={i} width={90} height={60} layout="responsive" />
              ))
            }
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h2 className="text-xl font-medium">Property Videos</h2>
          <div className="flex justify-between items-center space-x-16">
            {
              property.videos.map((video, i) => (
                <div key={i} className="w-full relative h-72 bg-cover bg-center bg-no-repeat bg-blend-multiply flex items-center justify-center"
                  style={{ backgroundImage: `linear-gradient(#51789D,#51789D),url(${video.banner})` }}>
                  <Image src={'/icons/play_button.svg'} width={110} height={110} className="cursor-pointer" />
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <h2 className="text-xl font-medium">Property Location</h2>
          <Map />
        </div>
      </main>
    </div>
  )
}

PropertyDetails.innerPage = true;
PropertyDetails.title = "Property Details";

export default PropertyDetails;
