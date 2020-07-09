import React from "react"
import PropTypes from "prop-types"

import App from "../../components/App"
import SEO from "../../components/seo"

import "../global.css"

const FullPageLayout = props => {
  const { title, children, slug } = props

  return (
    <>
      <SEO title={title} />
      <App title={title} slug={slug} layout="full">
        {children}
      </App>
    </>
  )
}

FullPageLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  slug: PropTypes.string.isRequired,
}

export default FullPageLayout
