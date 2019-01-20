module.exports = {
  siteMetadata: {
    title: `Geff the Giraffe`,
    description: `Geff and ... goes ....`,
    author: `Andreas Brox-Fadum.`,
    dev: `Ola Vea made another OlaBook`,
    pageNav: [{ label: 'Back', path: '/' }],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

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
        icon: `src/images/geff-icon.jpg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
  ],
}

// make 'posts' into 'images' Scott_7
// or deleted 'posts'  Scott_7
// not 'posts' but 'images' Scott_7

// this (optional) plugin enables Progressive Web App + Offline functionality
// To learn more, visit: https://gatsby.app/offline
// 'gatsby-plugin-offline',
