import React from "react"

import data from "../../data/globalVariables.yml"

const GlobalVariable = props => {
  const { name, children } = props

  const value = data[name] || data[children] || name || children

  return <span>{value}</span>
}

export default GlobalVariable
