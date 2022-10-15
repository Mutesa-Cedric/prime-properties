import React from 'react'
import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/navbar'

interface Props{
    children:React.ReactNode,
    isHome:boolean
}

function MainLayout({children,isHome}:Props) {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Navbar/>
        {children}
      <Footer isHome={isHome}/>
    </div>
  )
}

export default MainLayout