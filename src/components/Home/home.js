import React from "react"
import { Link } from "gatsby"

import Intro from "./intro"

const Home = props => {
  return (
    <>
      <Intro />
      <h1>Gatsby Documentation Site</h1>
      <p>Welcome to the Gatsby documentation site</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export default Home
