import React from "react"

import ContentHeader from './contentHeader'

import defaultStyles from "./content.module.css"

const Content = props => {
  const { children, title } = props

  return (
    <section className={defaultStyles.root}>
      <div className={defaultStyles.wrap}>
        <ContentHeader>{title}</ContentHeader>
        <main>{children}</main>
        <footer className={defaultStyles.footer}>Footer</footer>
      </div>
      <div className={defaultStyles.info}>Page Info</div>
    </section>
  )
}

export default Content
