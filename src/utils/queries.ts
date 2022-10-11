export const propertiesQuery = `*[_type=="property"]{
    ...,
    "slug": slug.current,
    "bannerImage":bannerImage.asset->url
  }`