import React from "react"

import pageGroup from "../../data/pageGroups.yml"

import { usePageGroups } from "../PageGroups"

import { navigate } from "gatsby"

import "@spectrum-css/tabs"

const classes = {
  list:
    "spectrum-Tabs spectrum-Tabs--horizontal spectrum-Tabs--compact spectrum-Tabs--quiet",
  listItem: "spectrum-Tabs-item",
  selected: "spectrum-Tabs-item is-selected",
  label: "spectrum-Tabs-itemLabel",
  indicator: "spectrum-Tabs-selectionIndicator",
}

const TabNavigation = props => {
  const { slug } = props

  const pageGroups = usePageGroups()

  let currentGroup = slug

  pageGroups.forEach(group => {
    const found = group.pages.find(page => {
      return page.url === slug
    })

    if (found) {
      currentGroup = group.name
    }
  })

  const tabs = pageGroup.groups.map(tab => {
    const currentlySelected = currentGroup === tab.name
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
      <div
        key={tab.name}
        className={tabClass}
        tabIndex="0"
        onClick={clickAction}
        onKeyPress={clickAction}
        role="button"
      >
        <label className={classes.label}>{tab.title}</label>
        {indicator}
      </div>
    )
  })

  return <div className={classes.list}>{tabs}</div>
}

export default TabNavigation
