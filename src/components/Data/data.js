import React, { useContext } from "react"

import { useStaticQuery, graphql } from "gatsby"

const DataContext = React.createContext()

const DataProvider = props => {
  const data = useStaticQuery(graphql`
    query {
      pageGroups: allPageGroupsYaml {
        nodes {
          order
          title
          name
          url
          pages {
            title
            url
          }
        }
      }
      externalPages: allExternalPagesYaml {
        nodes {
          title
          name
          sites {
            title
            link
          }
        }
      }
      footerData: dataYaml(name: { eq: "Footer" }) {
        name
        copyrightYear
        links {
          name
          url
        }
      }
    }
  `)

  const { children } = props

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export default DataProvider

export const useData = () => useContext(DataContext)
