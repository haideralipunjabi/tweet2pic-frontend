let config = {
    title:"Tweet2Pic",
    description:"Convert Tweets to Images",
    url:"https://tweet2pic.js.org",
}
export default {
    title:config.title,
    description:config.description,
    canonical:config.url,
    openGraph: {
      url:  config.url,
      title: config.title,
      description: config.description,
      type: 'website',
      url: config.url,
      site_name: config.title,
      images: [
        {
          url: '/og.png',
          width: 3750,
          height: 1969,
          alt: 'OG Image'
      },
      ]
    },
  };