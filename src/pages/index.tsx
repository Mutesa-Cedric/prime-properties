import type { NextPage } from 'next'
import Head from 'next/head'
import HomeAdsSection from '../components/home/HomeAdsSection';
import HomeBanner from '../components/home/HomeBanner';
import useAuth from '../hooks/useAuth'
const Home: NextPage = () => {
  const { user } = useAuth();
  // console.log(user);
  return (
    <div className="text-xl flex items-center justify-center h-full w-full">
      <Head>
        <title>Prime Properties | welcome</title>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main className='flex flex-col space-y-8 w-full'>
         <HomeBanner/>
         <HomeAdsSection/>
      </main>
    </div>
  )
}
export default Home