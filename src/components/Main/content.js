import React from "react"

import ContentHeader from "./contentHeader"
import ContentFooter from "./contentFooter"
import PageInfo from "./pageInfo"
import TableOfContents from "../TableOfContents"

import defaultStyles from "./content.module.css"

const Content = props => {
  const { children, title, data, editPath } = props

  return (
    <section className={defaultStyles.root}>
      <div className={defaultStyles.wrap}>
        <ContentHeader editPath={editPath}>{title}</ContentHeader>
        <main>{children}</main>
        <ContentFooter />
      </div>
      <PageInfo>
        <TableOfContents data={data} />
      </PageInfo>
    </section>
  )
}

export default Content
