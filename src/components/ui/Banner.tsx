import React from 'react'

interface BannerProps{
    title:string,
    bgImage?:string,
}
const  Banner:React.FC<BannerProps>=({title,bgImage})=> {
  return (
    <div>
      Banner
    </div>
  )
}

export default Banner
