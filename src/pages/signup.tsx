import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function Signup() {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | signup</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className='flex items-center justify-center py-24 '>
                <form className='auth-form border-[1px] border-[#D3DEE8] py-10 px-16 w-[40%] space-y-5 flex flex-col items-center'>
                    <h1 className='text-2xl font-medium text-[#2A2C30] pb-4'>Create Your Account</h1>
                    <div className=" flex flex-col space-y-4 w-full">
                        <div className='input-wrapper'>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Email Address" />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Password' />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="comfirmPassword">Comfirm Password</label>
                            <input type="password" name="comfirmPassword" id="comfirmPassword" placeholder='Comfirm Password' />
                        </div>
                    </div>
                    <button className='submit-button'>
                        Create Account
                    </button>
                    <div className="flex flex-col space-y-3 py-3">
                        <h2>You can also continue with these social networks</h2>
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
                        <span>have account ?</span>
                        <Link href='/login'>
                            <span className='text-primary-light cursor-pointer'>Login</span>
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    )
}
Signup.innerPage = true;
Signup.title = "Account Registration"

export default Signup
