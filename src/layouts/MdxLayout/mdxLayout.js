import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import App from "../../components/App"
import SEO from "../../components/seo"

import Callout from "../../doc-components/Callout"
import GlobalVariable from "../../doc-components/GlobalVariable"

import "../global.css"

const shortCodes = { Callout, GlobalVariable }

const MdxLayout = props => {
  const { data } = props
  const { mdx } = data
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <App title={mdx.frontmatter.title} slug={mdx.fields.slug}>
        <MDXProvider components={shortCodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
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
      fields {
        slug
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
