import type { NextPage } from 'next'
import Head from 'next/head'
import HomeAdsSection from '../components/home/HomeAdsSection';
import HomeBanner from '../components/home/HomeBanner';
import useAuth from '../hooks/useAuth';
import sanityClient from '../lib/sanity';
import {Property} from '../@types/types';

interface HomePageProps{
  properties:Property[]
}

const Home: NextPage<HomePageProps> = ({properties}) => {
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
      </main>
    </div>
  )
}

const propertiesQuery = `*[_type == "property"][0]`;

export async function getStaticProps() {
  const data = await sanityClient.fetch(propertiesQuery);
  return {
    props:{
      properties: data
    }
  }
}

export default Home