import type { NextPage } from 'next'
import Head from 'next/head'
const Home: NextPage = () => {
  return (
    <div className="font-bold flex items-center justify-center h-screen w-screen">
      <Head>
        <title>Prime Properties | welcome</title>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main>
          hello prime properties
      </main>
    </div>
  )
}
export default Home
