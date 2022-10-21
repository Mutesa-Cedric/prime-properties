import React, { useEffect, useState } from "react";
import { Property } from "../../@types/types";
import type { GetStaticProps } from "next";
import sanityClient from "../../lib/sanity";
import { propertiesQuery } from "../../utils/queries";
import Head from "next/head";
import PropertyCard from "../../components/properties/PropertyCard";
import useAuth from "../../hooks/useAuth";
import RequireLogin from "../../components/ui/RequireLogin";
import Link from "next/link";
import Certificates from "../../components/about/Certificates";

export const getStaticProps: GetStaticProps = async () => {
    const properties = await sanityClient.fetch(propertiesQuery);
    return {
        props: {
            properties
        }
    }
}

interface Props {
    properties: Property[],
}

const FavouriteProperties = ({ properties }: Props) => {
    const { user } = useAuth();
    const [favouriteProperties, setFavouriteProperties] = useState<Property[] | null>();

    const getFavouriteProperties = () => {
        return properties.filter(property => property.likedBy?.includes(user!.uid));
    }

    useEffect(() => {
        if (user) {
            setFavouriteProperties(getFavouriteProperties());
        } else {
            setFavouriteProperties(null);
        }
    }, []);
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties |Favourite Properties</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="flex  xl:px-60 lg:px-40 md:px-12 flex-col w-full space-y-6 py-16">
                {
                    user ?
                        <>{
                            (favouriteProperties && favouriteProperties.length > 0) ?
                                <div className="grid grid-cols-2 py-8 lg:grid-cols-3 gap-6 w-full">
                                    {
                                        favouriteProperties!.map((property, i) => (
                                            <PropertyCard {...property} key={i} />
                                        ))
                                    }
                                </div> :
                                <div className="w-full py-16 flex flex-col items-center space-y-5">
                                    <h1 className="text-xl text-heading-1" >You have not liked any property!</h1>
                                    <Link href='/properties'>
                                        <button className="text-white bg-primary-light py-3 px-6 rounded">
                                            explore properties
                                        </button>
                                    </Link>
                                </div>
                        }
                        </>
                        :
                        <RequireLogin />
                }
            </main>
            <Certificates />
        </div>
    )
}

FavouriteProperties.innerPage = true;
FavouriteProperties.title = "Your Favourite Properties"

export default FavouriteProperties;