
require("dotenv").config({
  path: `.env`,
})

module.exports = {

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