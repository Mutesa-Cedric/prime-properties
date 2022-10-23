/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from "react";
import { Feature, Property } from "../../@types/types";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import sanityClient from "../../lib/sanity";

interface FeatureProps {
    i: number;
    feature: Feature;
}

export const PropertyFeature = ({ feature: { name, value, icon }, i }: FeatureProps) => {
    return (
        <div className={i !== 2 ? "flex space-x-1 items-center border-r-2 pr-2" : "flex space-x-1 items-center"}>
            <Image src={`/icons/${icon}.svg`} width={20} height={20} />
            <p className="text-sm text-gray-primary/75">{value}</p>
            <p className="text-sm text-gray-primary/75">{name}</p>
        </div>
    )
}

const PropertyCard = ({
    name, price, bannerImage, address, features, status, slug, likedBy, _id
}: Property) => {

    const { user } = useAuth();
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const updateLikes = async () => {
        // update sanity
        await sanityClient.patch(_id).set({
            likedBy: isLiked ? likedBy!.filter((id: string) => id !== user!.uid) : [...likedBy || [], user!.uid]
        }).commit()
            .then(() => {
                setIsLiked(!isLiked);
                toast.success("Your favourites have been updated");
            }).catch((err) => {
                toast.error("Something went wrong");
            })
        // update state
    }

    const toggleIsLiked = () => {
        user ? updateLikes() : toast.error("You must be logged in to add this property to favourites!");
    }

    useEffect(() => {
        if (user) {
            likedBy?.includes(user.uid) ? setIsLiked(true) : setIsLiked(false);
        } else {
            setIsLiked(false)
        }
    }, [user])
    return (
        <div className="flex flex-col space-y-3 shadow-md border border-white hover:shadow-xl  rounded xl:w-[21.4vw] xl: h-[50vh]">
            <div className="relative w-full h-48">
                <Link href={`/${slug}`}>
                    <Image src={bannerImage} layout="fill" objectFit="cover" className="cursor-pointer" />
                </Link>
                <div className="absolute top-2 left-0 w-full z-20 py-2 flex items-center justify-between px-4">
                    <div className="bg-white px-2 space-x-2 flex items-center py-1 rounded-[1px]">
                        {
                            status === ("sold" || "rented") ? (
                                <div className="h-3 w-3 rounded-full bg-[#F21515]"> </div>
                            ) : (
                                <div className="h-3 w-3 rounded-full bg-[#15F26E]"></div>
                            )
                        }
                        <p className="text-sm text-gray-primary/75">
                            {status === "forSale" && 'For Sale'}
                            {status === "forRent" && 'For Rent'}
                            {status === "sold" && 'Sold'}
                            {status === "rented" && 'Rented'}
                        </p>
                    </div>
                    <div className="flex p-1 items-center justify-center bg-white rounded-full cursor-pointer" onClick={toggleIsLiked}>
                        {
                            !isLiked ?
                                <Image src={'/icons/heart_icon.svg'} width={20} height={20} />
                                :
                                <Image src={'/icons/heart_icon_filled.svg'} width={20} height={20} />
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-2 p-2">
                <Link href={`/${slug}`}>
                    <h2 className="cursor-pointer font-medium text-xl truncate">{name}</h2>
                </Link>
                <div className="flex items-center space-x-2">
                    <Image src='/icons/address_icon.svg' height={20} width={20} />
                    <p className="text-sm text-gray-primary/75">address</p>
                </div>
                <div className="w-full justify-between items-center flex py-3 border-b-2 border-t-2">
                    {
                        features.slice(0, 3).map((feature, i) => (
                            <PropertyFeature key={i} feature={feature} i={i} />
                        ))
                    }
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-medium text-lg">${price}</p>
                    <Link href={`/${slug}`}>
                        <button className=" py-2 px-6 hover:text-white hover:bg-primary-light border border-primary-light/75 text-sm transition duration-300">
                            See Details
                        </button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default PropertyCard;