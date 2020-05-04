import React, { useContext } from "react"

import defaultStyles from "./toggleCollapse.module.css"
import Collapse from "@spectrum-css/icon/combined/ChevronUpSmall.svg"
import Expand from "@spectrum-css/icon/combined/ChevronRightSmall.svg"

import { TreeNavigationContext } from "./treeNavigation"

const ToggleCollapse = props => {
  const { depth, clickAction, open = false } = props
  const { expandAll, collapseAll, fullyExpanded } = useContext(
    TreeNavigationContext
  )

  const rootClassName = defaultStyles[`rootLevel${depth}`]

  if (depth < 1) {
    const text = fullyExpanded ? "Collapse" : "Expand"
    const clickOverride = fullyExpanded ? collapseAll : expandAll
    return (
      <button onClick={clickOverride} className={defaultStyles.all}>
        {text}
      </button>
    )
  }

  const icon = open ? (
    <Collapse className="spectrum-Icon spectrum-UIIcon-ChevronUpSmall" />
  ) : (
    <Expand className="spectrum-Icon spectrum-UIIcon-ChevronRightSmall" />
  )

  return (
    <button className={rootClassName} onClick={clickAction}>
      {icon}
    </button>
  )
}

export default ToggleCollapse
