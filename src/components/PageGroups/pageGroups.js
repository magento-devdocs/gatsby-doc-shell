import React, { useContext } from "react"

import { useStaticQuery, graphql } from "gatsby"

const PageGroupsContext = React.createContext()

const PageGroupsProvider = props => {
  const data = useStaticQuery(graphql`
    query {
      pageGroups: allPageGroupsYaml {
        nodes {
          name
          pages {
            title
            url
          }
        }
      }
    }
  `)

  const { children } = props

  return (
    <PageGroupsContext.Provider value={data.pageGroups.nodes}>
      {children}
    </PageGroupsContext.Provider>
  )
}

export default PageGroupsProvider

export const usePageGroups = () => useContext(PageGroupsContext)
