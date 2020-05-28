import { PageProps } from "gatsby"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "terms.title" })} />
      <h1>
        <FormattedMessage id="terms.title" />
      </h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
