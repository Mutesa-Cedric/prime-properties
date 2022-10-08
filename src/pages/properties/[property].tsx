import React from 'react'
import { useRouter } from 'next/router';
import sanityClient from "../../lib/sanity";
import { Property } from '../../@types/types';

export async function getStaticPaths() {
  const properties = await sanityClient.fetch(`*[_type=="property"]{
    slug
  }`);
  const paths = properties.map((property: any) => ({
    params: { property: property.slug.current.slice(11) }
  }));
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params }: any) {
  const property = await sanityClient.fetch(`*[_type=="property" && slug.current == "properties/${params.property}"][0]`);
  return {
    props: {
      property
    }
  }
}

function PropertyDetails({
  name, price, bannerImage, address, features, status, slug
}: Property) {
  const router = useRouter();
  const { property } = router.query;
  return (
    <div>
      details for {name}
    </div>
  )
}

export default PropertyDetails;
