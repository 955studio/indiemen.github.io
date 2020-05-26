import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#025064`,
      marginBottom: `1.45rem`,
    }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
      <Link to="/" title={siteTitle}>
        <Logo />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
