import React, { useRef, useCallback } from "react"

import algoliasearch from "algoliasearch/lite"

import { InstantSearch, connectAutoComplete } from "react-instantsearch-dom"
import Magnifier from "@spectrum-css/icon/combined/Magnifier.svg"
import CrossSmall from "@spectrum-css/icon/combined/CrossSmall.svg"

import Search from "./search"
import { useAppContext } from "../App"

import defaultStyles from "./quickSearch.module.css"

const Autocomplete = ({ hits, currentRefinement, refine }) => {
  const inputElement = useRef(null)

  const handleClear = useCallback(() => {
    inputElement.current.value = null
  }, [])

  const changeHandler = event => refine(event.currentTarget.value)

  const classes = {}

  const results = hits.map(hit => {
    return <li key={hit.objectID}>{hit.slug}</li>
  })

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <input
          ref={inputElement}
          type="search"
          placeholder="Search"
          name="search"
          className={classes.input}
          onChange={changeHandler}
          value={currentRefinement}
        />
        <Magnifier
          className={classes.magnifier}
          focusable="false"
          aria-hidden="true"
        />
        <button type="reset" className={classes.clear} onClick={handleClear}>
          <CrossSmall
            className="spectrum-Icon spectrum-UIIcon-CrossSmall"
            focusable="false"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className={classes.resultContainer}>
        <ul>{results}</ul>
      </div>
    </div>
  )
  /*   <ul>
    <li>
      <input
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
      />
    </li>
    {hits.map(hit => (
      <li key={hit.objectID}>{hit.slug}</li>
    ))}
  </ul> */
}

const CustomAutocomplete = connectAutoComplete(Autocomplete)

const QuickSearch = () => {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  const [appState, api] = useAppContext()

  const { activePanel } = appState

  const classes =
    activePanel === "search" ? defaultStyles.active : defaultStyles.root

  return (
    <div className={classes}>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_SITE_INDEX}
        searchClient={searchClient}
      >
        <CustomAutocomplete />
      </InstantSearch>
    </div>
  )
}

export default QuickSearch
