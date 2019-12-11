import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Provider from "../Provider"
import defaultStyles from "./app.module.css"

import { PageGroupsProvider } from "../PageGroups"

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
    <PageGroupsProvider>
      <Provider size="medium" theme="light">
        <div className={defaultStyles.root}>
          <Header siteTitle={siteTitle} slug={slug} />
          <div className={defaultStyles.content}>
            <section>Left sidebar</section>
            <main>{children}</main>
            <section>Right sidebar</section>
          </div>
          <footer>Footer content</footer>
        </div>
      </Provider>
    </PageGroupsProvider>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default App
