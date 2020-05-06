
const path = require('path');

const projectRootDir = path.dirname(__dirname);

module.exports = {
  pathPrefix: `/gatsby-doc-site`,
  siteMetadata: {
    title: `DevDocs | Prototype Doc Site`,
    description: `A modern documentation site built on top of Gatsby.`,
    author: `jcalcaben`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${projectRootDir}/src/images`,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "header-anchor",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-check-links`,
            options: {
              verbose: false,
            },
          },
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              viewport: {
                width: 800,
                height: 800,
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-grid-tables`,
          },
        ],
        plugins: ["gatsby-remark-images", "gatsby-remark-grid-tables"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${projectRootDir}/src/markdown-pages`,
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
        path: `${projectRootDir}/src/data`,
      },
    },
    `gatsby-transformer-gitinfo`,
  ],
}
