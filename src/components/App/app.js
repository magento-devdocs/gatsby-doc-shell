import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { DataProvider } from "../Data"
import Footer from "../Footer"
import GlobalSpectrumProvider from "../GlobalSpectrumProvider"
import Header from "../Header"

import defaultStyles from "./app.module.css"
import TreeNavigation from "../TreeNavigation"
import TableOfContents from "../TableOfContents"

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

  const { currentPageContents, title, slug, children } = props

  const siteTitle = title || data.site.siteMetadata.title

  return (
    <DataProvider>
      <GlobalSpectrumProvider size="medium" theme="light">
        <div className={defaultStyles.root}>
          <Header siteTitle={siteTitle} slug={slug} />
          <div className={defaultStyles.content}>
            <section>
              <TreeNavigation slug={slug} />
            </section>
            <main>{children}</main>
            <section>
              <TableOfContents data={currentPageContents} />
            </section>
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
