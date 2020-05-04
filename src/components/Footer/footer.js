import React from "react"

import defaultStyles from "./footer.module.css"

import { useData } from "../Data"

const classes = {
  root: defaultStyles.root,
  link: `${defaultStyles.link} spectrum spectrum-Link`,
  linkContainer: defaultStyles.linkContainer,
  container: defaultStyles.container,
  linkList: defaultStyles.linkList,
  listItem: defaultStyles.listItem
}

const Footer = props => {
  const { footerData } = useData()

  const { copyrightYear, links } = footerData

  const linkList = links.map(link => {
    return (
      <li className={classes.listItem} key={link.name}>
        <a className={classes.link} href={link.url}>
          {link.name}
        </a>
      </li>
    )
  })

  return (
    <footer className={classes.root}>
      <div className={classes.container}>
        <div className={classes.linkContainer}>
          <ul className={classes.linkList}>{linkList}</ul>
          </div>
        <div>© {copyrightYear} Magento. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
