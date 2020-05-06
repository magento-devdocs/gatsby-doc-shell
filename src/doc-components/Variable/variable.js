import React from "react"

import { useData } from "../../components/Data"

const Variable = props => {
  const { name, children } = props

  const { variables } = useData()

  const { nodes } = variables

  const data = nodes.reduce((final, current) => {
    const varArray = current.variables

    let merged = {}

    varArray.forEach(entry => {
      merged[entry.name] = entry.value
    })

    return Object.assign(final, merged)
  }, {})

  const value = data[name] || data[children] || name || children

  return <span>{value}</span>
}
export default Variable
