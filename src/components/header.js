import { Link, useIntl } from "gatsby-plugin-intl"
import React from "react"
import Logo from "./logo"

const Header = () => {
  const intl = useIntl()
  const titleText = `${intl.formatMessage({ id: "title" })} - ${intl.formatMessage({ id: "description" })}`

  return (
    <header style={{ paddingBottom: 36 }}>
      <Link to="/" title={titleText}>
        <Logo />
      </Link>
    </header>
  )
}

export default Header
