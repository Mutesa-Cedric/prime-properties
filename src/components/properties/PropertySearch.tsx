/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { filterProperties } from '../../constants/filterProperties'
import SearchFilterProperty from '../ui/SearchFilterProperty'
import { toast } from "react-toastify";
export default function PropertySearch() {

    const showModal = () => {
        toast.error("This Feature is not available yet", {
            position: "top-center",
            autoClose: 4000,
        });
    }
    return (
        <div className='flex flex-col w-full bg-white space-y-6 sm:p-6 p-2  border rounded'>
            <div className='flex flex-col space-y-1'>
                <p className='font-semibold text-[20px]'>Search Your Properties</p>
                <div className='h-[3px] bg-primary-light w-12 rounded-2xl'></div>
            </div>
            <div className='flex flex-col space-y-3'>
                <div className='grid grid-cols-3 gap-5 mb-2' >
                    {
                        filterProperties.map((property, i) => (
                            <SearchFilterProperty key={i} {...property} />
                        ))
                    }
                </div>
                <button onClick={showModal} className='text-white bg-primary-light px-12 py-[9px] text-sm w-max'>
                    Search
                </button>
            </div>

        </div>
    )
}