import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"

import PageLayout from "../layouts/PageLayout"

const IndexPage = () => {
  const title = "Home"

  return (
    <PageLayout title={title}>
      <h1>Gatsby Documentation Site</h1>
      <p>Welcome to the Gatsby documentation site</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </PageLayout>
  )
}

export default IndexPage
