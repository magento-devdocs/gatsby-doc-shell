import React from "react"

import { Link } from "gatsby"

import Branch from "./branch"

import defaultStyles from "./treeNode.module.css"

const TreeNode = props => {
  const { depth, title, url, childPages } = props

  const className = defaultStyles[`rootLevel${depth}`]

  const subTree = childPages ? (
    <Branch pages={childPages} depth={depth + 1} parent={url} />
  ) : null

  const label = url ? (
    <Link className={defaultStyles.link} to={url}>
      {title}
    </Link>
  ) : (
    <span className={defaultStyles.text}>{title}</span>
  )

  return (
    <li className={className}>
      {label}
      {subTree}
    </li>
  )
}

export default TreeNode
