import React from "react"

import WaffleNavigation from "../WaffleNavigation"
import Search from '../Search';

import defaultStyles from "./actions.module.css"

const Actions = props => {
  return (
    <div className={defaultStyles.root}>
      <WaffleNavigation />
    </div>
  )
}

export default Actions
