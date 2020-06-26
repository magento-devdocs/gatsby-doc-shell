import React from "react"

import PageLayout from "../layouts/PageLayout"

import Home from "../components/Home"

const IndexPage = () => {
  const title = "Home"

  return (
    <PageLayout title={title} slug="/">
      <Home />
    </PageLayout>
  )
}

export default IndexPage
