import React from 'react'
import { useRouter } from "next/router"
import Link from 'next/link';
// import Fade from "react-reveal/fade"


interface BannerProps {
  title: string,
  bgImage?: string,
}
const Banner: React.FC<BannerProps> = ({ title, bgImage }) => {
  const router = useRouter();
  const pathName = router.pathname;
  const pageName = pathName.slice(1);
  return (
    // <Fade>
      <div className='w-full'>
        <div className='bg-center bg-cover bg-no-repeat w-full h-[40vh] flex  flex-col items-center justify-center'
          style={{ backgroundImage: `linear-gradient(rgba(51, 72, 92,.75),rgba(51, 72, 92,.75)),url(/images/banner.png)` }}>
          <h1 className='font-semibold text-[40px] text-white'>{title}</h1>
          <div className='flex items-center space-x-2'>
            <Link href='/'>
              <p className='cursor-pointer text-white text-lg'>Home</p>
            </Link>
            <span className='text-white text-lg'>|</span>
            <Link href={`/${pageName.split("/")[0]}`}>
              <span className='cursor-pointer text-primary-light capitalize text-lg'>{pageName.split("/")[0]}</span>
            </Link>
          </div>
        </div>
      </div>
    // </Fade>
  )
}

export default Banner
