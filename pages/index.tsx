import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/landing/Banner'
import ImageSlider from '../components/landing/imageSlider'
import Navbar from '../components/landing/Navbar'
import Property from '../components/property'
import { properties } from '../propertyData'
const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Prime Properties - Welcome</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Navbar />
        {/* first window */}
        <div className='w-full mt-[1.2px] pt-20 h-[88vh]' id='first-landing'>
          <div className='flex items-center justify-between h-[80%] mt-4 lg:px-16 px-4 flex-wrap lg:flex-nowrap'>
            <Banner />
            <ImageSlider />
          </div>
        </div>
        {/* first window */}

        {/* second window */}
        <div className='w-full h-auto px-16 pt-16 ' id='second-landing'>
          <div className='w-full text-center py-4 '>
            <h1 className='font-medium text-2xl text-gray-700 '>Some properties on sale</h1>
          </div>
          <div className='flex flex-wrap mt-8 items-center justify-between'>
          {properties.map(property=>{
            return property.onSale ? <Property key={property.id} {...property} /> : null
          })}
          </div>
        </div>
        {/* second window */}
      </main>
    </div>
  )
}
export default Home
