import { Link } from "gatsby-plugin-intl"
import React from "react"
import TinyLogo from "./tiny-logo"

const Footer = () => (
  <footer
    style={{
      marginBottom: `1.45rem`,
    }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
      }}>
      <Link to="/">
        <TinyLogo />
      </Link>
      <span>© {new Date().getFullYear()}</span>
    </div>
  </footer>
)

export default Footer
