import React from 'react'

interface Props{
    children:React.ReactNode
}

function MainLayout({children}:Props) {
  return (
    <div>
        {children}
    </div>
  )
}

export default MainLayout