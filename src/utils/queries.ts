export const propertiesQuery = `*[_type=="property"]{
    ...,
    "slug": slug.current,
    "bannerImage":bannerImage.asset->url
}`;

export const blogsQuery = `*[_type=="blog"]{
  ...,
  "banner":banner.asset->url,
  postedBy->,
  category->,
  "slug":slug.current
}`;

export const agentsQuery = `*[_type=="agent"]{
  ...,
  "slug":slug.current,
  
}`;

export const agenciesQuery = `*[_type=="agency"]{
  name,
  description,
  "image":logo.asset->url,
  socialMedia
}`;

export const servicesQuery = `*[_type=="service"]{
  ...,
  "banner":banner.asset->url,
  "slug":slug.current
}`;

export const plansQuery = `*[_type=="plan"]`;


export const testimonialsQuery = `*[_type=="testimonial"]{
  ...,
  "profileImage":profileImage.asset->url
}`;

export const faqsQuery = `*[_type=="faq"]{
  question,
  answer
}`;

export const citiesQuery = `*[_type=="city"] | order(_createdAt asc)`;

export const favouritePropertiesQuery = (userId: string): string => {
  return `
      *[_type=="property"&& '${userId}' in likedBy[]]{
        ...,
        "slug": slug.current,
        "bannerImage":bannerImage.asset->url
    }
  `
}