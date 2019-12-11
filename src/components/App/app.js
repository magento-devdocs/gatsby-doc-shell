import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import GlobalSpectrumProvider from "../GlobalSpectrumProvider"
import Footer from "../Footer"
import defaultStyles from "./app.module.css"

import { DataProvider } from "../Data"

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

  const { title, slug, children } = props

  const siteTitle = title || data.site.siteMetadata.title

  return (
    <DataProvider>
      <GlobalSpectrumProvider size="medium" theme="light">
        <div className={defaultStyles.root}>
          <Header siteTitle={siteTitle} slug={slug} />
          <div className={defaultStyles.content}>
            <section>Left sidebar</section>
            <main>{children}</main>
            <section>Right sidebar</section>
          </div>
          <Footer />
        </div>
      </GlobalSpectrumProvider>
    </DataProvider>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default App
