import React, { useRef, useCallback } from "react"

import defaultStyles from "./algoliaAutocomplete.module.css"
import { connectAutoComplete } from "react-instantsearch-dom"

import Magnifier from "@spectrum-css/icon/combined/Magnifier.svg"
import CrossSmall from "@spectrum-css/icon/combined/CrossSmall.svg"

import AlgoliaResults from './algoliaResults'

const AlgoliaAutocomplete = props => {
  const { hits, currentRefinement, refine } = props

  const inputElement = useRef(null)

  const handleClear = useCallback(() => {
    inputElement.current.value = null
  }, [])

  const changeHandler = event => refine(event.currentTarget.value)

  const classes = {
    root: `spectrum-Search ${defaultStyles.root}`,
    input: `spectrum-Search-input spectrum-Textfield ${defaultStyles.inputField}`,
    magnifier: `spectrum-Icon spectrum-UIIcon-Magnifier spectrum-Search-icon ${defaultStyles.magnifier}`,
    clear: `spectrum-ClearButton ${defaultStyles.clear}`,
    form: defaultStyles.form,
    resultContainer: defaultStyles.resultContainer,
  }

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
        <AlgoliaResults hits={hits} currentRefinement={currentRefinement}/>
      </div>
    </div>
  )
}

export default connectAutoComplete(AlgoliaAutocomplete)
