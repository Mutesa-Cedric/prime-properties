import React from 'react'

function Banner() {
    return (
        <div className='w-full'>
            <div className="sm:text-center lg:text-left">
                <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl md:text-left ">
                    <span className="block mb-2">Primium Properties</span>
                    <span className="block text-green-500 "> Non-primium prices</span>
                </h1>
                <p className="text-left text-base mt-6 text-gray-500 md:text-xl sm:max-w-2xl  md:mt-10 sm:mt-5 ">
                    At prime properties, we Ensure that our clients get properties at affordable prices. Luxury is our priority and budget is our Constrain.We have over 783829 buyers and over 207896 sellers accross the globe. Pick and choose from 1000+ properties accross
                    the globe
                </p>
                <div className=" sm:flex sm:justify-start">
                    <div className="my-5">
                        <p className="text-lg capitalize text-gray-700 mb-4">join over 37829348+ members</p>
                        <button className='bg-green-200 text-green-700 px-20 text-lg rounded-sm py-2'>Get Started</button>
                    </div>
                    <div className="my-5 lg:ml-20">
                        <p className="text-lg capitalize text-gray-700 mb-4">have an account?</p>
                        <button className='bg-green-200 text-green-700 px-14 text-lg rounded-sm py-2'>Login</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Banner