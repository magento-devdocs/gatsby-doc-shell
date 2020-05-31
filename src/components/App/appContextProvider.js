import React, { useState, createContext, useContext, useMemo } from "react"

const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [activePanel, setActivePanel] = useState()

  const appState = {
    // Current values: undefined, 'search'
    activePanel: activePanel,
  }

  const appApi = {
    closePanel: () => {
      setActivePanel(undefined)
    },

    openSearch: () => {
      setActivePanel("search")
    },
  }

  const value = useMemo(() => [appState, appApi], [appState, appApi])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider

export const useAppContext = () => useContext(AppContext)
