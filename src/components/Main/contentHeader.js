import React from "react"

import "@spectrum-css/buttongroup"

import defaultStyles from "./contentHeader.module.css"
import { Link } from "gatsby"

import Edit from "./icons/edit.svg"
import Bug from "./icons/bug.svg"

const ContentHeader = props => {
  const { children } = props

  const classes = {
    header: `${defaultStyles.header} spectrum-Heading1 spectrum-Heading--XXL`,
    actions: `${defaultStyles.actions} spectrum-ButtonGroup`,
    actionButton: "spectrum-ActionButton spectrum-ActionButton--quiet",
    actionLabel: "spectrum-ActionButton-label",
    icon: "spectrum-Icon spectrum-Icon--sizeS",
  }

  return (
    <header className={defaultStyles.root}>
      <section className={defaultStyles.pageIntro}>
        <h1 className={classes.header}>{children}</h1>
        <div className={classes.actions}>
          <div>
            <Link className={classes.actionButton} to="/">
              <Edit className={classes.icon} />
              <span className={classes.actionLabel}>Edit on GitHub</span>
            </Link>
          </div>
          <div>
            <Link className={classes.actionButton} to="/">
              <Bug className={classes.icon} />
              <span className={classes.actionLabel}>Report an Issue</span>
            </Link>
          </div>
        </div>
      </section>
    </header>
  )
}

export default ContentHeader
