import React from "react"

import TabNavigation from "../TabNavigation"

import Logo from "./logo"
import Actions from "./actions"

import defaultStyles from "./navigation.module.css"

const Navigation = props => {
  const { slug } = props
  return (
    <nav className={defaultStyles.root}>
      <div className={defaultStyles.container}>
        <Logo to={"/"} title={"Adobe"} />
        <TabNavigation slug={slug} />
        <Actions />
      </div>
    </nav>
  )
}

export default Navigation
