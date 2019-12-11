import React, { useCallback, useRef } from "react"

// Import the styles ensuring correct ordering.
import "@spectrum-css/textfield"
import "@spectrum-css/search"
import "@spectrum-css/icon"
import "@spectrum-css/button"

// Import the svgs directly
import Magnifier from "@spectrum-css/icon/combined/Magnifier.svg"
import CrossSmall from "@spectrum-css/icon/combined/CrossSmall.svg"

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
    <form className="spectrum-Search" onSubmit={handleSubmit}>
      <input
        ref={inputElement}
        type="search"
        placeholder="Search"
        name="search"
        className="spectrum-Search-input spectrum-Textfield"
      />
      <Magnifier
        className="spectrum-Icon spectrum-UIIcon-Magnifier spectrum-Search-icon"
        focusable="false"
        aria-hidden="true"
      />
      <button
        type="reset"
        className="spectrum-ClearButton"
        onClick={handleClear}
      >
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
