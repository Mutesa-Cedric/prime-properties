import Head from 'next/head';
import React from 'react'
import { AppData } from '../../@types/types';
import PropertyCard from '../../components/properties/PropertyCard';
import PropertySearch from '../../components/properties/PropertySearch';
import sanityClient from "../../lib/sanity";
import { propertiesQuery } from '../../utils/queries';

export async function getStaticProps() {
  const properties = await sanityClient.fetch(propertiesQuery);
  return {
    props: {
      properties
    }
  }
}

const Index = ({ properties }: AppData) => {
  return (
    <div className="w-full lg:px-60">
      <Head>
        <title>Prime Properties | Properties</title>
        <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
      </Head>
      <main className="flex flex-col w-full space-y-6 py-16">
        <PropertySearch />
        <div className="grid grid-cols-1 py-8 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {
            properties.map((property, i) => (
              <PropertyCard {...property} key={i} />
            ))
          }
        </div>
      </main>
    </div>
  )
}

Index.innerPage = true;
Index.title = "Property Listing";

export default Index