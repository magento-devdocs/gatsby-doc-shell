import React from "react"

import defaultStyles from "./branch.module.css"
import TreeNode from "./treeNode"

const Branch = props => {
  const { pages, depth, parent } = props

  const rootClassName = defaultStyles[`rootLevel${depth}`]

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
      <button>+</button>
      <ul className={rootClassName}>{nodes}</ul>
    </>
  )
}

export default Branch
