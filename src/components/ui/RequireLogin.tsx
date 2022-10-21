import Link from "next/link";
import React from "react";

const RequireLogin = () => {
    return (
        <div className="w-full py-16 flex flex-col items-center space-y-10">
            <h1 className="text-2xl text-heading-1" >You are not logged in !</h1>
            <Link href={`/login`}>
                <button className="text-white bg-primary-light py-3 px-6 rounded">
                    Login to Continue
                </button>
            </Link>
        </div>
    )
}

export default RequireLogin;