module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    { 

      resolve: 'gatsby-source-sanity',
      
       options: {
      
       projectId: 'qvcf1ria',  
      
       dataset: 'production',
       token: process.env.skbJoIOPjws94y9ARkGo7RLdCOF1xvzfhItJYLkQjtDBGQdEcyREkioldpG2cqZw18CNYiCByhQ5utF7flVXN84UL9n0CZH2KGkeWArDSspIw8AnLp1eIwbjnfck44rpyNIlk1vK2i3rEZTglhCAtjDIok6mZvUpSbZrP5L8ksFpfA3FPzr4,
       }, 
      
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
