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
      <main className='w-screen h-screen overflow-hidden'>
        {/* nav bar */}
        <nav className="bg-white shadow-md px-8 w-full border h-">
          <div className="flex items-center justify-between">
            <div>
              <Image
                objectFit='cover'
                height={'100px'}
                width={'100px'}
                src={'/logo-small.png'} alt="logo"
              />
            </div>
            <div>
            </div>
          </div>
        </nav>
        {/* nav bar */}
      </main>
    </div>
  )
}

export default Home
