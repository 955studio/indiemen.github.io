import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"
import Typewriter from "typewriter-effect"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ fontSize: "2.2em", display: "flex", flexDirection: "row" }}>
        <span>https://</span>
        <Typewriter
          options={{
            strings: ["erik", "firede", "junmer", "treelite"],
            autoStart: true,
            loop: true,
            cursorClassName: "typewriter-cursor",
          }}
        />
        <span>.indie.men</span>
      </div>
      <p className="bigger">
        Are you a Indie developer looking for free webspace to host your portfolio?
        <br />
        Check out{" "}
        <a title="GitHub Pages" rel="nofollow noreferrer noopener" target="_blank" href="https://pages.github.com/">
          GitHub Pages
        </a>
        . To make things perfect we provide you with a free and sleek URL as shown in the examples above.
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
