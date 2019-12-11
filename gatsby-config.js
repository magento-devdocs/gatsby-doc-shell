module.exports = {
  pathPrefix: `/gatsby-doc-site`,
  siteMetadata: {
    title: `Gatsby Documentation Site`,
    description: `A modern documentation site built on top of Gatsby.`,
    author: `jcalcaben`,
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
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
       resolve: `gatsby-plugin-mdx`,
       options: {
         extensions: [`.mdx`, `.md`],
         gatsbyRemarkPlugins: [
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 590,
             },
           },
         ],
         plugins: ['gatsby-remark-images'],
       },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/data`,
      },
    }
  ],
}
