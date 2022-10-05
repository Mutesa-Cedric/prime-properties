import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    // token: 'null', // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
});

export default client;