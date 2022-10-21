import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: process.env.SANITY_API_TOKEN, // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
});

export default client;