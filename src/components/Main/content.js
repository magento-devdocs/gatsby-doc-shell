import React from "react"

import defaultStyles from "./content.module.css"

const Content = props => {
  const { children, title } = props

  return (
    <section className={defaultStyles.root}>
      <div className={defaultStyles.wrap}>
        <header className={defaultStyles.header}>
          <section className={defaultStyles.pageIntro}>
            <h1 className="spectrum-Heading1 spectrum-Heading--XXL">{title}</h1>
          </section>
        </header>
        <main>{children}</main>
        <footer className={defaultStyles.footer}>Footer</footer>
      </div>
      <div className={defaultStyles.info}>Page Info</div>
    </section>
  )
}

export default Content
