import React from "react"

import defaultStyles from "./toggleCollapse.module.css"
import Collapse from "@spectrum-css/icon/combined/ChevronUpSmall.svg"
import Expand from "@spectrum-css/icon/combined/ChevronRightSmall.svg"

const ToggleCollapse = props => {
  const { depth, clickAction } = props

  const rootClassName = defaultStyles[`rootLevel${depth}`]

  if (depth < 1) {
    return (
      <button onClick={clickAction} className={defaultStyles.all}>
        Collapse
      </button>
    )
  }

  return (
    <button className={rootClassName} onClick={clickAction}>
      <Collapse className="spectrum-Icon spectrum-UIIcon-ChevronUpSmall" />
    </button>
  )
}

export default ToggleCollapse
