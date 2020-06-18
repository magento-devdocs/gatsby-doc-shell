import React from "react"

import algoliasearch from "algoliasearch/lite"

import { InstantSearch, connectAutoComplete } from "react-instantsearch-dom"

import Search from "./search"
import Autocomplete from "./algoliaAutocomplete"
import { useAppContext } from "../App"

import defaultStyles from "./quickSearch.module.css"

const QuickSearch = () => {
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  const [appState, api] = useAppContext()

  const { activePanel } = appState

  const active = activePanel === 'search'

  const classes =
    active ? defaultStyles.active : defaultStyles.root

  return (
    <div className={classes}>
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_SITE_INDEX}
        searchClient={searchClient}
      >
        <Autocomplete active={active}/>
      </InstantSearch>
    </div>
  )
}

export default QuickSearch
