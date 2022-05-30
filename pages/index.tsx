import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen overflow-hidden'>
        {/* nav bar */}
        <nav className="bg-white h-16 overflow-hidden flex  shadow-md px-12 w-full">
          <div className="flex items-center justify-between w-full">
            <div>
              <Image
                objectFit='cover'
                height={'100px'}
                width={'100px'}
                src={'/logo-small.png'} alt="logo"
              />
            </div>
            <div className='flex space-x-12'>
              <button className='bg-green-500 text-gray-200 px-5 capitalize text-lg  rounded-md py-1'>register</button>
              <button className='bg-green-500 text-gray-200 px-5 capitalize text-lg  rounded-md py-1'>login</button>
            </div>
          </div>
        </nav>
        {/* nav bar */}

        {/* main */}
        <div className='flex items-center justify-between px-16 flex-wrap md:flex-nowrap'>
          <div className='w-full'>
            <div className="sm:text-center lg:text-left">
              <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl md:text-left ">
                <span className="block mb-2">Primium Properties</span>
                <span className="block text-green-500 "> Non-primium prices</span>
              </h1>
              <p className="text-left text-base mt-6 text-gray-500 md:text-xl sm:max-w-2xl  md:mt-10 sm:mt-5 ">
                At prime properties, we Ensure that our clients get properties at affordable prices. Luxury is our priority and budget is our Constrain.We have over 783829 buyers and over 207896 sellers accross the globe. Pick and choose from 1000+ properties accross
                the globe
              </p>
              <div className=" sm:flex sm:justify-start ">
                <div className="my-5">
                  <p className="text-xl text-gray-700 mb-4">join over 37829348+ members</p>
                  <a className="capitalize text-xl flex justify-center rounded-md bg-green-500 py-2 text-white md:px-14 md:py-3 " href="/signup">Get Started</a>
                </div>
                <div className="my-5 ml-20">
                  <p className="text-xl text-gray-700 mb-4">have an account?</p>
                  <a className="capitalize text-xl flex justify-center rounded-md bg-green-200 py-2 text-green-700 md:px-14 md:py-3 " href="/login">log in</a>
                </div>
              </div>

            </div>
          </div>
          <div className='w-full border-2 border-blue-400'>
            
          </div>
        </div>
        {/* main */}

      </main>
    </div>
  )
}

export default Home
