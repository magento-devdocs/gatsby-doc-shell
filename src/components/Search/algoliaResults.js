import React from "react"
import { Link } from "gatsby"

import defaultStyles from "./algoliaResults.module.css"

const AlgoliaResults = props => {
  const { hits, currentRefinement } = props

  if (currentRefinement == false) {
    return null
  }

  const results = hits.map(hit => {
    const { title, slug, objectID: id } = hit

    const label = title || "Untitled page"

    return (
      <li key={id} className={defaultStyles.listItem}>
        <Link className={defaultStyles.link} to={slug}>
          {label} <small>({slug})</small>
        </Link>
      </li>
    )
  })

  return <ul className={defaultStyles.root}>{results}</ul>
}

export default AlgoliaResults
