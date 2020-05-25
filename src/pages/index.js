import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>The community of independent creators.</p>
    <p>Status: Work in progress.</p>
    <Link to="/terms/">Terms</Link>
  </Layout>
)

export default IndexPage
