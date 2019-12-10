import PropTypes from "prop-types"
import React from "react"

import Home from "./home"

import defaultStyles from "./header.module.css"

const Header = ({ siteTitle }) => {
  return (
    <header className={defaultStyles.root}>
      <Home to="/" />
      <div>Tabs Content</div>
      <div>{siteTitle}</div>
      <div>Search</div>
      <div>Waffle menu</div>
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
