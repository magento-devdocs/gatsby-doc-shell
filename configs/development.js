const path = require("path")

const projectRootDir = path.dirname(__dirname)

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${projectRootDir}/src/external`,
      },
    },
    {
      resolve: `devdocs-link-local-project`,
      options: {
        externalDir: `${projectRootDir}/src/external`,
        localProjectDir: process.env.LOCAL_PROJECT_DIRECTORY,
      },
    },
  ],
}
