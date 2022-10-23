import React from "react";

const SmallDevicesNotSupported = () => {
    return (
        <div className="bg-[#EEF7FF] w-full     flex items-center justify-center flex-col pt-12 pb-16">
            <section className="flex flex-col items-center space-y-6 pb-8">
                <h2 className="text-primary-dark font-medium text-3xl text-center">Small devices not supported :(</h2>
                <p className="text-gray-primary/75 text-center max-w-md text-[18px]">We are sorry. Currently, we don&apos;t support small devices. Soon we are releasing mobile versions.</p>
            </section>
        </div>
    )
}

export default SmallDevicesNotSupported;