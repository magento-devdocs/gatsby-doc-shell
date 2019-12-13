import React, { useCallback, useRef } from "react"

// Import the styles ensuring correct ordering.
import "@spectrum-css/textfield"
import "@spectrum-css/search"
import "@spectrum-css/icon"
import "@spectrum-css/button"

// Import the svgs directly
import Magnifier from "@spectrum-css/icon/combined/Magnifier.svg"
import CrossSmall from "@spectrum-css/icon/combined/CrossSmall.svg"

import defaultClasses from "./search.module.css"

const classes = {
  root: `spectrum-Search ${defaultClasses.root}`,
  input: `spectrum-Search-input spectrum-Textfield ${defaultClasses.inputField}`,
  magnifier: `spectrum-Icon spectrum-UIIcon-Magnifier spectrum-Search-icon ${defaultClasses.magnifier}`,
  clear: `spectrum-ClearButton ${defaultClasses.clear}`,
}

const Search = props => {
  const inputElement = useRef(null)

  const handleSubmit = useCallback(e => {
    if (e) e.preventDefault()
    const value = inputElement.current.value
    console.log(`Searching for "${value}".`)
  }, [])

  const handleClear = useCallback(() => {
    inputElement.current.value = null
  }, [])

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <input
        ref={inputElement}
        type="search"
        placeholder="Search"
        name="search"
        className={classes.input}
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
    </form>
  )
}

export default Search
