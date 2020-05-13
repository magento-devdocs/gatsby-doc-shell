import React from "react"

import "@spectrum-css/menu"
import defaultStyles from "./tableOfContents.module.css"

const TableOfContents = props => {
  const { data } = props

  const classes = {
    root: defaultStyles.root,
    list: `${defaultStyles.list} spectrum-Menu is-selectable`,
    item: `${defaultStyles.item} spectrum-Menu-item`,
  }

  const toItem = section => {
    const subSections = section.items ? (
      <ul className="spectrum-SideNav">{section.items.map(toItem)}</ul>
    ) : null

    // TODO: Apply isSelected logic/css "is-selected"
    return (
      <li
        className="spectrum-SideNav-item"
        key={`${section.title}${section.url}`}
      >
        <a
          href={section.url}
          className="spectrum-SideNav-itemLink"
          aria-current="page"
        >
          {section.title}
        </a>
        {subSections}
      </li>
    )
  }

  const contents = data && data[0].items && data[0].items.map(toItem)

  return (
    <nav className={classes.root}>
      <ul className={classes.list}>{contents}</ul>
    </nav>
  )
}

export default TableOfContents
