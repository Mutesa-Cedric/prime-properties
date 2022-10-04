import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

const Login = () => {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | login</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className='flex items-center justify-center py-24 '>
                <form className='auth-form border-[1px] border-[#D3DEE8] py-10 px-16 w-[40%] space-y-5 flex flex-col items-center'>
                    <h1 className='text-2xl font-medium text-[#2A2C30] pb-4'>Login To Your Account</h1>
                    <div className=" flex flex-col space-y-4 w-full">
                        <div className='input-wrapper'>
                            <label htmlFor="username">User Name</label>
                            <input type="text" name="username" id="username" placeholder="User Name" />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Password' />
                        </div>
                    </div>
                    <button className=' text-center w-full py-3 text-white bg-primary-light text-lg rounded-[2px]'>
                        Login
                    </button>
                    <div className="flex flex-col space-y-3">
                        <h2>You can also login with social network</h2>
                        <div className="flex items-center w-full justify-between space-x-3">
                            <button className='login-with-button bg-[#DD4B39]'>
                                Google
                            </button>
                            <button className='login-with-button bg-[#3B5999]'>
                                Facebook
                            </button>
                            <button className='login-with-button bg-primary-light'>
                                Twitter
                            </button>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <span>Don&apos;t have account ?</span>
                        <Link href='/signup'>
                            <span className='text-primary-light cursor-pointer'>Sign up</span>
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    )
}

Login.innerPage = true;
Login.title = "Account Login"
export default Login
