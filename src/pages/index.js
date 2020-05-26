import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <p>
        <FormattedMessage id="description" />
      </p>
      <p>Status: Work in progress.</p>
      <Link to="/terms/">Terms</Link>
    </Layout>
  )
}

export default IndexPage
