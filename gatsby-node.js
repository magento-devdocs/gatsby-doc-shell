const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {

    let filepath = createFilePath({ node, getNode });

    const pathSegments = filepath.split(path.sep);

    // Remove markdown from the url path
    if(filepath.startsWith("/markdown")){
      pathSegments.shift();
      pathSegments.shift();
    }

    const slug = path.join('/', ...pathSegments, '/');

    createNodeField({
      name: "slug",
      node,
      value: `${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    const slug = node.fields.slug

    if (!slug.includes("_includes")) {

      createPage({
        path: slug,
        context: { id: node.id },
        component: path.resolve(`./src/layouts/MdxLayout/mdxLayout.js`),
      })
    }
  })
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        DocComponents: path.resolve(__dirname, "src/doc-components/"),
      },
      symlinks: false,
    },
  })
}
