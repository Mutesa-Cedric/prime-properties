import sanityClient from '@sanity/client';

const sanityClient = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    token: 'api-token', // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
});

export default sanityClient;