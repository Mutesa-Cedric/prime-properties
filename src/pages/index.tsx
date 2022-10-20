import Head from 'next/head'
import HomeAdsSection from '../components/home/HomeAdsSection';
import HomeBanner from '../components/home/HomeBanner';
import sanityClient from '../lib/sanity';
import { AppData } from '../@types/types';
import FeaturedProperties from '../components/properties/FeaturedProperties';
import TrustedPartners from '../components/ui/TrustedPartners';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import PropertyNews from '../components/home/PropertyNews';
import LatestPropertiesForSale from '../components/home/LatestPropertiesForSale';
import PropertiesInCities from '../components/home/PropertiesInCities';
import RecentlyAddedProperties from '../components/home/RecentlyAddedProperties';
import { blogsQuery, citiesQuery, propertiesQuery, testimonialsQuery } from '../utils/queries';
import useAuth from "../hooks/useAuth";

const Home = ({ properties, testimonials, blogs, cities }: AppData) => {
  const propertiesForSale = properties.filter(property => property.status === "forSale")
  const {user}=useAuth();  
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
        <PropertiesInCities cities={cities} />
        <RecentlyAddedProperties properties={properties} />
        <WhyChooseUs />
        <LatestPropertiesForSale properties={propertiesForSale} />
        <TestimonialSlider testimonials={testimonials} />
        <PropertyNews blogs={blogs} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const properties = await sanityClient.fetch(propertiesQuery);
  const testimonials = await sanityClient.fetch(testimonialsQuery);
  const blogs = await sanityClient.fetch(blogsQuery);
  const cities = await sanityClient.fetch(citiesQuery);

  return {
    props: {
      properties: properties,
      testimonials: testimonials,
      blogs: blogs,
      cities: cities
    }
  }
}

Home.isHome = true;
export default Home