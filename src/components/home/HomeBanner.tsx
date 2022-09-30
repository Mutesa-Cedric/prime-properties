import React from 'react'
import HomePropertySearch from './HomePropertySearch'

const HomeBanner: React.FC = () => {
    return (
        <div
            className='flex w-full h-[90vh] sm:h-[85vh] flex-col items-center justify-center bg-center bg-cover bg-no-repeat   space-y-4 sm:space-y-12'
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/images/home_banner.png)' }}>
            <div className='text-white font-bold text-4xl'>Find Your Dream Properties</div>
            <HomePropertySearch />
        </div>
    )
}

export default HomeBanner