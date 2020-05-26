import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <p className="bigger">
        Are you a Indie developer looking for free webspace to host your portfolio?
        <br />
        Check out GitHub Pages. To make things perfect we provide you with a free and sleek URL as shown in the examples
        above.
      </p>
      <p>
        <FormattedMessage id="description" />
      </p>
      <p>Status: Work in progress.</p>
      <Link to="/terms/">Terms</Link>
    </Layout>
  )
}

export default IndexPage
