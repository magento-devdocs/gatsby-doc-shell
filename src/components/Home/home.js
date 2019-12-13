import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import defaultClasses from "./home.module.css"

const Home = props => {
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
    <div className={defaultClasses.root}>
      <Link className={defaultClasses.link} to={to}>
        <Img
          className={defaultClasses.image}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </Link>
      <div className={defaultClasses.siteName}>{title}</div>
    </div>
  )
}

export default Home
