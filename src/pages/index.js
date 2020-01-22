import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"

import PageLayout from "../layouts/PageLayout"

import WhatsNew from "../components/WhatsNew"

const IndexPage = () => {
  const title = "Home"

  return (
    <PageLayout title={title} slug="/">
      <h1>Gatsby Documentation Site</h1>
      <p>Welcome to the Gatsby documentation site</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <WhatsNew days={7} />
      <Link to="/page-2/">Go to page 2</Link>
    </PageLayout>
  )
}

export default IndexPage
