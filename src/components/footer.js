import { Link, FormattedMessage } from "gatsby-plugin-intl"
import React from "react"
import TinyLogo from "./tiny-logo"

const Footer = () => (
  <footer>
    <span>© {new Date().getFullYear()}</span>
    <div>
      <Link to="/terms/">
        <FormattedMessage id="terms.title" />
      </Link>
      <Link to="/privacy/">
        <FormattedMessage id="privacy.title" />
      </Link>
      <Link to="/faq/">
        <FormattedMessage id="faq.title" />
      </Link>
    </div>
    <Link to="/">
      <TinyLogo />
    </Link>
  </footer>
)

export default Footer
