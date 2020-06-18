import React from "react"

import "@spectrum-css/buttongroup"

import path from "path"

import { useData } from "../Data"
import defaultStyles from "./contentHeader.module.css"

import Edit from "./icons/edit.svg"
import Bug from "./icons/bug.svg"

const ContentHeader = props => {
  const { children, editPath } = props

  const { siteMetadata } = useData().site

  const editUrl = editPath
    ? path.join(siteMetadata.editPageBaseUrl, editPath)
    : null

  const reportUrl = path.join(siteMetadata.githubRepository, "issues/new")

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
            <a className={classes.actionButton} href={editUrl}>
              <Edit className={classes.icon} />
              <span className={classes.actionLabel}>Edit on GitHub</span>
            </a>
          </div>
          <div>
            <a className={classes.actionButton} href={reportUrl}>
              <Bug className={classes.icon} />
              <span className={classes.actionLabel}>Report an Issue</span>
            </a>
          </div>
        </div>
      </section>
    </header>
  )
}

export default ContentHeader
