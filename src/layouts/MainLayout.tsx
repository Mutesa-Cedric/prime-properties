import React from 'react'
import { useRecoilValue } from 'recoil'
import { showImageModal } from '../atoms/states'
import Footer from '../components/ui/Footer'
import ImageView from '../components/ui/ImageView'
import Navbar from '../components/ui/navbar'
import SmallDevicesNotSupported from '../components/ui/SmallDevicesNotSupported'


interface Props {
  children: React.ReactNode,
  isHome: boolean
}

function MainLayout({ children, isHome }: Props) {
  const showImg = useRecoilValue(showImageModal)
  // console.log(showImg);
  return (
    <div >
      {
        showImg && <ImageView />

      }
      <div className="hidden md:flex flex-col justify-between items-center min-h-screen">
        <Navbar />
        {children}
        <Footer isHome={isHome} />
      </div>
      <div className="flex md:hidden h-screen w-full">
        <SmallDevicesNotSupported />
      </div>
    </div>
  )
}

export default MainLayout