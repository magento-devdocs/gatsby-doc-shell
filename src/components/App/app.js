import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"

import defaultStyles from "./app.module.css"

const App = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title, children } = props

  const siteTitle = title || data.site.siteMetadata.title

  return (
    <div className={defaultStyles.root}>
      <Header siteTitle={siteTitle} />
      <div className={defaultStyles.content}>
        <section>Left sidebar</section>
        <main>{children}</main>
        <section>Right sidebar</section>
      </div>
      <footer>Footer content</footer>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default App
