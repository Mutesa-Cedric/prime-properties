import React from 'react'

function HouseBanner() {
    return (
        <div className="bg-scroll h-full flex items-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url(/luxury.jpg)` }}>
            <div className="continer px-40 py-40 ">
                <h2 className="text-white text-4xl mb-2 font-bold ">Experience Luxury Like Never Before</h2>
                <h3 className="text-gray-200 mb-8 text-2xl ">50+ exotic locations accross the globe!</h3>
                <button className="tracking-wider shadow-xl text-white border-2 text-xl uppercase font-bold border-white px-10 py-6 ">
                    <a href="#locations">  Explore locations</a>
                </button>
            </div>
        </div>
    )
}

export default HouseBanner