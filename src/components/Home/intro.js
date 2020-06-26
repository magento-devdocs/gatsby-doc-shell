import React from "react"

import defaultStyles from "./intro.module.css"

const Intro = props => {
  const { title, subtitle, bgImageUrl } = props

  const classes = {
    ...defaultStyles,
    heading: `${defaultStyles.heading} spectrum-Heading1 spectrum-Heading--XXL`,
  }
  const sectionStyle = { backgroundImage: `url(${bgImageUrl})` }

  return (
    <section className={classes.root} style={sectionStyle}>
      <div className={classes.content}>
        <h1 className={classes.heading}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
      </div>
    </section>
  )
}

export default Intro
