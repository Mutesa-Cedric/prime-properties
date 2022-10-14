import type { NextPage } from 'next'
import Head from 'next/head'
import HomeAdsSection from '../components/home/HomeAdsSection';
import HomeBanner from '../components/home/HomeBanner';
import useAuth from '../hooks/useAuth';
import sanityClient from '../lib/sanity';
import { Property, Testimonial } from '../@types/types';
import FeaturedProperties from '../components/properties/FeaturedProperties';
import TrustedPartners from '../components/ui/TrustedPartners';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialSlider from '../components/ui/TestimonialSlider';

interface HomePageProps {
  properties: Property[],
  testimonials: Testimonial[]
}

const Home: NextPage<HomePageProps> = ({ properties, testimonials }) => {
  const { user } = useAuth();
  // console.log(user);
  return (
    <div className="text-xl flex items-center justify-center h-full w-full">
      <Head>
        <title>Prime Properties | welcome</title>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main className='flex flex-col space-y-8 w-full'>
        <HomeBanner />
        <HomeAdsSection />
        <FeaturedProperties properties={properties} />
        <TrustedPartners />
        <WhyChooseUs />
        <TestimonialSlider testimonials={testimonials} />
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

  return {
    props: {
      properties: properties,
      testimonials: testimonials
    }
  }
}

export default Home