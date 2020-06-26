import React from "react"
import { Link } from "gatsby"

import defaultStyles from "./linkCards.module.css"

const LinkCards = props => {
  const { cardsData } = props

  const classes = {
    ...defaultStyles,
  }

  const cards = cardsData.map(data => {
    const { url, title, description } = data
    return (
      <div key={title.concat(url)} className={classes.card}>
        <Link className={classes.cardLink} to={url}>
          <h3 className={classes.cardTitle}>{title}</h3>
          <p className={classes.cardDescription}>{description}</p>
        </Link>
      </div>
    )
  })

  return <div className={classes.root}>{cards}</div>
}

export default LinkCards
