import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/logo-small.png" />
      </Head>
      <main className='w-full h-full'>
        {/* nav bar */}
        <nav className="bg-white h-20 overflow-hidden flex  shadow-md lg:px-12 md:px-8 pr-4 pl-3 w-full">
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
              <button className='bg-green-200 text-green-700 hover:text-white hover:bg-green-700 px-5 capitalize text-lg  rounded-md py-1'>register</button>
              <button className='bg-green-200 text-green-700 hover:text-white hover:bg-green-700 px-5 capitalize text-lg  rounded-md py-1'>login</button>
            </div>
          </div>
        </nav>
        {/* nav bar */}

        {/* main */}
        <div className='flex items-center justify-between h-[80%] mt-4 lg:px-16 px-4 flex-wrap lg:flex-nowrap'>
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
              <div className=" sm:flex sm:justify-start">
                <div className="my-5">
                  <p className="text-lg capitalize text-gray-700 mb-4">join over 37829348+ members</p>
                  <button className='bg-green-200 text-green-700 px-20 text-lg rounded-sm py-2'>Get Started</button>
                </div>
                <div className="my-5 lg:ml-20">
                  <p className="text-lg capitalize text-gray-700 mb-4">have an account?</p>
                  <button className='bg-green-200 text-green-700 px-14 text-lg rounded-sm py-2'>Login</button>
                </div>
              </div>

            </div>
          </div>
          <div className='lg:w-[90%] w-full lg:mt-0 mt-8 border-[6px] relative border-gray-100 h-[420px] rounded-xl flex items-center'>
            <Image src={'/luxury.jpg'} layout="fill" alt='house' className=' rounded-lg ' />
          </div>
        </div>
        {/* main */}
        {/* footer */}
          <div className="text-center text-gray-400  italic ">
            <p>designed and developed by <b> Mutesa Cedric</b></p>
          </div>
        {/* footer */}

      </main>
    </div>
  )
}

export default Home
