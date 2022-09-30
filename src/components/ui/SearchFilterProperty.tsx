import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { FilterProperty } from '../../@types/types'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const SearchFilterProperty: React.FC<FilterProperty> = ({ title, options }) => {
    const [selected, setSelected] = useState(options![1])
    return (
        <Listbox value={selected}>
            {({ open }) => (
                <div className="flex flex-col w-full">
                    <Listbox.Label className="block text-sm text-[#333333]">{title}</Listbox.Label>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default border border-[#D3DEE8] bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary-light focus:outline-none focus:ring-1 focus:ring-primary-light sm:text-sm">
                            <span className="block truncate">{selected.label}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-[#D3DEE8]" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {options!.map((option, i) => (
                                    <Listbox.Option
                                        key={i}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-primary-light' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={option.value}
                                        onClick={() => setSelected(option)}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {option.label}
                                                </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </div>
            )}
        </Listbox>
    )
}


export default SearchFilterProperty
