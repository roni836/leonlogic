const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://leonlogic.com';

const helper = {
    openGraphData: {
        title: 'Leonlogic',
        description: 'Digital Agency offering unique solutions to create digital presence and increase your sales.',
        siteName: 'Leonlogic',
        type: 'website',
        images: [{ url: `${baseUrl}/assets/images/logo.webp` }],
    },
    twitterData: {
        title: 'Leonlogic',
        description: 'Digital Agency offering unique solutions to create digital presence and increase your sales.',
        site: 'Leonlogic',
        images: [{ url: `${baseUrl}/assets/images/logo.webp` }],
    },
};
export default helper;
