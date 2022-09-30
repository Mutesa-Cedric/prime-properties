import React from 'react'
import { filterProperties } from '../../constants/filterProperties'
import SearchFilterProperty from '../ui/SearchFilterProperty'

function HomePropertySearch() {
    return (
        <div className='flex flex-col w-3/5 bg-white space-y-6 p-6 rounded-sm'>
            <div className='flex flex-col space-y-1'>
                <p className='font-semibold text-[20px]'>Search Your Properties</p>
                <div className='h-[3px] bg-primary-light w-12 rounded-2xl'></div>
            </div>
            <div className={'flex w-full space-x-2'}>
                <div className='flex space-x-3 items-center w-full justify-between' >
                    {
                        filterProperties.map((property, i) => (
                            <SearchFilterProperty key={i} {...property} />
                        ))
                    }
                </div>
                <button className='text-white bg-primary-light px-10 py-[9px] text-sm self-end'>
                    Search
                </button>
            </div>

        </div>
    )
}

export default HomePropertySearch
