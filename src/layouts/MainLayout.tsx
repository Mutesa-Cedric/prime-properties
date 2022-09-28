import React from 'react'
import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/navbar'

interface Props{
    children:React.ReactNode
}

function MainLayout({children}:Props) {
  return (
    <div className="flex flex-col justify-between min-h-screen  items-center">
      <Navbar/>
        {children}
      <Footer/>
    </div>
  )
}

export default MainLayout