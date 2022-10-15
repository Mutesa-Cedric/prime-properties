import type { NextPage } from 'next'
import Head from 'next/head'
import HomeAdsSection from '../components/home/HomeAdsSection';
import HomeBanner from '../components/home/HomeBanner';
import useAuth from '../hooks/useAuth';
import sanityClient from '../lib/sanity';
import { Blog, Property, Testimonial } from '../@types/types';
import FeaturedProperties from '../components/properties/FeaturedProperties';
import TrustedPartners from '../components/ui/TrustedPartners';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import PropertyNews from '../components/home/PropertyNews';
import LatestPropertiesForSale from '../components/home/LatestPropertiesForSale';

interface HomePageProps {
  properties: Property[],
  testimonials: Testimonial[],
  blogs: Blog[]
}

const Home= ({ properties, testimonials, blogs }:HomePageProps) => {
  const { user } = useAuth();
  const propertiesForSale = properties.filter(property => property.status === "forSale")
  // console.log(user);
  return (
    <div className="text-xl flex items-center justify-center h-full w-full">
      <Head>
        <title>Prime Properties | welcome</title>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main className='flex flex-col w-full'>
        <HomeBanner />
        <HomeAdsSection />
        <FeaturedProperties properties={properties} />
        <TrustedPartners />
        <WhyChooseUs />
        <LatestPropertiesForSale properties={propertiesForSale} />
        <TestimonialSlider testimonials={testimonials} />
        <PropertyNews blogs={blogs} />
      </main>
    </div>
  )
}

const propertiesQuery = `*[_type == "property"]{
  ...,
  "bannerImage":bannerImage.asset->url,
  "slug":slug.current
}`;

export async function getStaticProps() {
  const properties = await sanityClient.fetch(propertiesQuery);
  const testimonials = await sanityClient.fetch(`*[_type=="testimonial"]{
    ...,
    "profileImage":profileImage.asset->url
  }`);
  const blogs = await sanityClient.fetch(`*[_type=="blog"]{
    ...,
    "banner":banner.asset->url,
    "slug":slug.current,
    postedBy->
}`);

  return {
    props: {
      properties: properties,
      testimonials: testimonials,
      blogs: blogs,
    }
  }
}

Home.isHome=true;
export default Home