import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRecoilState } from 'recoil';
import { showDropDownMenu } from '../../atoms/states';
import { navLinks } from '../../constants/sitemap';
import useAuth from '../../hooks/useAuth'
import MenuDropDown from './MenuDropDown';


function Navbar() {
    const { user, logout } = useAuth();
    const [dropDownMenu, setShowDropDownMenu] = useRecoilState(showDropDownMenu)
    return (
        <div className="flex relative flex-col w-full h-auto">
            {/* dropdown menu */}
            {
                dropDownMenu && <MenuDropDown />
            }
            {/* upper navigation */}
            <div className='flex items-center justify-between w-full bg-primary-light py-3 text-white xl:px-60 lg:px-40 md:px-12'>
                <div className='flex items-center  space-x-0 sm:space-x-3 flex-col sm:flex-row'>
                    <div className='flex items-center space-x-1'>
                        <Image src="/icons/message_icon.svg" height={20} width={24} />
                        <p>info@primeproperties.com</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <Image src="/icons/phone_icon.svg" height={20} width={24} />
                        <p>(+250) 781 809 989</p>
                    </div>
                </div>
                {
                    user ? (
                        <div className="flex space-x-6 items-center">
                            <div className='rounded-full h-8 w-8'>
                                {user.photoURL ? <Image src={user.photoURL} height={60} width={60} className='rounded-full' /> : <Image src="/icons/user_icon.svg" height={40} width={40} />}
                            </div>
                            <button onClick={logout} className="bg-white text-red-500 border border-red-500 rounded py-1 px-6 text-red-500 hover:bg-red-400  hover:text-white hover:border-red-400 transition duration-200">
                                Logout
                            </button>
                        </div>

                    ) : (
                        <div className='flex items-center space-x-2'>
                            <Image src="/icons/user_icon.svg" height={30} width={30} />
                            <div className="flex items-center">
                                <Link href="/login">
                                    <span className='cursor-pointer'>Login</span>
                                </Link>
                                <p>/</p>
                                <Link href="/signup">
                                    <span className='cursor-pointer'>Register</span>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* lower navigation */}
            <div className='flex items-center justify-between py-4 xl:px-60 lg:px-40 md:px-12'>
                <div className='flex items-center'>
                    <Image src={'/icons/logo.svg'} height={30} width={20} />
                    <p className='text-xl font-medium'>Prime Properties</p>
                </div>
                <div className='hidden md:flex flex space-x-4 items-center'>
                    {
                        navLinks.slice(0, 6).map((link, i) => (
                            <Link href={link.href} key={i}>
                                <span className='cursor-pointer'>{link.title}</span>
                            </Link>
                        ))
                    }

                    <div onClick={() => setShowDropDownMenu(!dropDownMenu)} className='bg-primary-light h-10 w-10 space-y-1 px-2 flex items-center flex-col justify-center cursor-pointer'>
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