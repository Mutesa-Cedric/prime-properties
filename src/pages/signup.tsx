import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import useAuth from "../hooks/useAuth";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
    comfirmedPassword: string,
    fullName: string
};



function Signup() {
    const { signupWithEmail, signupWithFacebook, signupWithGoogle, error } = useAuth();
    const [enableSubmit, setEnableSubmit] = React.useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async data => {
        if (data.password === data.comfirmedPassword) {
            await signupWithEmail(data.fullName, data.email, data.password);
        } else {
            console.log("password not matching")
        }
    };

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {

            if (value.email && value.password && value.comfirmedPassword && value.fullName && value.password === value.comfirmedPassword) {
                setEnableSubmit(true);
            } else {
                setEnableSubmit(false);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | signup</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className='flex items-center justify-center py-24 '>
                <form onSubmit={handleSubmit(onSubmit)} className='auth-form border-[1px] border-[#D3DEE8] py-10 px-16 xl:w-[40%] space-y-5 flex flex-col items-center'>
                    <h1 className='text-2xl font-medium text-[#2A2C30] pb-4'>Create Your Account</h1>
                    <div className=" flex flex-col space-y-4 w-full">
                        <div className='input-wrapper'>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="Full Name"
                                {...register("fullName", { required: true })} />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="Email Address"
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder='Password'
                                {...register("password", { required: true, minLength: 4, maxLength: 20 })} />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="comfirmPassword">Comfirm Password</label>
                            <input type="password" id="comfirmPassword" placeholder='Comfirm Password'
                                {...register("comfirmedPassword", { required: true, minLength: 4, maxLength: 20 })} />

                        </div>
                    </div>
                    {error && <p className="text-red-500 font-medium text-base">
                        {error}
                    </p>}
                    <button disabled={!enableSubmit} className={!enableSubmit ? 'bg-gray-400 cursor-not-allowed submit-button' : 'submit-button'}>
                        Create Account
                    </button>
                    <div className="flex flex-col space-y-3 py-3 w-full items-center">
                        <h2 className='text-lg text-gray-primary/75'>You can also continue with these social networks</h2>
                        <div className="flex items-center w-full justify-between xl:space-x-6 md:space-x-3">
                            <button onClick={signupWithGoogle} className='login-with-button bg-[#DD4B39]'>
                                Google
                            </button>
                            <button onClick={signupWithFacebook} className='login-with-button bg-[#3B5999]'>
                                Facebook
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
