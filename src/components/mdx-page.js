import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"

const MdxPage = ({ data: { mdx } }) => {
  return (
    <Layout>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MDXPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

Layout.propTypes = {
  data: PropTypes.node.isRequired,
}

export default MdxPage
