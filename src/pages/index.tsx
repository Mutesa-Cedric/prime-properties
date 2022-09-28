import type { NextPage } from 'next'
import Head from 'next/head'
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
      <main>
        Home page
      </main>
    </div>
  )
}
export default Home
