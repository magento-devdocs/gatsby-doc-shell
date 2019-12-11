import PropTypes from "prop-types"
import React from "react"

import Home from "./home"
import Search from "../Search"

import defaultStyles from "./header.module.css"

const Header = ({ siteTitle }) => {
  return (
    <header className={defaultStyles.root}>
      <Home to="/" />
      <div>Tabs Content</div>
      <div>{siteTitle}</div>
      <div>Waffle menu</div>
      <Search />
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
