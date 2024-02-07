const title = 'Spotify Now Playing with Next.js';
const description = 'A spotify API using Next.js';

const SEO = {
    title,
    description,
    // canonical: 'https://theodorusclarence.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://theodorusclarence.com',
        title,
        description,
        images: [
            {
                url: 'https://theodorusclarence.com/favicon/ms-icon-144x144.png',
                alt: title,
                width: 144,
                height: 144,
            },
        ],
    },

    onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 1,
    },
};

export default SEO;
