import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"

import defaultStyles from "./header.module.css"

const Header = ({ siteTitle, slug }) => {
  const classNames = [defaultStyles.root, "spectrum--light"]
  return (
    <header className={classNames.join(" ")}>
        <Navigation slug={slug} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
