let config = {
    title:"Tweet2Pic",
    description:"Convert Tweets to Images",
    url:"https://tweet2pic.vercel.app",
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
    },
  };