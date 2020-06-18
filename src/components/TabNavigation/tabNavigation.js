import React from "react"

import { useData } from "../Data"

import { navigate } from "gatsby"

import "@spectrum-css/tabs"

import getPageGroup from "../util/getPageGroup"

import defaultStyles from "./tabNavigation.module.css"

const classes = {
  list: `${defaultStyles.list} spectrum-Tabs desktop-view mobile-view spectrum-Tabs--horizontal`,
  listItem: `${defaultStyles.listItem} spectrum-Tabs-item`,
  selected: `${defaultStyles.listItem} spectrum-Tabs-item is-selected`,
  label: `${defaultStyles.label} spectrum-Tabs-itemLabel`,
  indicator: "spectrum-Tabs-selectionIndicator",
}

const TabNavigation = props => {
  const { slug } = props

  const { pageGroups } = useData()

  let currentGroup = getPageGroup(slug, pageGroups)

  const tabs = pageGroups.nodes
    .sort((a, b) => a.order - b.order)
    .map(tab => {
      const currentlySelected = currentGroup
        ? currentGroup.name === tab.name
        : false
      const tabClass = currentlySelected ? classes.selected : classes.listItem

      const indicator = currentlySelected ? (
        <div className={classes.indicator} style={{ width: "75%" }} />
      ) : (
        undefined
      )

      const clickAction = () => {
        if (!currentlySelected) {
          navigate(tab.url)
        }
      }

      return (
        <li
          key={tab.name}
          className={tabClass}
          tabIndex="0"
          onClick={clickAction}
          onKeyPress={clickAction}
          role="button"
        >
          <span className={classes.label}>{tab.title}</span>
          {indicator}
        </li>
      )
    })

  return (
    <div className={defaultStyles.root}>
      <ul className={classes.list}>{tabs}</ul>
    </div>
  )
}

export default TabNavigation
