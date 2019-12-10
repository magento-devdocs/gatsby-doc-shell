import React from "react"
import PropTypes from "prop-types"

// Global imports for spectrum
import "@spectrum-css/page/dist/index-vars.css"
import "@spectrum-css/typography/dist/index-vars.css"
import "@spectrum-css/icon/dist/index-vars.css"

// Sizing vars
import "@spectrum-css/vars/dist/spectrum-global.css"
import "@spectrum-css/vars/dist/spectrum-medium.css"
import "@spectrum-css/vars/dist/spectrum-large.css"

// Theme vars
import "@spectrum-css/vars/dist/spectrum-lightest.css"
import "@spectrum-css/vars/dist/spectrum-light.css"
import "@spectrum-css/vars/dist/spectrum-dark.css"
import "@spectrum-css/vars/dist/spectrum-darkest.css"

const Provider = props => {
  const { children, theme, size } = props
  const className = `spectrum spectrum--${size} spectrum--${theme}`
  return <div className={className}>{children}</div>
}

Provider.propTypes = {
  theme: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Provider.defaultProps = {
  size: "medium",
  theme: "light",
}

export default Provider
