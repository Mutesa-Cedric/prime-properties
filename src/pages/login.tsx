import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import useAuth from "../hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    email: string;
    password: string;
}

const Login: NextPage & {
    title: string,
    innerPage?: boolean
} = () => {

    const { loginWithEmail, loginWithGoogle, loginWithFacebook } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async data => {
        console.log(data)
        await loginWithEmail(data.email, data.password);
    };

    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | login</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className='flex items-center justify-center py-24 '>
                <form onSubmit={handleSubmit(onSubmit)} className='auth-form border-[1px] border-[#D3DEE8] py-10 px-16 xl:w-[40%] space-y-5 flex flex-col items-center'>
                    <h1 className='text-2xl font-medium text-[#2A2C30] pb-4'>Login To Your Account</h1>
                    <div className=" flex flex-col space-y-4 w-full">
                        <div className='input-wrapper'>
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id="email" placeholder="Email Address"
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder='Password'
                                {...register("password", { required: true, minLength: 4, maxLength: 20 })} />
                        </div>
                    </div>
                    <button className='submit-button'>
                        Login
                    </button>
                    <div className="flex flex-col space-y-3 py-3 w-full items-center">
                        <h2 className='text-lg text-gray-primary/75'>You can also login with these social networks</h2>
                        <div className="flex items-center w-full justify-between space-x-3">
                            <button onClick={loginWithGoogle} className='login-with-button bg-[#DD4B39]'>
                                Google
                            </button>
                            <button onClick={loginWithFacebook} className='login-with-button bg-[#3B5999]'>
                                Facebook
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
