const toString = require("mdast-util-to-string")

const flattenMarkdownResults = array =>
  array.map(({ node: { frontmatter, fields, mdxAST, ...rest } }) => {
    return {
      ...frontmatter,
      ...fields,
      ...rest,
      content: toString(mdxAST),
    }
  })
const MARKDOWN_QUERY = `
{
    markdown: allMdx {
      edges {
        node {
          id
          mdxAST
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
}
`

module.exports = {
  flattenMarkdownResults: flattenMarkdownResults,
  markdownQuery: MARKDOWN_QUERY,
}
