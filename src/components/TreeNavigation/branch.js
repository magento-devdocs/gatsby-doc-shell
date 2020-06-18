import React, { useContext } from "react"

import defaultStyles from "./branch.module.css"
import TreeNode from "./treeNode"
import ToggleCollapse from "./toggleCollapse"

import { TreeNavigationContext } from "./treeNavigation"

const Branch = props => {
  const { pages, depth, parent, currentPage } = props

  const { openBranches, expand, collapse } = useContext(TreeNavigationContext)

  const open = openBranches.includes(parent)

  const toggleClickAction = open
    ? () => {
        collapse(parent)
      }
    : () => {
        expand(parent)
      }

  const rootClassName =
    open || parent == null
      ? defaultStyles[`rootLevel${depth}`]
      : defaultStyles.rootHidden

  const listClassName = `${rootClassName} spectrum-SideNav spectrum-SideNav--multiLevel`

  const nodes = pages.map(page => {
    const { title, url, pages: childPages } = page
    return (
      <TreeNode
        key={title}
        title={title}
        depth={depth}
        url={url}
        childPages={childPages}
        currentPage={currentPage}
      />
    )
  })

  return (
    <>
      <ToggleCollapse
        depth={depth}
        open={open}
        clickAction={toggleClickAction}
      />
      <ul className={listClassName}>{nodes}</ul>
    </>
  )
}

export default Branch
