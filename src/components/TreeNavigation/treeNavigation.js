import React from "react"
import { Link } from "gatsby"

import { useData } from "../Data"
import getPageGroup from "../util/getPageGroup"

import defaultStyles from "./treeNavigation.module.css"

import "@spectrum-css/sidenav"
import Branch from "./branch"

const classes = {
  list: "spectrum-SideNav spectrum-SideNav--multiLevel",
  subList: "spectrum-SideNav",
  listItem: "spectrum-SideNav-item",
  listItemSelected: "spectrum-SideNav-item is-selected",
  link: "spectrum-SideNav-itemLink",
}

const TreeNavigation = props => {
  const {slug} = props;
  const {pageGroups } = useData();

  const group = getPageGroup(slug, pageGroups);
  
  const buttonText = "Expand"

  if (group) {
    return (
      <div className={defaultStyles.root}>
        <Branch pages={group.pages} depth={0}/>
      </div>
    )

  }

  return null;
}

/*
const TreeNavigation = props => {
  const { slug } = props
  const { pageGroups } = useData()

  const group = getPageGroup(slug, pageGroups)

  if (group) {
    return (
      <nav className={defaultClasses.root}>
        <Branch slug={slug} pageTree={group} rootClass={classes.list} />
      </nav>
    )
  }
  return null
}

const Branch = props => {
  const { slug, pageTree, rootClass } = props

  const listClass = rootClass || classes.subList

  const listItems = pageTree.pages.map(page => {
    const branch = page.pages ? (
      <Branch pageTree={page} slug={slug} />
    ) : (
      undefined
    )

    const listItemClass =
      slug === page.url ? classes.listItemSelected : classes.listItem
    return (
      <li key={page.url} className={listItemClass}>
        <Link className={classes.link} to={page.url}>
          {page.title}
        </Link>
        {branch}
      </li>
    )
  })

  return <ul className={listClass}>{listItems}</ul>
}
*/

export default TreeNavigation
