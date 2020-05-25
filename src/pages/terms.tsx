import { Link, PageProps } from "gatsby"
// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Terms and Conditions" />
    <h1>Terms and Conditions</h1>
    <p>Work in Progress: ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
