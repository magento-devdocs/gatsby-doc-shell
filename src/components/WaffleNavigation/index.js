import React, { useCallback, useEffect, useRef, useState } from "react"

import { useData } from "../Data"

import "@spectrum-css/menu"
import "@spectrum-css/popover"
import "@spectrum-css/link"
import classes from "./waffleNavigation.module.css"

import Apps from "@adobe/spectrum-css-workflow-icons/dist/24/Apps.svg"

const WaffleNavigation = props => {
  const { externalPages } = useData()

  const [open, setOpen] = useState(false)
  const handleToggle = useCallback(() => {
    setOpen(prevState => !prevState)
  }, [])

  // Logic for closing modal on external click.
  const actionButton = useRef(null)
  const handleClick = useCallback(e => {
    if (actionButton.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return () => {
      document.removeEventListener("mousedown", handleClick, false)
    }
  }, [handleClick])

  const categories = externalPages.nodes.map(category => {
    const sites = category.sites.map(site => {
      return (
        <a
          className="spectrum-Menu-item"
          href={site.link}
          tabIndex="0"
          key={site.title}
        >
          <span className="spectrum-Menu-itemLabel">{site.title}</span>
        </a>
      )
    })

    return (
      <ul className={`spectrum-Menu ${classes.menu}`} key={category.name}>
        <li role="presentation">
          <span
            className="spectrum-Menu-sectionHeading"
            id={`menu-heading-category-${category.name}`}
            aria-hidden="true"
          >
            {category.name}
          </span>
          <ul
            className="spectrum-Menu"
            role="group"
            aria-labelledby={`menu-heading-category-${category.name}`}
          >
            {sites}
          </ul>
        </li>
      </ul>
    )
  })

  const popoverClass = open
    ? `${classes.popover} spectrum-Popover is-open`
    : `${classes.popover} spectrum-Popover`

  const dropdown = open ? (
    <div className={popoverClass}>{categories}</div>
  ) : null

  return (
    <div className={classes.root} ref={actionButton}>
      <button
        className="spectrum-ActionButton spectrum-ActionButton--quiet"
        onClick={handleToggle}
      >
        <Apps className="spectrum-Icon" />
      </button>
      {dropdown}
    </div>
  )
}

export default WaffleNavigation
