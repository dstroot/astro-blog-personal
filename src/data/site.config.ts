interface SiteConfig {
  author: string
  title: string
  description: string
  lang: string
  ogLocale: string
  shareMessage: string
  paginationSize: number
}

export const siteConfig: SiteConfig = {
  author: 'Dan Stroot', // Site author
  title: 'Dan Stroot · Blog', // Site title.
  description: 'I love building things', // Description to display in the meta tags
  lang: 'en-US',
  ogLocale: 'en_US',
  shareMessage: 'Share this post', // Message to share a post on social media
  paginationSize: 6, // Number of posts per page
  /**
   * optional - Webmanifest
   **/
  // short_name: 'App',icon: 'src/images/your-icon.svg',
  // start_url: '/',
  // theme_color: '#3367D6',
  // background_color: '#3367D6',
  // display: 'standalone',
}
