import { Link } from "gatsby-plugin-intl"
import React from "react"
import TinyLogo from "./tiny-logo"

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()}</p>
    <Link to="/">
      <TinyLogo />
    </Link>
  </footer>
)

export default Footer
