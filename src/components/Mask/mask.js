import React from "react"

import defaultStyles from "./mask.module.css"

import { useAppContext } from "../App"

const Mask = () => {
  const [appState, api] = useAppContext()

  const { activePanel } = appState

  const { closePanel } = api

  const classes = activePanel ? defaultStyles.active : defaultStyles.root

  return <button onClick={closePanel} className={classes} />
}

export default Mask
