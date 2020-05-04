import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import App from "../../components/App"
import SEO from "../../components/seo"

import Callout from "../../doc-components/Callout"
import Variable from "../../doc-components/Variable"

import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableHeaderCell,
} from "../../components/Table"

import "../global.css"

const HeaderOneOverride = ({ children }) => {
  return null
}

const componentsMapping = {
  h1: HeaderOneOverride,
  table: Table,
  thead: TableHead,
  tr: TableRow,
  tbody: TableBody,
  td: TableCell,
  th: TableHeaderCell,
  Callout: Callout,
  Variable: Variable,
}

const MdxLayout = props => {
  const { data } = props
  const { mdx } = data
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <App
        title={mdx.frontmatter.title}
        slug={mdx.fields.slug}
        currentPageContents={mdx.tableOfContents.items}
        headings={mdx.headings}
      >
        <MDXProvider components={componentsMapping}>
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
      tableOfContents(maxDepth: 3)
      headings(depth: h1) {
        value
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
