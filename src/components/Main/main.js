import React from "react"

import defaultStyles from "./main.module.css"
import TableOfContents from "../TableOfContents"
import TreeNavigation from "../TreeNavigation"

import getPageGroup from "../util/getPageGroup"
import { useData } from "../Data"

import Content from "./content"

const Main = props => {
  const { slug, data, editPath, title, children } = props
  const { pageGroups } = useData()

  const group = getPageGroup(slug, pageGroups)
  const groupTitle = group ? group.title : null
  return (
    <div className={defaultStyles.root}>
      <div className={defaultStyles.container}>
        <aside className={defaultStyles.leftSidebar}>
          <div className={defaultStyles.leftSidebarWrapper}>
            <h4 className={defaultStyles.leftSidebarTitle}>{groupTitle}</h4>
            <TreeNavigation slug={slug} />
          </div>
        </aside>
        <Content title={title} data={data} editPath={editPath}>
          {children}
        </Content>
      </div>
    </div>
  )
}

export default Main
