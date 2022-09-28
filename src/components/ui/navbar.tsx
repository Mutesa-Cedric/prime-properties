import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useAuth from '../../hooks/useAuth'


function Navbar() {
    const { user } = useAuth()
    return (
        <div className="flex flex-col w-full h-auto">

            {/* upper navigation */}
            <div className='flex items-center justify-between w-full bg-primary-light py-3 text-white px-32'>
                <div className='flex items-center space-x-3'>
                    <div className='flex items-center space-x-1'>
                        <Image src="/icons/message_icon.svg" height={20} width={30} />
                        <p>info@primeproperties.com</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <Image src="/icons/phone_icon.svg" height={20} width={30} />
                        <p>(+250) 781 809 989</p>
                    </div>
                </div>
                {
                    user ? (
                        <div className='rounded-full h-8 w-8'>
                            {user.photoURL ? <Image src={user.photoURL} height={40} width={40} className='rounded-full' /> : <Image src="/icons/user_icon.svg" height={40} width={40} />}
                        </div>
                    ) : (
                        <div className='flex items-center space-x-2'>
                            <Image src="/icons/user_icon.svg" height={40} width={40} />
                            <div className="flex items-center">
                                <Link href="/login">
                                    <span className='cursor-pointer'>Login</span>
                                </Link>
                                <p className='mx-1'>/</p>
                                <Link href="/signup">
                                    <span className='cursor-pointer'>Register</span>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* lower navigation */}
            <div className='flex items-center justify-between py-2 px-32 bg-gray-100'>
                <div className='flex items-center'>
                    <Image src={'/icons/logo.svg'} height={50} width={50} />
                    <p className='text-xl font-medium'>Prime Properties</p>
                </div>
                <div className='flex space-x-4 items-center'>
                    <Link href="/">
                        <span className='cursor-pointer'>Home</span>
                    </Link>
                    <Link href="/about">
                        <span className='cursor-pointer'>About Us</span>
                    </Link>
                    <Link href="/properties">
                        <span className='cursor-pointer'>Properties</span>
                    </Link>
                    <Link href="/agents">
                        <span className='cursor-pointer'>Agents</span>
                    </Link>
                    <Link href="/contact">
                        <span className='cursor-pointer'>Contact Us</span>
                    </Link>
                    <div className='bg-primary-light h-12 w-12 space-y-1 px-2 flex items-center flex-col justify-center'>
                        {
                            new Array(3).fill(0).map((_, i) => (
                                <div key={i} className='h-[3px] bg-white w-full mx-1 rounded-xl'></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar