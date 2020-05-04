import React from "react"

import defaultStyles from "./branch.module.css"
import TreeNode from "./treeNode"
import ToggleCollapse from "./toggleCollapse"

const Branch = props => {
  const { pages, depth, parent } = props

  const rootClassName = defaultStyles[`rootLevel${depth}`]

  const listClassName = `${rootClassName} spectrum-SideNav spectrum-SideNav--multiLevel`

  const nodes = pages.map(page => {
    const { title, url, pages: childPages } = page
    return (
      <TreeNode
        id={title}
        title={title}
        depth={depth}
        url={url}
        childPages={childPages}
      />
    )
  })

  return (
    <>
      <ToggleCollapse depth={depth} />
      <ul className={listClassName}>{nodes}</ul>
    </>
  )
}

export default Branch
