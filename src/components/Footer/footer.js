import React from "react"

import defaultStyles from "./footer.module.css"

import { useData } from "../Data"

const classes = {
  root: ["spectrum", defaultStyles.root, "spectrum--dark"].join(" "),
  link: "spectrum spectrum-Link",
  linkContainer: defaultStyles.linkContainer,
}

const Footer = props => {
  const { footerData } = useData()

  const { copyrightYear, links } = footerData

  const linkList = links.map(link => {
    return (
      <span key={link.name}>
        <a className={classes.link} href={link.url}>
          {link.name}
        </a>
      </span>
    )
  })

  return (
    <footer className={classes.root}>
      <div className={classes.linkContainer}>{linkList}</div>
      <div>© {copyrightYear} Magento. All rights reserved.</div>
    </footer>
  )
}

export default Footer
