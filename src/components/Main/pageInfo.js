import React from "react"

import defaultStyles from "./pageInfo.module.css"

const PageInfo = props => {
  const { children } = props

  return <div className={defaultStyles.root}>{children}</div>
}

export default PageInfo
