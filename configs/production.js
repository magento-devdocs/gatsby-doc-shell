const {
  markdownQuery,
  flattenMarkdownResults,
} = require("../src/utils/algolia")

require("dotenv").config({
  path: `.env`,
})

const {
  GATSBY_ALGOLIA_APP_ID: algoliaAppId,
  GATSBY_ALGOLIA_SEARCH_KEY: algoliaSearchKey,
  GATSBY_ALGOLIA_ADMIN_KEY: algoliaAdminKey,
  GATSBY_ALGOLIA_SITE_INDEX: algoliaIndex,
} = process.env

let productionConfig = {
  plugins: [
    {
      resolve: "gatsby-source-git",
      options: {
        name: "production",
        remote: process.env.REMOTE_REPOSITORY,
        branch: process.env.REMOTE_REPOSITORY_BRANCH,
        patterns: "src/**",
      },
    },
  ],
}

// Only index content if the environment contains the admin key and an index
if (algoliaAdminKey && algoliaIndex) {
  const queries = [
    {
      query: markdownQuery,
      transformer: ({ data }) => flattenMarkdownResults(data.markdown.edges),
      indexName: algoliaIndex,
      settings: {},
    },
  ]

  productionConfig.plugins = [
    ...productionConfig.plugins,
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: algoliaAppId,
        apiKey: algoliaAdminKey,
        queries,
        chunkSize: 10000,
      },
    },
  ]
}

module.exports = productionConfig
