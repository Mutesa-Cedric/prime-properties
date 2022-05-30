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
      <main>
        {/* nav bar */}
        <nav className="bg-white shadow-lg px-8">
          <div className="px-7 py-2 ">
            <div className="flex justify-between items-center w-full">
              <div className="flex space-x-7  ">
                <div>
                  <a className="flex items-center " href="# ">
                    <Image src={'/logo.png'} alt="logo"/>
                    <span className="font-semibold text-gray-700 text-lg ">Prime properties</span>
                  </a>
                </div>
              </div>
              <div className="float-right flex flex-row h-10">
                <button className="bg-green-400 text-white text-lg px-10 sm:mx-0 md:mx-1 mx-2  sm:mr-0 md:mr-0 lg:mr-20  rounded-md"><a href="/login">login</a></button>
                <button className="bg-green-400 text-white text-lg px-10  mx-2 sm:mx-0 md:mx-1 rounded-md"><a href="/signup">signup</a> </button>
              </div>
            </div>
          </div>
        </nav>
        {/* nav bar */}
      </main>
    </div>
  )
}

export default Home
