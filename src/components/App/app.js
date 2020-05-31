import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { DataProvider } from "../Data"
import Footer from "../Footer"
import GlobalSpectrumProvider from "../GlobalSpectrumProvider"
import Header from "../Header"
import Main from "../Main"
import Mask from "../Mask"
import { QuickSearch } from "../Search"

import AppContextProvider from "./appContextProvider"

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

  const {
    currentPageContents,
    title,
    slug,
    editPath,
    children,
    headings,
  } = props

  const siteTitle = title || data.site.siteMetadata.title

  const headerOne = headings ? headings[0] : null
  const pageTitle = headerOne ? headerOne.value : title

  return (
    <AppContextProvider>
      <DataProvider>
        <GlobalSpectrumProvider size="medium" theme="light">
          <div className={defaultStyles.root}>
            <Header siteTitle={siteTitle} slug={slug} />
            <Main
              slug={slug}
              data={currentPageContents}
              title={pageTitle}
              editPath={editPath}
            >
              {children}
            </Main>
            <Footer />
            <Mask />
            <QuickSearch />
          </div>
        </GlobalSpectrumProvider>
      </DataProvider>
    </AppContextProvider>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default App
