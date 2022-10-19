import React from 'react'
import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/navbar'
import SmallDevicesNotSupported from '../components/ui/SmallDevicesNotSupported'

interface Props {
  children: React.ReactNode,
  isHome: boolean
}

function MainLayout({ children, isHome }: Props) {
  return (
    <div >
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