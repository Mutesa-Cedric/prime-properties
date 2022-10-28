import React from 'react'
import { useRecoilValue } from 'recoil'
import { showModal } from '../atoms/states'
import Footer from '../components/ui/Footer'
import MediaView from '../components/ui/MediaView'
import Navbar from '../components/ui/navbar'
import SmallDevicesNotSupported from '../components/ui/SmallDevicesNotSupported'


interface Props {
  children: React.ReactNode,
  isHome: boolean
}

function MainLayout({ children, isHome }: Props) {
  const showMedia = useRecoilValue(showModal)
  const showMediaStyles = {
    overflow: "hidden",
    positition: "fixed",
  }
  return (
    <div style={showMedia ? showMediaStyles : {}}>
      {
        showMedia && <MediaView />

      }
      <div className="flex flex-col justify-between items-center min-h-screen">
        <Navbar />
        {children}
        <Footer isHome={isHome} />
      </div>
      {/* <div className="flex md:hidden h-screen w-full">
        <SmallDevicesNotSupported />
      </div> */}
    </div>
  )
}

export default MainLayout