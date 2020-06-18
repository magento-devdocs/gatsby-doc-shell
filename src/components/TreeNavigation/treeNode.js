import React from "react"

import { Link } from "gatsby"

import Branch from "./branch"

import defaultStyles from "./treeNode.module.css"

const TreeNode = props => {
  const { depth, title, url, childPages, currentPage } = props

  const rootClassName = defaultStyles[`rootLevel${depth}`]

  const selectedClass = url === currentPage ? "is-selected" : ""

  const classes = {
    list: `${selectedClass} ${rootClassName} spectrum-SideNav-item`,
    link: `${defaultStyles.link} spectrum-SideNav-itemLink`,
  }

  const subTree = childPages ? (
    <Branch
      pages={childPages}
      depth={depth + 1}
      parent={url}
      currentPage={currentPage}
    />
  ) : null

  const label = url ? (
    <Link className={classes.link} to={url}>
      {title}
    </Link>
  ) : (
    <span className={classes.link}>{title}</span>
  )

  return (
    <li className={classes.list}>
      {label}
      {subTree}
    </li>
  )
}

export default TreeNode
