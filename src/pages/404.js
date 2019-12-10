import React from "react"

import PageLayout from "../layouts/PageLayout"

const NotFoundPage = () => {
  const title = "404: Not found"

  return (
    <PageLayout title={title}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageLayout>
  )
}

export default NotFoundPage
