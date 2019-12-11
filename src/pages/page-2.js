import React from "react"
import { Link } from "gatsby"

import PageLayout from "../layouts/PageLayout"

const SecondPage = () => {
  const title = "Page two"

  return (
    <PageLayout title={title} slug="/page-2/">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </PageLayout>
  )
}

export default SecondPage
