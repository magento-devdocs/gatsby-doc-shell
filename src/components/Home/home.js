import React from "react"

import Intro from "./intro"
import LinkCards from "./linkCards"

import { useData } from "../Data"

const Home = props => {
  const { homeConfiguration } = useData()

  const { title, subtitle, links } = homeConfiguration
  return (
    <>
      <Intro title={title} subtitle={subtitle} />
      <LinkCards cardsData={links} />
    </>
  )
}

export default Home
