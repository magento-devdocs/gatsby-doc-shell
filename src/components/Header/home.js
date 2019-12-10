import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import defaultClasses from "./home.module.css"

const Home = props => {
  const { to } = props

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "brand.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <Link className={defaultClasses.root} to={to}>
      <img
        src={data.file.publicURL}
        className={defaultClasses.image}
        alt="Home"
      />
    </Link>
  )
}

export default Home
