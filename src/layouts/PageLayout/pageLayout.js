import React from "react"
import PropTypes from "prop-types"

import App from "../../components/App"
import SEO from "../../components/seo"

import "../global.css"

const PageLayout = props => {
  const { title, children } = props

  return (
    <>
      <SEO title={title} />
      <App title={title}>{children}</App>
    </>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default PageLayout
