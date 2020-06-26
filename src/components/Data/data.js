import React, { useContext } from "react"

import { useStaticQuery, graphql } from "gatsby"

const DataContext = React.createContext()

const DataProvider = props => {
  const data = useStaticQuery(graphql`
    query {
      pageGroups: allPageGroupsYaml(filter: { order: { gt: 0 } }) {
        nodes {
          order
          title
          name
          url
          pages {
            title
            url
            pages {
              title
              url
              pages {
                title
                url
              }
            }
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
      variables: allVariablesYaml {
        nodes {
          variables {
            name
            value
          }
        }
      }
      site: site {
        siteMetadata {
          author
          description
          title
          editPageBaseUrl
          githubRepository
        }
      }
      homeConfiguration: configurationYaml(name: { eq: "Home" }) {
        subtitle
        title
        links {
          description
          title
          url
        }
      }
      backgroundImages: allFile(filter: { base: { regex: "/.*-bg.jpg/" } }) {
        nodes {
          base
          publicURL
        }
      }
    }
  `)

  const { children } = props

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export default DataProvider

export const useData = () => useContext(DataContext)
