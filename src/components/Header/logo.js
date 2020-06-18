import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"
import Img from "gatsby-image"

import defaultStyles from "./logo.module.css"

const Logo = props => {
  const { to, title } = props

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "brand.png" }) {
        childImageSharp {
          fluid(maxWidth: 30) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Link to={to} className={defaultStyles.root}>
      <Img
        className={defaultStyles.image}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <span className={defaultStyles.siteText}>Magento</span>
      <span className={defaultStyles.productText}>DevDocs</span>
    </Link>
  )
}

export default Logo
