import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import App from "../../components/App"
import SEO from "../../components/seo"

import "../global.css"

const MdxLayout = props => {
  const { data } = props
  const { mdx } = data
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <App title={mdx.frontmatter.title}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </App>
    </>
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

MdxLayout.propTypes = {
  props: PropTypes.shape({
    data: PropTypes.shape({
      mdx: PropTypes.node.isRequired,
    }),
  }),
}

export default MdxLayout
